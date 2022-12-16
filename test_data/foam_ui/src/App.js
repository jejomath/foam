import React, { Component } from 'react';
import './App.css';
import './foam.css';
import { Button, ButtonList, ViewField, EditField, FieldList, Table, SearchBar } from './Components.js'
import {schema, enums, pages} from './config.js'
import { RecordPage } from './RecordPage.js';
import { TablePage } from './TablePage.js';

const components = {
  button: {
    type: Button,
    config: {
      display: 'This is a test.',
      target: 'myTarget',
      pretargetFn: (data, params) => {console.log(data); console.log(params);},
      paramsFn: (data, params) => ({foo: params.foo, bar: data.bar}),
    },
    params: {foo: 'bartholmew'},
    data: {bar: 'fooflewfoo'}
  },
  buttonList: {
    type: ButtonList,
    config: {
      buttons: [
        {
          display: 'Button1',
          target: 'Target1',
        },
        {
          display: 'Button2',
          target: 'Target2',
        },
        {
          display: 'Button3',
          target: 'Target3',
        },
      ]
    }
  },
  stringEditField: {
    type: EditField,
    config: {
      table: 'assay',
      field: 'name',
    }
  },
  stringViewField: {
    type: ViewField,
    config: {
      table: 'assay',
      field: 'name',
    },
    initData: 'foo',
  },
  textEditField: {
    type: EditField,
    config: {
      table: 'experiment',
      field: 'description',
    }
  },
  dateEditField: {
    type: EditField,
    config: {
      table: 'experiment',
      field: 'start_date',
    }
  },
  enumEditField: {
    type: EditField,
    config: {
      table: 'assay',
      field: 'type',
    }
  },
  editFieldList: {
    type: FieldList,
    config: {
      table: 'experiment',
      fields: ['name', 'description', 'type', 'start_date'],
      fieldType: EditField,
    },
    initData: {name: '', description: '', type: '', star_date: ''},
  },
  viewFieldList: {
    type: FieldList,
    config: {
      table: 'experiment',
      fields: ['name', 'description', 'type', 'start_date'],
      fieldType: ViewField,
    },
    initData: {name: 'This', description: 'is a test', type: 'VITRO', star_date: '2022-01-05'},
  },
  table: {
    type: Table,
    config: {
      table: 'experiment',
      columns: [
        {field: 'name', width: 100},
        {field: 'description', width: 200},
        {field: 'type', width: 50},
        {field: 'start_date', width: 150}
      ],
      rowAction: {
        display: 'This is a test.',
        target: 'myTarget',
        pretargetFn: (data, params) => {console.log(data); console.log(params);},
        paramsFn: (data, params) => ({id: data.id}),
      }
    },
    initData: [
      {id: 1, name: 'This', description: 'is a test', type: 'VITRO', start_date: '2022-01-05'},
      {id: 2, name: 'This2', description: 'is a test', type: 'VITRO', start_date: '2022-01-05'},
    ],
},
  recordPage: {
    type: RecordPage,
    config: pages.edit_experiment.config,
    params: {id: 1},
    initData: {experiment: {1: {name: 'This', description: 'is a test', type: 'VITRO', start_date: ''}}},
  },
  tablePage: {
    type: TablePage,
    config: pages.find_experiment.config,
    params: {id: 1},
    initData: {experiment: [
      {id: 1, name: 'This', description: 'is a test', type: 'VITRO', start_date: '2022-01-05'},
      {id: 2, name: 'This 2', description: 'is a test', type: 'VITRO', start_date: '2022-01-05'},
    ]},
  },
  searchBar: {
    type: SearchBar,
    config: {
      table: 'experiment',
      fields: ['name', 'description', 'type', 'start_date'],
    },
    initData: [{field: 'name', value: ''}, {field: 'name', value: ''}],
  },
}


class TestHarness extends Component {
  constructor(props) {
    super(props);
    const c = components.tablePage;
    this.state = {
      component: c,
      lastTarget: null,
      lastParams: null,
      lastUpdate: c.initData ? c.initData : '',
    };
  }

  go = (target, params) => {
    this.setState({
      lastTarget: target,
      lastParams: params,
    })
  }

  update = (field, value) => {
    var data = this.state.lastUpdate;
    data[field] = value;
    this.setState({
      lastUpdate: data,
    })
  }

  fullUpdate = (data) => {
    this.setState({
      lastUpdate: data,
    })
  }

  render() {
    const c = this.state.component;
    const context = {
      go: this.go,
      update: this.update,
      fullUpdate: this.fullUpdate,
      getRecord: ((table, params) => {return c.initData[table][params.id]}),
      getRecords: ((table) => {return c.initData[table]}),
      schema: schema,
      enums: enums,
      pages: pages,
    }

    var props = {
      config: c.config,
      params: c.params,
      data: (c.data ? c.data : this.state.lastUpdate),
      context: context
    };

      return (
      <div>
        <div className="App">
          {React.createElement(c.type, props)}
        </div>
        <div>Target: {this.state.lastTarget}</div>
        <div>Params: {JSON.stringify(this.state.lastParams)}</div>
        <div>Value: {JSON.stringify(this.state.lastUpdate)}</div>
      </div>
    );
  }
}

function App() {
  return <TestHarness />;
}

export default App;
