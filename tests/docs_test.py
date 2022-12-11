from html.parser import HTMLParser
from dataclasses import dataclass, field

from foam.schema import get_schema_docs
from foam.pages import get_pages_docs
from config_test import tables_config

@dataclass
class DOMNode:
    tag: str
    parent: str = None
    attrs: dict = field(default_factory=dict)
    children: list = field(default_factory=list)
    data: list[str] = field(default_factory=list)


class IntegrityCheck(HTMLParser):
    """ This class checks that all HTML tags on a certain list are closed, 
        and makes a data structure of their contents.
    """
    CLOSE_TAGS = ['style', 'div', 'table', 'tr', 'td', 'a']

    def __init__(self):
        super(IntegrityCheck, self).__init__()
        self.dom = DOMNode(tag='base')
        self.cursor = self.dom

    def handle_starttag(self, tag, attrs):
        if tag in self.CLOSE_TAGS:
            new_node = DOMNode(tag=tag, attrs=attrs, parent=self.cursor)
            self.cursor.children.append(new_node)
            self.cursor = new_node
        else:
            self.cursor.data.append(tag)

    def handle_endtag(self, tag):
        if tag in self.CLOSE_TAGS:
            assert self.cursor.tag == tag
            self.cursor = self.cursor.parent

    def handle_data(self, data):
        self.cursor.data.append(data)


def test_schema_docs():
    html = get_schema_docs(tables_config())
    check = IntegrityCheck()
    check.feed(html)
    print(check.dom)
    assert check.cursor.tag == 'base'

def test_pages_docs():
    html = get_pages_docs(tables_config())
    check = IntegrityCheck()
    check.feed(html)
    print(check.dom)
    assert check.cursor.tag == 'base'
