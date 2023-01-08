from dataclasses import dataclass, field
import yaml
from pathlib import Path

from .schema import Enum, Folder, TableModule, make_schema_refs
from .pages import PageClass, PageModule, validate_page_refs

BASE_CONFIG_FILE = 'config.yaml'

@dataclass
class Paths:
    docs_path: str = ''
    ui_path: str = ''
    schema_path: str = ''
    gen_pages_path: str = ''

    def __post_init__(self):
        self.docs_path = Path(self.docs_path) if self.docs_path else None
        self.ui_path = Path(self.ui_path) if self.ui_path else None
        self.schema_path = Path(self.schema_path) if self.schema_path else None
        self.gen_pages_path = Path(self.gen_pages_path) if self.gen_pages_path else None

@dataclass
class Config:
    paths: dict = field(default_factory=dict)
    page_classes: list[PageClass] = field(default_factory=list)
    config_files: list[str] = field(default_factory=list)
    enums: list[Enum] = field(default_factory=list)
    folders: list[Folder] = field(default_factory=list)
    table_modules: list[TableModule] = field(default_factory=list)
    page_modules: list[PageModule] = field(default_factory=list)

    # Generated in post-processing
    enums_dict = {}
    folders_dict = {}
    tables_dict = {}
    pages_dict = {}

    def __post_init__(self):
        self.paths = Paths(**self.paths) if self.paths else None
        self.enums = [Enum(**e) for e in self.enums]
        self.folders = [Folder(**f) for f in self.folders]
        self.table_modules = [TableModule(**m) for m in self.table_modules]
        self.page_classes = [PageClass(**c) for c in self.page_classes]
        self.page_modules = [PageModule(**m) for m in self.page_modules]
        make_schema_refs(self)
        validate_page_refs(self)


def load_config():
    with open(BASE_CONFIG_FILE) as f:
        raw_config = yaml.load(f, Loader=yaml.Loader)

    if 'config_files' in raw_config.keys():
        for file_path in raw_config['config_files']:
            with open(file_path) as f:
                additional_config = yaml.load(f, Loader=yaml.Loader)
            for (k, v) in additional_config.items():
                if k in raw_config.keys():
                    raw_config[k] += v
                else:
                    raw_config[k] = v

    return Config(**raw_config)
