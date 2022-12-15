import argparse

from .config import load_config
from .schema import write_schema_docs, write_schema_code
from .pages import write_pages_docs, write_pages_code
from .utils import get_errors

def not_implemented(name):
    return lambda x: print(f'Command {name} is not implemented yet.')

commands = {
    'schema-docs': write_schema_docs,
    'schema-code': write_schema_code,
    'pages-docs': write_pages_docs,
    'pages-code': write_pages_code,
}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('command')
    args = parser.parse_args()

    if args.command not in commands.keys():
        print(f'Command {args.command} not found. Possible commands:')
        for c in commands.keys():
            print(f' -  {c}')
        return

    config = load_config()
    if get_errors():
        for e in get_errors():
            print(e)
    else:
        commands[args.command](config)

if __name__ == "__main__":
    main()
