from dataclasses import dataclass
import pydot
import yaml

from .utils import add_display, config_error, jinja_template, jinja_from_string

def get_schema_docs(config):
    return jinja_template('schema_html.jnj').render(config=config)

def get_model_code(config):
    return jinja_template('models_py.jnj').render(config=config)

def get_admin_code(config):
    return jinja_template('admin_py.jnj').render(config=config)

def get_serializers_code(config):
    return jinja_template('serializers_py.jnj').render(config=config)

def get_views_code(config):
    return jinja_template('views_py.jnj').render(config=config)

def get_router_code(config):
    return jinja_template('router_py.jnj').render(config=config)

def get_tests_code(config):
    test_config = {
        'tests': [{
            'name': t.name,
            'actions': [{
                'mode': a.mode,
                'table': a.table,
                'data': [{'key': k, 'value': a.data[k]} for k in a.data.keys()],
            } for a in t.actions]
        } for t in config.schema_tests]
    }
    return jinja_template('test_api_py.jnj').render(config=test_config)


def get_gen_pages(config, prefix=''):
    prefix = f'{prefix}_' if prefix else ''
    result = {
        'page_modules': [{
            'name': f'{prefix}home',
            'pages': [{
                'name': f'{prefix}home',
                'descr': 'Landing Page',
                'type': 'Links',
                'config': {
                    'boxes': [{
                        'name': m.display,
                        'links': [{
                            'target': f'find_{prefix}{t.name}', 'display': t.display
                        } for t in m.tables]
                    } for m in config.table_modules]
                }
            }]

        }] + [{
            'name': f'{prefix}{t.name}', 
            'pages': [{
                'name': f'find_{prefix}{t.name}',
                'descr': f'Search page for table {t.name}',
                'type': 'Table',
                'config': {
                    'source': t.name,
                    'view_columns': [{'field': f.name, 'width': 200} for f in t.fields],
                    'search_fields': [f.name for f in t.fields],
                    'row_action': {
                        'display': f'Select {t.display}',
                        'target': f'view_{prefix}{t.name}',
                        'params_fn': '({id: data.id})' 
                    },
                },
                'buttons': [{
                    'display': f'New {t.display}',
                    'target': f'edit_{prefix}{t.name}'
                }, {
                    'display': 'Done',
                    'target': 'back'
                }]
            }, {
                'name': f'view_{prefix}{t.name}',
                'descr': f'View a record from table {t.name}',
                'type': 'Form',
                'config': {
                    'source': t.name,
                    'view_fields': [f.name for f in t.fields],
                    'reference_tables': [{
                        'table_page': f'find_{prefix}{r.table.name}',
                        'display': r.table.display,
                        'params_fn': f'({{{r.name}__id: data.record.id}})'
                    } for r in t.backref_fields],
                },
                'buttons': [{
                    'display': 'Edit',
                    'target': f'edit_{prefix}{t.name}',
                    'params_fn': '({ id: params.id })'
                }, {
                    'display': 'Done',
                    'target': 'back'
                }]
            }, {
                'name': f'edit_{prefix}{t.name}',
                'descr': f'Edit a record from table {t.name}',
                'type': 'Form',
                'config': {
                    'source': t.name,
                    'edit_fields': [
                        {'field': f.name, 'lookup': f'find_{prefix}{f.ref_table.name}'} if f.ref_table else f.name
                        for f in t.fields],
                },
                'buttons': [{
                    'display': 'Save',
                    'target': 'back',
                    'pretarget_fn': '( context.clients.record.save() )'
                }, {
                    'display': 'Cancel',
                    'target': 'back'
                }]
            }]
        } for t in sum([m.tables for m in config.table_modules], [])]
    }
    return yaml.dump(result, sort_keys=False)


def write_schema_code(config):
    if config.paths.docs_path:
        with open(config.paths.schema_path / 'models.py', 'w') as f:
            f.write(get_model_code(config))

        with open(config.paths.schema_path / 'admin.py', 'w') as f:
            f.write(get_admin_code(config))

        with open(config.paths.schema_path / 'serializers.py', 'w') as f:
            f.write(get_serializers_code(config))

        with open(config.paths.schema_path / 'views.py', 'w') as f:
            f.write(get_views_code(config))

        with open(config.paths.schema_path / 'router.py', 'w') as f:
            f.write(get_router_code(config))

        with open(config.paths.schema_path / 'test_api.py', 'w') as f:
            f.write(get_tests_code(config))

    else:
        print('No docs_path set in config.')

    if config.paths.gen_pages_path:
        with open(config.paths.gen_pages_path / 'gen_pages.yaml', 'w') as f:
            f.write(get_gen_pages(config))

        with open(config.paths.gen_pages_path / 'admin_pages.yaml', 'w') as f:
            f.write(get_gen_pages(config, 'admin'))

def write_schema_docs(config):
    if config.paths.docs_path:
        for m in config.table_modules:
            m.svg_code = ModuleGraph(m).get_svg()

        with open(config.paths.docs_path / 'schema.html', 'w') as f:
            f.write(get_schema_docs(config))
    else:
        print('No docs_path set in config.')


@dataclass
class EnumOption:
    name: str = ''
    display: str = ''
    descr: str = ''

    def __init__(self, description) -> None:
        [self.name, rest] = description.split(' - ', 1)
        if '|' in rest:
            [self.display, self.descr] = rest.split(' | ', 1)
        else:
            self.display = rest


@dataclass
class Enum:
    name: str
    options: list[EnumOption]
    display: str = ''
    descr: str = ''

    def __post_init__(self):
        add_display(self)
        self.options = [EnumOption(o) for o in self.options]


