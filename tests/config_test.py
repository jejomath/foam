from os import path, chdir
from pathlib import Path
import yaml
from pathlib import Path

from foam.config import load_config, Config
from foam.utils import get_errors, clear_errors

def test_load():
    script_path = Path(path.dirname(path.realpath(__file__)))
    chdir(script_path / '../test_data/')
    load_config()

def paths_config():
    return yaml.safe_load('''
paths:
  docs_path: docs/
  ui_path: frontend/
  schema_path: backend/
    ''')

def test_parse_paths():
    result = Config(**paths_config())
    assert result.paths.docs_path == Path('docs/')
    assert result.paths.ui_path == Path('frontend/')
    assert result.paths.schema_path == Path('backend/')

def enums_config():
    return yaml.safe_load('''
        enums:
        - name: assay_type
          descr: A type of assay.
          options:
          - VITRO - in-vitro | Assays involving cells in plates
          - VIVO - in-vivo
          - CILICO - in-cilico
    ''')

def test_parse_enums():
    result = Config(**enums_config())
    assert len(result.enums) == 1
    e = result.enums[0]
    assert e.name == 'assay_type'
    assert e.display == 'Assay Type'
    assert e.descr == 'A type of assay.'
    assert len(e.options) == 3
    o = e.options[0]
    assert o.name == 'VITRO'
    assert o.display == 'in-vitro'
    assert o.descr == 'Assays involving cells in plates'
    o1 = e.options[1]
    assert o1.name == 'VIVO'
    assert o1.display == 'in-vivo'

def folders_config():
    return yaml.safe_load('''
        folders:
        - name: plate_map
          descr: Plate map files.
          extensions: ["xlsx", "csv", "tsv"]
    ''')

def test_parse_folders():
    result = Config(**folders_config())
    assert len(result.folders) == 1
    f = result.folders[0]
    assert f.name == 'plate_map'
    assert f.display == 'Plate Map'
    assert f.descr == 'Plate map files.'
    assert f.extensions == ['xlsx', 'csv', 'tsv']

def tables_config():
    config = yaml.safe_load('''
table_modules:
- name: experiments
  descr: Tables related to experiments.
  tables:

  - name: assay
    descr: A table with one record for each assay protocol.
    preprocess_new: add_assay_name
    fields:
    - name: name
      type: STRING
      descr: Name of the assay
    - name: type
      type: enum:assay_type
      descr: Type of assay

  - name: experiment
    display: My Experiment
    descr: A table with one record for each experiment.
    preprocess_new: add_experiment_name
    fields:
    - name: name
      type: STRING
      descr: Name of the experiment
    - name: description
      type: TEXT
      descr: A long-form description of the experiment
    - name: assay
      type: ref:assay
      descr: The assay used in the experiment
    - name: plate_map_file
      type: doc:plate_map
      descr: The file that the plate map was loaded from
    ''')
    config['enums'] = enums_config()['enums']
    config['folders'] = folders_config()['folders']
    return config


def test_parse_tables():
    result = Config(**tables_config())
    assert len(result.table_modules) == 1

    m = result.table_modules[0]
    assert m.name == 'experiments'
    assert m.display == 'Experiments'
    assert len(m.tables) == 2

    t = m.tables[0]
    assert t.name == 'assay'
    assert t.display == 'Assay'
    assert t.class_name == 'Assay'
    assert t.module.name == 'experiments'
    assert t.descr == 'A table with one record for each assay protocol.'
    assert len(t.backref_fields) == 1
    assert t.backref_fields[0].backref == 'experiment'
    assert len(t.fields) == 2

    f = t.fields[1]
    assert f.name == 'type'
    assert f.display == 'Type'
    assert f.descr == 'Type of assay'
    assert f.type == 'enum:assay_type'
    assert f.short_type == 'enum'
    assert f.enum_class.name == 'assay_type'
    # assert f.model_def.startswith(TBD!!!!!)

    t1 = m.tables[1]
    assert len(t1.fields) == 4
    assert t1.display == 'My Experiment'

    f2 = t1.fields[2]
    assert f2.type == 'ref:assay'
    assert f2.short_type == 'ref'
    assert f2.ref_table.name == 'assay'
    assert f2.model_def.startswith('models.ForeignKey')

    f3 = t1.fields[3]
    assert f3.type == 'doc:plate_map'
    assert f3.short_type == 'doc'
    assert f3.folder_class.name == 'plate_map'
    # assert f3.model_def.startswith(TBD!!!!!)

def test_catch_unexpected_type():
    config = tables_config()
    t0 = config['table_modules'][0]['tables'][0]

    t0['fields'][0]['type'] = 'BADTYPE'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    assert len(get_errors()) == 1

def test_catch_bad_enum_ref():
    config = tables_config()
    t0 = config['table_modules'][0]['tables'][0]

    t0['fields'][0]['type'] = 'enum:no_enum'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    assert len(get_errors()) == 1

def test_catch_bad_folder_ref():
    config = tables_config()
    t0 = config['table_modules'][0]['tables'][0]
    assert get_errors()[0].startswith('Enum')

    t0['fields'][0]['type'] = 'doc:no_folder'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Folder')

