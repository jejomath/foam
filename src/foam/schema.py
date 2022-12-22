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


def write_schema_pages(config):
    result = {
        'page_modules': [{
            'name': 'home',
            'pages': [{
                'name': 'home',
                'descr': 'Landing Page',
                'type': 'LinksPage',
                'config': {
                    'boxes': [{
                        'name': m.display,
                        'links': [{
                            'target': f'find_{t.name}', 'display': t.display
                        } for t in m.tables]
                    } for m in config.table_modules]
                }
            }]

        }] + [{
            'name': t.name, 
            'pages': [{
                'name': f'find_{t.name}',
                'descr': f'Search page for table {t.name}',
                'type': 'TablePage',
                'config': {
                    'source_table': t.name,
                    'view_columns': [{'field': f.name, 'width': 200} for f in t.fields],
                    'search_fields': [f.name for f in t.fields],
                    'row_action': {
                        'display': f'Select {t.display}',
                        'target': f'view_{t.name}',
                        'params_fn': '(data) => ({id: data.id})' 
                    },
                    'buttons': [{
                        'display': f'New {t.display}',
                        'target': f'edit_{t.name}'
                    }, {
                        'display': 'Done',
                        'target': 'back'
                    }]
                }
            }, {
                'name': f'view_{t.name}',
                'descr': f'View a record from table {t.name}',
                'type': 'RecordPage',
                'config': {
                    'source_table': t.name,
                    'view_fields': [f.name for f in t.fields],
                    'reference_tables': [{
                        'table_page': f'find_{r.table.name}',
                        'display': r.table.display,
                        'params_fn': f'(data) => ({{{r.name}: data.id}})'
                    } for r in t.backref_fields],
                    'buttons': [{
                        'display': 'Edit',
                        'target': f'edit_{t.name}',
                        'params_fn': '(params) => ({ id: params.id })'
                    }, {
                        'display': 'Done',
                        'target': 'back'
                    }]
                },
            }, {
                'name': f'edit_{t.name}',
                'descr': f'Edit a record from table {t.name}',
                'type': 'RecordPage',
                'config': {
                    'source_table': t.name,
                    'edit_fields': [
                        {'field': f.name, 'lookup': f'find_{f.ref_table.name}'} if f.ref_table else f.name
                        for f in t.fields],
                    'buttons': [{
                        'display': 'Save',
                        'target': 'back',
                        'pretarget_fn': '(params, data, context) => { context.save() }'
                    }, {
                        'display': 'Cancel',
                        'target': 'back'
                    }]
                },
            }]
        } for t in sum([m.tables for m in config.table_modules], [])]
    }
    print(yaml.dump(result))

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
    else:
        print('No docs_path set in config.')


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
    'STRING': 'models.CharField(max_length=200, null=True, blank=True)',
    'TEXT': 'models.TextField(null=True, blank=True)',
    'DATE': 'models.DateField(null=True, blank=True)',
    'INTEGER': 'models.IntegerField(null=True, blank=True)',
    'enum': '',
    'ref': '',
    'doc': '',
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

    def __post_init__(self):
        add_display(self)
        if self.type.startswith('ref:'):
            self.short_type = 'ref'
            [_, self.ref_table] = self.type.split(':', 1)
            if not self.backref:
                self.backref = self.table.name
            # self.model_def is set in make_schema_refs() below, after back_refs are defined.
        elif self.type.startswith('enum:'):
            self.short_type = 'enum'
            [_, self.enum_class] = self.type.split(':', 1)
            self.model_def = 'models.CharField(max_length=200, null=True, blank=True)'
            # self.model_def is set in make_schema_refs() below, after enum refs are defined.
        elif self.type.startswith('doc:'):
            self.short_type = 'doc'
            [_, self.folder_class] = self.type.split(':', 1)
            self.model_def = 'models.CharField(max_length=200, null=True, blank=True)'
        else:
            self.short_type = self.type
            if self.short_type not in field_types:
                config_error(f'Unexpected type "{self.type}" found in field "{self.name}" of table "{self.table.name}".')
            else:
                self.model_def = field_types[self.short_type]


@dataclass
class Table:
    name: str
    fields: list[Field]
    module: str
    display: str = ''
    class_name: str = ''
    descr: str = ''
    preprocess_new: str = ''
    preprocess_update: str = ''

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
                    f.model_def = f'models.ForeignKey(\'{f.ref_table.class_name}\', null=True, on_delete=models.SET_NULL)'
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
