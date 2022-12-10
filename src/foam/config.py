from dataclasses import dataclass, field
import yaml

from .schema import Enum, Folder, TableModule, make_schema_refs
from .pages import PageClass, PageModule, validate_page_refs

BASE_CONFIG_FILE = 'config.yaml'


@dataclass
class Config:
    config_files: list[str] = field(default_factory=list)
    enums: list[Enum] = field(default_factory=list)
    folders: list[Folder] = field(default_factory=list)
    table_modules: list[TableModule] = field(default_factory=list)
    page_classes: list[PageClass] = field(default_factory=list)
    page_modules: list[PageModule] = field(default_factory=list)

    # Generated in post-processing
    enums_dict = {}
    folders_dict = {}
    tables_dict = {}
    pages_dict = {}

    def __post_init__(self):
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
