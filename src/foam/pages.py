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
            {'\'/\'' if p.name == 'home' else p.name: p.js_config 
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
        elif type(data[k]) in [str, int, bool]:
            if data[k] and k.startswith('noquotes_'):
                result += f'{k[9:]}: {data[k]}, '
            elif data[k] and k.endswith('Fn'):
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
    visible_fn: str = ''

    def __init__(self, field_config):
        if type(field_config) == str:
            self.field = field_config
        else:
            self.field = field_config['field']
            self.display = field_config['display'] if 'display' in field_config.keys() else ''
            self.target = field_config['target'] if 'target' in field_config.keys() else ''
            self.visible_fn = field_config['visible_fn'] if 'visible_fn' in field_config.keys() else ''

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
            'visibleFn': f'(params, data) => {self.visible_fn}' if self.visible_fn else '',
        }


@dataclass
class EditField:
    field: str
    display: str = ''
    lookup: str = ''
    visible_fn: str = ''

    def __init__(self, field_config):
        if type(field_config) == str:
            self.field = field_config
        else:
            self.field = field_config['field']
            self.display = field_config['display'] if 'display' in field_config.keys() else ''
            self.lookup = field_config['lookup'] if 'lookup' in field_config.keys() else ''
            self.visible_fn = field_config['visible_fn'] if 'visible_fn' in field_config.keys() else ''

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
            'visibleFn': f'(params, data) => {self.visible_fn}' if self.visible_fn else '',
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
    display: str
    params_fn: str = ''

    def add_refs(self, config, page):
        if self.table_page not in config.pages_dict.keys():
            config_error(f'Unexpected page {self.table_page} found in config for page "{page}".')
        else:
            table_page = config.pages_dict[self.table_page]
            if table_page.type and table_page.type != 'Table':
                config_error(f'The table_page for a reference page must be a Table, but "{table_page.name}" is a {table_page.type} in "{page}".')
        return []

    @property
    def js_config(self):
        return {
            'tablePage': self.table_page,
            'display': self.display,
            'paramsFn': f'(params, data) => {self.params_fn}' if self.params_fn else '',
        }

@dataclass
class Action:
    display: str
    pretarget_fn: str = ''
    pretarget: str = ''
    target: str = ''
    mode: str = ''
    params_fn: str = ''
    visible_fn: str = ''

    def add_refs(self, config, page):
        if self.target and self.target not in config.pages_dict.keys() and self.target not in RESERVED_TARGETS:
            config_error(f'Unexpected page "{self.target}" found in config for button on page "{page}".')
        return [] if self.target in RESERVED_TARGETS else [NextPage(display=self.display, target=self.target)]

    @property
    def js_config(self):
        return {
            'display': self.display,
            'pretargetFn': f'(params, data, context) => {self.pretarget_fn}' if self.pretarget_fn else '',
            'pretarget': self.pretarget,
            'target': self.target,
            'mode': self.mode,
            'paramsFn': f'(params, data) => {self.params_fn}' if self.params_fn else '',
            'visibleFn': f'(params, data) => {self.visible_fn}' if self.visible_fn else '',
        }


@dataclass
class LinksBox:
    name: str
    links: list[Action]

    def __post_init__(self):
        self.links = [Action(**l) for l in self.links] if self.links else []

    def add_refs(self, config, page):
        next_pages = []
        for l in self.links:
            next_pages += l.add_refs(config, page)
        return next_pages

    @property
    def js_config(self):
        return {
            'name': self.name,
            'links': [l.js_config for l in self.links],
        }


@dataclass
class LinksPage:
    boxes: list[LinksBox] = None

    def __post_init__(self):
        self.boxes = [LinksBox(**b) for b in self.boxes] if self.boxes else []

    def add_refs(self, config, page):
        next_pages = []
        for b in self.boxes:
            next_pages += b.add_refs(config, page)
        return next_pages

    def default_data(self, config):
        return []

    @property
    def js_config(self):
        return {
            'boxes': [b.js_config for b in self.boxes],
        }


@dataclass
class DataPage:
    source: str
    on_load_fn: str = ''
    params_fn: str = ''
    buttons: list[Action] = None
    load_fn: str = ''

    def __post_init__(self):
        self.buttons = [Action(**b) for b in self.buttons] if self.buttons else []

    def default_data(self, config):
        return self._data_reqs

    def js_config(self):
        return {
            'source': self.source,
            'dataKey': self.data_key,
            'buttons': [b.js_config for b in self.buttons],
        }