@dataclass
class Folder:
    name: str
    extensions: list[str]
    display: str = ''
    descr: str = ''

    def __post_init__(self):
        add_display(self)


field_types = {
    'STRING': (
        'models.CharField(max_length=200, null=True, blank=True)',
        ['exact', 'contains']
    ),
    'TEXT': (
        'models.TextField(null=True, blank=True)',
        ['exact', 'contains']
    ),
    'DATE': (
        'models.DateField(null=True, blank=True)',
        ['exact', 'gt', 'lt', 'gte', 'lte']
    ),
    'INTEGER': (
        'models.IntegerField(null=True, blank=True)',
        ['exact', 'gt', 'lt', 'gte', 'lte']
    ),
    'enum': ('', ['exact']),
    'ref': ('', ['exact']),
    'doc': ('', ['exact']),
}


@dataclass
class Field:
    name: str
    type: str
    table: str
    display: str = ''
    descr: str = ''
    direction: str = ''
    backref: str = ''

    # Generated after construction
    short_type: str = None
    ref_table: str = None
    enum_class: str = None
    folder_class: str = None
    model_def: str = None
    filter_name: str = None
    filters: list[str] = None

    def __post_init__(self):
        add_display(self)
        self.filter_name = self.name
        if self.type.startswith('ref:'):
            self.short_type = 'ref'
            [_, self.ref_table] = self.type.split(':', 1)
            if not self.backref:
                self.backref = self.table.name
            self.filters = field_types[self.short_type][1]
            self.filter_name = f'{self.name}__id'
            # self.model_def is set in make_schema_refs() below, after back_refs are defined.
        elif self.type.startswith('enum:'):
            self.short_type = 'enum'
            [_, self.enum_class] = self.type.split(':', 1)
            self.model_def = 'models.CharField(max_length=200, null=True, blank=True)'
            self.filters = field_types[self.short_type][1]
            # self.model_def is set in make_schema_refs() below, after enum refs are defined.
        elif self.type.startswith('doc:'):
            self.short_type = 'doc'
            [_, self.folder_class] = self.type.split(':', 1)
            self.model_def = 'models.CharField(max_length=200, null=True, blank=True)'
            self.filters = field_types[self.short_type][1]
        else:
            self.short_type = self.type
            if self.short_type not in field_types:
                config_error(f'Unexpected type "{self.type}" found in field "{self.name}" of table "{self.table.name}".')
            else:
                (self.model_def, self.filters) = field_types[self.short_type]


@dataclass
class Table:
    name: str
    fields: list[Field]
    module: str
    display: str = ''
    class_name: str = ''
    descr: str = ''
    preprocess: str = ''

    # Generated after construction
    backref_fields = None

    def __post_init__(self):
        add_display(self)
        self.class_name = ''.join(w.capitalize() for w in self.name.split('_')) if not self.class_name else self.class_name
        self.fields = [Field(**f, table=self) for f in self.fields]
        self.backref_fields = []


@dataclass
class TableModule:
    name: str
    tables: list[Table]
    display: str = ''
    descr: str = ''
    svg_code: str = ''

    def __post_init__(self):
        add_display(self)
        self.tables = [Table(**t, module=self) for t in self.tables]


@dataclass
class SchemaTestAction:
    mode: str
    table: str
    data: dict

@dataclass
class SchemaTest:
    name: str
    actions: list[SchemaTestAction]

    def __post_init__(self):
        self.actions = [SchemaTestAction(**a) for a in self.actions]



def make_schema_refs(config):
    config.enums_dict = {e.name: e for e in config.enums}
    config.folders_dict = {f.name: f for f in config.folders}

    all_tables = sum([m.tables for m in config.table_modules], [])
    config.tables_dict = {t.name: t for t in all_tables}

    for t in all_tables:
        for f in t.fields:
            if f.ref_table:
                if f.ref_table not in config.tables_dict:
                    config_error(f'Table "{f.ref_table}" not found while processing field "{f.name}" in table "{f.table.name}".')
                else:
                    f.ref_table = config.tables_dict[f.ref_table]
                    f.ref_table.backref_fields.append(f)
                    f.model_def = f'models.ForeignKey(\'{f.ref_table.class_name}\', related_name=\'{f.backref}\', null=True, on_delete=models.SET_NULL)'
            if f.enum_class:
                if f.enum_class not in config.enums_dict:
                    config_error(f'Enum "{f.enum_class}" not found while processing field "{f.name}" in table "{f.table.name}".')
                else:
                    f.enum_class = config.enums_dict[f.enum_class]
            if f.folder_class:
                if f.folder_class not in config.folders_dict:
                    config_error(f'Folder "{f.folder_class}" not found while processing field "{f.name}" in table "{f.table.name}".')
                else:
                    f.folder_class = config.folders_dict[f.folder_class]


module_template = '''<<table border="0" cellborder="1" cellspacing="0">
<tr><td port="name_field" align="left">{{ table.display }}</td></tr>
<tr><td></td></tr>
{% for f in table.fields %}{% if f.ref_table %}
<tr><td port="{{ f.name }}" align="left">{{f.name}}</td></tr>
{% endif %}{% endfor %}
</table>>'''


class ModuleGraph(object):

    def __init__(self, module):
        self._module = module

    def get_svg(self):
        g = pydot.Dot(rankdir='LR')
        for t in self._module.tables:
            g.add_node(pydot.Node(t.name, shape='none', label=jinja_from_string(module_template).render(table=t)))
            for f in t.fields:
                if f.ref_table:
                    g.add_edge(pydot.Edge(f'{t.name}:{f.name}', f'{f.ref_table.name}:name_field'))
        return g.create_svg().decode("utf-8").split('-->\n', 2)[2]