def test_catch_bad_table_ref():
    config = tables_config()
    t0 = config['table_modules'][0]['tables'][0]

    t0['fields'][0]['type'] = 'ref:no_table'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Table')

def pages_config():
    config = yaml.safe_load('''
page_classes:
- name: RecordPage
  path: ./RecordPage.js
- name: ListPage
  path: ./ListPage.js

page_modules:
  - name: experiments
    descr: Pages related to experiments.
    pages:
    - name: view_experiment
      descr: View details of a single experiment
      type: RecordPage
      config:
        source_table: experiment
        view_fields:
        - name
        reference_tables:
        - table_page: find_experiment
        buttons:
        - display: Edit
          target: edit_experiment

    - name: edit_experiment
      descr: Use this page to find experiments
      type: RecordPage
      config:
        source_table: experiment
        view_fields:
        - name
        edit_fields:
        - field: name
          lookup: foo
        buttons:
        - display: Save
          target: back
        - display: Cancel
          target: back

    - name: find_experiment
      descr: Use this page to find experiments
      type: ListPage
      config:
        source_table: experiment
        view_columns:
        - field: name
          width: 250
        edit_columns:
        - field: name
          width: 250
        search_fields:
        - name
        row_action:
          target: view_experiment
        buttons:
        - display: Done
          target: back
    ''')
    config['enums'] = enums_config()['enums']
    config['folders'] = folders_config()['folders']
    config['table_modules'] = tables_config()['table_modules']
    return config

def test_parse_pages():
    result = Config(**pages_config())
    assert len(result.page_modules) == 1

    m = result.page_modules[0]
    assert m.name == 'experiments'
    assert m.display == 'Experiments'
    assert m.descr == 'Pages related to experiments.'
    assert len(m.pages) == 3

    p = m.pages[0]
    assert p.name == 'view_experiment'
    assert p.display == 'View Experiment'
    assert p.descr == 'View details of a single experiment'

def test_parse_record_page():
    result = Config(**pages_config())
    m = result.page_modules[0]
    p = m.pages[0]
    assert p.type == 'RecordPage'
    assert len(p.next_pages) == 1

    c = p.config
    assert c.source_table == 'experiment'

    assert len(c.view_fields) == 1
    assert c.view_fields[0].field == 'name'

    assert len(c.reference_tables) == 1
    assert c.reference_tables[0].table_page == 'find_experiment'

    assert len(c.buttons) == 1
    assert c.buttons[0].target == 'edit_experiment'

    c1 = m.pages[1].config
    assert len(c1.edit_fields) == 1
    assert c1.edit_fields[0].field == 'name'

def test_catch_bad_page_type():
    config = pages_config()
    config['page_modules'][0]['pages'][0]['type'] = 'no_type'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected page type')

def test_catch_record_page_bad_source_table():
    config = pages_config()
    config['page_modules'][0]['pages'][0]['config']['source_table'] = 'no_table'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected source table')

def test_catch_reference_table_bad_table_page():
    config = pages_config()
    config['page_modules'][0]['pages'][0]['config']['reference_tables'][0]['table_page'] = 'no_table'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected page')

    config['page_modules'][0]['pages'][0]['config']['reference_tables'][0]['table_page'] = 'edit_experiment'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('The table_page')

def test_view_field_bad_field():
    config = pages_config()
    config['page_modules'][0]['pages'][0]['config']['view_fields'][0] = 'no_field'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected field')

def test_edit_field_bad_field():
    config = pages_config()
    config['page_modules'][0]['pages'][1]['config']['edit_fields'][0] = 'no_field'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected field')

def test_record_page_action_bad_target():
    config = pages_config()
    config['page_modules'][0]['pages'][1]['config']['buttons'][0]['target'] = 'no_page'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected page')

def test_parse_list_page():
    result = Config(**pages_config())
    m = result.page_modules[0]
    p = m.pages[2]
    assert p.type == 'ListPage'
    c = p.config

    assert len(c.view_columns) == 1
    assert c.view_columns[0].field == 'name'
    assert c.view_columns[0].width == 250

    assert len(c.edit_columns) == 1
    assert c.edit_columns[0].field == 'name'
    assert c.edit_columns[0].width == 250

    assert len(c.search_fields) == 1
    assert c.search_fields[0] == 'name'

    assert len(c.buttons) == 1
    assert c.buttons[0].target == 'back'

def test_view_column_bad_field():
    config = pages_config()
    config['page_modules'][0]['pages'][2]['config']['view_columns'][0]['field'] = 'no_field'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected field')

def test_edit_column_bad_field():
    config = pages_config()
    config['page_modules'][0]['pages'][2]['config']['edit_columns'][0]['field'] = 'no_field'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected field')

def test_search_field_bad_field():
    config = pages_config()
    config['page_modules'][0]['pages'][2]['config']['search_fields'][0] = 'no_field'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected field')

def test_list_page_action_bad_target():
    config = pages_config()
    config['page_modules'][0]['pages'][2]['config']['buttons'][0]['target'] = 'no_page'
    clear_errors()
    assert len(get_errors()) == 0
    Config(**config)
    print(get_errors())
    assert len(get_errors()) == 1
    assert get_errors()[0].startswith('Unexpected page')