@dataclass
class RecordPage(DataPage):
    data_key: str = 'record'
    new_record: str = ''
    new_record_fn: str = ''

    def __post_init__(self):
        super().__post_init__()
        self._data_reqs = [RecordData(self.data_key, self)]


@dataclass
class TableDataPage(DataPage):
    data_key: str = 'table'
    new_records: str = ''

    def __post_init__(self):
        super().__post_init__()
        self._data_reqs = [TableData(self.data_key, self)]


@dataclass
class FormPage(RecordPage):
    view_fields: list[ViewField] = None
    edit_fields: list[EditField] = None
    reference_tables: list[ReferenceTable] = None

    def __post_init__(self):
        super().__post_init__()
        self.view_fields = [ViewField(f) for f in self.view_fields] if self.view_fields else []
        self.edit_fields = [EditField(f) for f in self.edit_fields] if self.edit_fields else []
        self.reference_tables = [ReferenceTable(**t) for t in self.reference_tables] if self.reference_tables else []


    def add_refs(self, config, page):
        for t in self.reference_tables:
            ref = config.pages_dict[t.table_page].config.default_data(config, t.table_page)[0]
            ref.params_fn = t.params_fn
            self._data_reqs.append(ref)

        next_pages = []
        if self.source not in config.tables_dict.keys():
            config_error(f'Unexpected source table "{self.source}" found in page config "{page}"')
        else:
            for f in self.view_fields:
                next_pages += f.add_refs(config.tables_dict[self.source], page)
            for f in self.edit_fields:
                next_pages += f.add_refs(config.tables_dict[self.source], page)
            for t in self.reference_tables:
                next_pages += t.add_refs(config, page)
            for b in self.buttons:
                next_pages += b.add_refs(config, page)
        return next_pages

    @property
    def js_config(self):
        return {
            **super().js_config(),
            'viewFields': [f.js_config for f in self.view_fields],
            'editFields': [f.js_config for f in self.edit_fields],
            'referenceTables': [t.js_config for t in self.reference_tables],
        }

@dataclass
class TablePage(TableDataPage):
    view_columns: list[Column] = None
    edit_columns: list[Column] = None
    search_fields: list[ReferenceTable] = None
    row_action: Action = None

    def __post_init__(self):
        super().__post_init__()
        self.view_columns = [Column(**c) for c in self.view_columns] if self.view_columns else []
        self.edit_columns = [Column(**c) for c in self.edit_columns] if self.edit_columns else []
        self.row_action = Action(**self.row_action) if self.row_action else None

    def add_refs(self, config, page):
        next_pages = []
        if self.source not in config.tables_dict.keys():
            config_error(f'Unexpected source table "{self.source}" found in page config "{page}"')
        else:
            table_config = config.tables_dict[self.source]
            for c in self.view_columns:
                next_pages += c.add_refs(table_config, page)
            for c in self.edit_columns:
                next_pages += c.add_refs(table_config, page)
            for b in self.buttons:
                next_pages += b.add_refs(config, page)
            for s in self.search_fields or []:
                if s not in [f.name for f in table_config.fields]:
                    config_error(f'Unexpected field {table_config.name}.{s} found in config for page "{page}".')
            if self.row_action:
                next_pages += self.row_action.add_refs(config, page)
        return next_pages

    def default_data(self, config, name='table'):
        if name == 'table':
            return self._data_reqs
        else:
            return [TableData(name, self)]

    @property
    def js_config(self):
        return {
            **super().js_config(),
            'rowAction': self.row_action.js_config if self.row_action else None,
            'viewColumns': [c.js_config for c in self.view_columns],
            'editColumns': [c.js_config for c in self.edit_columns],
            'searchFields': self.search_fields,
        }


@dataclass
class GridPage(TableDataPage):
    row_field: str = ''
    column_field: str = ''
    display_field: str = ''

    def add_refs(self, config, page):
        next_pages = []
        if self.source not in config.tables_dict.keys():
            config_error(f'Unexpected source table "{self.source}" found in page config "{page}"')
        else:
            for b in self.buttons:
                next_pages += b.add_refs(config, page)
        return next_pages

    @property
    def js_config(self):
        return {
            **super().js_config(),
            'rowField': self.row_field,
            'columnField': self.column_field,
            'displayField': self.display_field,
        }


