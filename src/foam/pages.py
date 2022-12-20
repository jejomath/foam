from dataclasses import dataclass
import pydot
from os import system

from .utils import add_display, config_error, jinja_template, jinja_from_string

RESERVED_TARGETS = ['back']

# Add back-refs for next_pages
# Add nodes from other modules in pages and schema docs


def get_pages_docs(config):
    return jinja_template('pages_html.jnj').render(config=config)

def write_pages_docs(config):
    if config.paths.docs_path:
        for m in config.page_modules:
            m.svg_code = ModuleGraph(m).get_svg()
        with open(config.paths.docs_path / 'pages.html', 'w') as f:
            f.write(get_pages_docs(config))
    else:
        print('No docs_path set in config.')

def get_pages_code(config):
    tables = sum([m.tables for m in config.table_modules], [])

    return jinja_template('config_js.jnj').render(
        schema=get_js_dict({t.name: clean_table(t) for t in tables}),
        enums=get_js_dict({e.name: clean_enum(e) for e in config.enums}),
        pages=get_js_dict(
            {p.name: p.js_config 
             for p in sum([m.pages for m in config.page_modules], [])}
        ),
    )

def write_pages_code(config):
    if config.paths.docs_path:
        tmp_path = config.paths.ui_path / 'config_tmp.js'
        final_path = config.paths.ui_path / 'config.js' 
        with open(tmp_path, 'w') as f:
            f.write(get_pages_code(config))
        system(f'js-beautify {tmp_path} > {final_path}')
        system(f'rm {tmp_path}')
    else:
        print('No docs_path set in config.')


def lower_camel(value):
    tokens = value.split('_')
    return tokens[0] + ''.join([w.capitalize() for w in tokens[1:]])

def clean_table(table):
    return {
        'name': table.name,
        'fields': {f.name: {
            'name': f.name,
            'display': f.display,
            'fieldType': f.short_type,
            'refTable': (f.ref_table.name if f.ref_table else ''),
            'enumClass': (f.enum_class.name if f.enum_class else ''),
        } for f in table.fields},
    }

def clean_enum(enum):
    return {
        'name': enum.name,
        'options': [{
            'name': o.name,
            'display': o.display,
            'descr': o.descr,
        } for o in enum.options],
    }


def get_js_dict(data):
    result = '{'
    for k in data.keys():
        if data[k] is None:
            result += f'{k}: null, '
        elif type(data[k]) == str or type(data[k]) == int:
            if data[k] and (k.endswith('Fn') or k == 'type'):
                result += f'{k}: {data[k]}, '
            else:
                result += f'{k}: \'{data[k]}\', '
        elif type(data[k]) == list:
            result += f'{k}: {get_js_list(data[k])}, '
        else:
            result += f'{k}: {get_js_dict(data[k])}, '
    return result + '}'

def get_js_list(data):
    result = '['
    for v in data:
        if v is None:
            result += f'null, '
        elif type(v) == str or type(v) == int:
            result += f'\'{v}\', '
        elif type(v) == list:
            result += f'{get_js_list(v)}, '
        else:
            result += f'{get_js_dict(v)}, '
    return result + ']'


@dataclass
class PageClass:
    name: str
    path: str

@dataclass
class ViewField:
    field: str
    display: str = ''
    target: str = ''

    def __init__(self, field_config):
        if type(field_config) == str:
            self.field = field_config
        else:
            self.field = field_config.field
            self.display = field_config['display'] if 'display' in field_config.keys() else ''
            self.target = field_config['target'] if 'target' in field_config.keys() else ''

    def add_refs(self, table_config, page):
        if self.field not in [f.name for f in table_config.fields]:
            config_error(f'Unexpected field {table_config.name}.{self.field} found in config for page "{page}".')
        return []

    @property
    def js_config(self):
        return {
            'field': self.field,
            'display': self.display,
            'target': self.target,
        }


