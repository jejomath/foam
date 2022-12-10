from os import path
from pathlib import Path
from jinja2 import Environment, FileSystemLoader


def jinja_template(filename):
    script_path = Path(path.dirname(path.realpath(__file__)))
    environment = Environment(loader=FileSystemLoader(script_path / 'templates'))
    return environment.get_template(filename)


def add_display(obj):
    if not obj.display:
        obj.display = ' '.join(w.capitalize() for w in obj.name.split('_'))


config_errors = []

def config_error(message):
    config_errors.append(message)

def get_errors():
    return config_errors

def clear_errors():
    global config_errors
    config_errors = []