@dataclass
class FigurePage(TableDataPage):
    plots: dict = None
    layout: dict = None
 
    def add_refs(self, config, page):
        next_pages = []
        source = self.source[:-6] if self.source.endswith('_stats') else self.source
        if source not in config.tables_dict.keys():
            config_error(f'Unexpected source table "{self.source}" found in page config "{page}"')
        else:
            for b in self.buttons:
                next_pages += b.add_refs(config, page)
        return next_pages

    @property
    def js_config(self):
        return {
            **super().js_config(),
            'plots': self.plots,
            'layout': self.layout,
        }


@dataclass
class LayoutPage:
    cells: list
    direction: str = 'vertical'

    def __post_init__(self):
        self.cells = [Page(**p) for p in self.cells]

    def add_refs(self, config, page):
        next_pages = []
        ### Need to look at from_page configs to populate this list.
        ### Also verify that these pages exist.
        return next_pages

    def default_data(self, config):
        return []

    @property
    def js_config(self):
        return {
            'direction': self.direction,
            'cells': [c.js_config for c in self.cells],
        }

@dataclass
class UnderConstruction:

    def add_refs(self, config, page):
        return []

    def default_data(self, config):
        return []

    @property
    def js_config(self):
        return {}


@dataclass
class TableData:
    name: str
    source: str
    new: str = ''
    on_load_fn: str = ''
    parameters_fn: str = ''

    def __init__(self, name, page_config):
        self.name = name
        self.source = page_config.source
        self.new = page_config.new_records
        self.on_load_fn = page_config.on_load_fn
        self.params_fn = page_config.params_fn

    @property
    def js_config(self):
        return {
            'name': self.name,
            'noquotes_type': 'TableData',
            'source': self.source,
            'new': self.new,
            'onLoadFn': f'async (params, data, context) => {self.on_load_fn}' if self.on_load_fn else '',
            'paramsFn': f'(params, data) => {self.params_fn}' if self.params_fn else '',
        }


@dataclass
class RecordData:
    name: str
    source: str
    new: str = ''
    new_fn: str = ''
    parameters_fn: str = ''

    def __init__(self, name, page_config):
        self.name = name
        self.source = page_config.source
        self.new = page_config.new_record
        self.new_fn = page_config.new_record_fn
        self.params_fn = page_config.params_fn
        self.tables = []

    @property
    def js_config(self):
        return {
            'name': self.name,
            'noquotes_type': 'RecordData',
            'source': self.source,
            'new': self.new,
            'newFn': f'(params, data) => {self.new_fn}' if self.new_fn else '',
            'paramsFn': f'(params, data) => {self.params_fn}' if self.params_fn else '',
        }


page_configs = {
    'Form': FormPage,
    'Table': TablePage,
    'Grid': GridPage,
    'Figure': FigurePage,
    'Links': LinksPage,
    'Layout': LayoutPage,
    'UnderConstruction': UnderConstruction,
}


@dataclass
class NextPage:
    display: str
    target: str


@dataclass
class Page:
    name: str
    module: str = None
    display: str = ''
    descr: str = ''
    next_pages: list[NextPage] = ''
    type: str = ''
    config: str = None
    buttons: list[Action] = None
    data: str = None

    def __post_init__(self):
        add_display(self)
        if not self.config:
            self.type = self.type or 'UnderConstruction'
            self.config = page_configs['UnderConstruction']()
        elif self.type in page_configs:
            self.config = page_configs[self.type](**self.config)
        else:
            config_error(f'Unexpected page type "{self.type}" found in page config "{self.name}"')

        self.buttons = [Action(**b) for b in self.buttons] if self.buttons else []

        self.next_pages = [NextPage(**n) for n in self.next_pages] if self.next_pages else []

    def add_refs(self, config):
        self.next_pages = self.next_pages + self.config.add_refs(config, self.name)
        for b in self.buttons:
            self.next_pages += b.add_refs(config, self.name)
        self.data = self.config.default_data(config)

    @property
    def js_config(self):
        return {
            'name': self.name,
            'display': self.display,
            'config': self.config.js_config,
            'data': [d.js_config for d in self.data],
            'noquotes_type': self.type,
            'buttons': [b.js_config for b in self.buttons],
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
