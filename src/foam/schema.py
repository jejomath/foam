from dataclasses import dataclass

from .utils import add_display, config_error, jinja_template

def write_schema_docs(config):
    print(jinja_template('schema_html.jnj').render(config=config))


field_types = {
    'STRING': '',
    'TEXT': '',
    'DATE': '',
    'enum': '',
    'ref': '',
    'doc': '',
}

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

    def __post_init__(self):
        add_display(self)
        if self.type.startswith('ref:'):
            self.short_type = 'ref'
            [_, self.ref_table] = self.type.split(':', 1)
            if not self.backref:
                self.backref = self.table.name
        elif self.type.startswith('enum:'):
            self.short_type = 'enum'
            [_, self.enum_class] = self.type.split(':', 1)
        elif self.type.startswith('doc:'):
            self.short_type = 'doc'
            [_, self.folder_class] = self.type.split(':', 1)
        else:
            self.short_type = self.type
            if self.short_type not in field_types:
                config_error(f'Unexpected type "{self.type}" found in field "{self.name}" of table "{self.table.name}".')


@dataclass
class Table:
    name: str
    fields: list[Field]
    module: str
    display: str = ''
    descr: str = ''
    preprocess_new: str = ''
    preprocess_update: str = ''

    # Generated after construction
    backref_fields = None

    def __post_init__(self):
        add_display(self)
        self.fields = [Field(**f, table=self) for f in self.fields]
        self.backref_fields = []


@dataclass
class TableModule:
    name: str
    tables: list[Table]
    display: str = ''
    descr: str = ''

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