@dataclass
class EditField:
    field: str
    display: str = ''
    lookup: str = ''

    def __init__(self, field_config):
        if type(field_config) == str:
            self.field = field_config
        else:
            self.field = field_config['field']
            self.display = field_config['display'] if 'display' in field_config.keys() else ''
            self.lookup = field_config['lookup'] if 'lookup' in field_config.keys() else ''

    def add_refs(self, table_config, page):
        if self.field not in [f.name for f in table_config.fields]:
            config_error(f'Unexpected field {table_config.name}.{self.field} found in config for page "{page}".')
        return []

    @property
    def js_config(self):
        return {
            'field': self.field,
            'display': self.display,
            'lookup': self.lookup,
        }


@dataclass
class Column:
    field: str
    width: int

    def add_refs(self, table_config, page):
        if self.field not in [f.name for f in table_config.fields]:
            config_error(f'Unexpected field {table_config.name}.{self.field} found in config for page "{page}".')
        return []

    @property
    def js_config(self):
        return {
            'field': self.field,
            'width': self.width,
        }


@dataclass
class ReferenceTable:
    table_page: str
    params_fn: str = ''

    def add_refs(self, config, page):
        if self.table_page not in config.pages_dict.keys():
            config_error(f'Unexpected page {self.table_page} found in config for page "{page}".')
        else:
            table_page = config.pages_dict[self.table_page]
            if table_page.type and table_page.type != 'TablePage':
                config_error(f'The table_page for a reference page must be a TablePage, but "{table_page.name}" is a {table_page.type} in "{page}".')
        return []

    @property
    def js_config(self):
        return {
            'tablePage': self.table_page,
            'paramsFn': self.params_fn,
        }

@dataclass
class Action:
    display: str
    pretarget_fn: str = ''
    pretarget: str = ''
    target: str = ''
    mode: str = ''
    params_fn: str = ''

    def add_refs(self, config, page):
        if self.target not in config.pages_dict.keys() and self.target not in RESERVED_TARGETS:
            config_error(f'Unexpected page "{self.target}" found in config for button on page "{page}".')
        return [] if self.target in RESERVED_TARGETS else [NextPage(display=self.display, target=self.target)]

    @property
    def js_config(self):
        return {
            'display': self.display,
            'pretargetFn': self.pretarget_fn,
            'pretarget': self.pretarget,
            'target': self.target,
            'mode': self.mode,
            'paramsFn': self.params_fn
        }


@dataclass
class RecordPageConfig:
    source_table: str
    new_record: str = ''
    new_record_fn: str = ''
    view_fields: list[ViewField] = None
    edit_fields: list[EditField] = None
    reference_tables: list[ReferenceTable] = None
    buttons: list[Action] = None

    def __post_init__(self):
        self.view_fields = [ViewField(f) for f in self.view_fields] if self.view_fields else []
        self.edit_fields = [EditField(f) for f in self.edit_fields] if self.edit_fields else []
        self.reference_tables = [ReferenceTable(**t) for t in self.reference_tables] if self.reference_tables else []
        self.buttons = [Action(**b) for b in self.buttons] if self.buttons else []

    def add_refs(self, config, page):
        next_pages = []
        if self.source_table:
            if self.source_table not in config.tables_dict.keys():
                config_error(f'Unexpected source table "{self.source_table}" found in page config "{page}"')
            else:
                for f in self.view_fields:
                    next_pages += f.add_refs(config.tables_dict[self.source_table], page)
                for f in self.edit_fields:
                    next_pages += f.add_refs(config.tables_dict[self.source_table], page)
                for t in self.reference_tables:
                    next_pages += t.add_refs(config, page)
                for b in self.buttons:
                    next_pages += b.add_refs(config, page)
        return next_pages

    @property
    def js_config(self):
        return {
            'sourceTable': self.source_table,
            'newRecord': self.new_record,
            'newRecordFn': self.new_record_fn,
            'viewFields': [f.js_config for f in self.view_fields],
            'editFields': [f.js_config for f in self.edit_fields],
            'referenceTables': [t.js_config for t in self.reference_tables],
            'buttons': [b.js_config for b in self.buttons],
        }

@dataclass
class TablePageConfig:
    source_table: str
    new_record: str = ''
    new_record_fn: str = ''
    view_columns: list[Column] = None
    edit_columns: list[Column] = None
    search_fields: list[ReferenceTable] = None
    row_action: Action = None
    buttons: list[Action] = None

    def __post_init__(self):
        self.view_columns = [Column(**c) for c in self.view_columns] if self.view_columns else []
        self.edit_columns = [Column(**c) for c in self.edit_columns] if self.edit_columns else []
        self.buttons = [Action(**b) for b in self.buttons] if self.buttons else []
        self.row_action = Action(**self.row_action) if self.row_action else None

    def add_refs(self, config, page):
        next_pages = []
        if self.source_table:
            if self.source_table not in config.tables_dict.keys():
                config_error(f'Unexpected source table "{self.source_table}" found in page config "{page}"')
            else:
                table_config = config.tables_dict[self.source_table]
                for c in self.view_columns:
                    next_pages += c.add_refs(table_config, page)
                for c in self.edit_columns:
                    next_pages += c.add_refs(table_config, page)
                for b in self.buttons:
                    next_pages += b.add_refs(config, page)
                for s in self.search_fields:
                    if s not in [f.name for f in table_config.fields]:
                        config_error(f'Unexpected field {table_config.name}.{s} found in config for page "{page}".')
        return next_pages

    @property
    def js_config(self):
        return {
            'sourceTable': self.source_table,
            'newRecord': self.new_record,
            'newRecordFn': self.new_record_fn,
            'rowAction': self.row_action.js_config,
            'viewColumns': [c.js_config for c in self.view_columns],
            'editColumns': [c.js_config for c in self.edit_columns],
            'searchFields': self.search_fields,
            'buttons': [b.js_config for b in self.buttons],
        }


page_configs ={
    'RecordPage': RecordPageConfig,
    'TablePage': TablePageConfig,
}


@dataclass
class CustomPageConfig:
    config: str

    def add_refs(self, config, page):
        return []

    @property
    def js_config(self):
        return self.config


@dataclass
class NextPage:
    display: str
    target: str


@dataclass
class Page:
    name: str
    module: str
    display: str = ''
    descr: str = ''
    next_pages: list[NextPage] = ''
    type: str = ''
    config: str = None

    def __post_init__(self):
        add_display(self)
        if self.config and self.type in page_configs:
            self.config = page_configs[self.type](**self.config)
        else:
            self.config = CustomPageConfig(config=self.config)
        self.next_pages = [NextPage(**n) for n in self.next_pages] if self.next_pages else []

    def add_refs(self, config):
        if self.type and self.type in config.class_dict.keys():
            self.next_pages = self.next_pages + self.config.add_refs(config, self.name)

    @property
    def js_config(self):
        return {
            'name': self.name,
            'display': self.display,
            'config': self.config.js_config,
            'type': self.type,
        }


@dataclass
class PageModule:
    name: str
    pages: list[Page]
    display: str = ''
    descr: str = ''
    svg_code: str = ''

    def __post_init__(self):
        add_display(self)
        self.pages = [Page(**p, module=self) for p in self.pages]


def validate_page_refs(config):
    all_pages = sum([m.pages for m in config.page_modules], [])
    config.pages_dict = {p.name: p for p in all_pages}
    config.class_dict = {c.name: c for c in config.page_classes}

    for m in config.page_modules:
        for p in m.pages:
            p.add_refs(config)


module_template = '''<<table border="0" cellborder="1" cellspacing="0">
<tr><td port="name_field" align="left">{{ page.display }}</td></tr>
<tr><td></td></tr>
{% for p in page.next_pages %}
<tr><td port="{{ loop.index }}" align="left">{{ p.display }}</td></tr>
{% endfor %}
</table>>'''


class ModuleGraph(object):

    def __init__(self, module):
        self._module = module

    def get_svg(self):
        g = pydot.Dot(rankdir='LR')
        for p in self._module.pages:
            g.add_node(pydot.Node(p.name, shape='none', label=jinja_from_string(module_template).render(page=p)))
            for i, n in enumerate(p.next_pages):
                g.add_edge(pydot.Edge(f'{p.name}:{i + 1}', f'{n.target}:name_field'))
        return g.create_svg().decode("utf-8").split('-->\n', 2)[2]
