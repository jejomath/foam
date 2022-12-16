import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import DataGrid from 'react-data-grid';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-data-grid/lib/styles.css';

function followAction(config, params, data, context) {
    // Need to handle named functions like 'Save' ??? //
    var actionParams = {}
    if (config.paramsFn) {
        actionParams = config.paramsFn(data, params, context); }
    if (config.pretargetFn) { config.pretargetFn(data, params, null); }
    context.go(config.target, actionParams, config.mode);
}

export class Button extends Component {
    click = () => {
        followAction(this.props.config, this.props.params, this.props.data, this.props.context)
    }

    render() {
        return (<button onClick={this.click}>{this.props.config.display}</button>)
    }
}


export class ButtonList extends Component {
    render() {
        return this.props.config.buttons.map((config, index) => (
            <Button 
                config={config}
                params = {this.props.params}
                data = {this.props.data}
                context = {this.props.context}
                key={index}
            />))
    }
}


export class ViewField extends Component {

    render() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field];
        const fieldType = field.fieldType;
        if (fieldType === 'STRING') {
            return (this.props.data)

        } else if (fieldType === 'TEXT') {
            return (this.props.data)

        } else if (fieldType === 'DATE') {
            return (this.props.data)

        } else if (fieldType === 'INTEGER') {
            return (this.props.data)

        } else if (fieldType === 'enum') {
            return (this.props.data)

        } else if (fieldType === 'ref') {
            return <div>Not Implemented</div>

        } else if (fieldType === 'doc') {
            return <div>Not Implemented</div>
        }
    }
}


export class EditField extends Component {
    handlChange = (event) => {
        this.props.context.update(this.props.config.field, event.target.value)
    }

    handleDateChange = (date) => {
        this.props.context.update(this.props.config.field, date)
    }

    render() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field];
        const fieldType = field.fieldType;
        if (fieldType === 'STRING') {
            return (<input type='text' value={this.props.data} onChange={this.handlChange}/>)

        } else if (fieldType === 'TEXT') {
            return (<textarea type='text' value={this.props.data} onChange={this.handlChange}/>)

        } else if (fieldType === 'DATE') {
            return <DatePicker selected={this.props.data} onChange={this.handleDateChange} />

        } else if (fieldType === 'INTEGER') {
            return <div>Not Implemented</div>

        } else if (fieldType === 'enum') {
            const options = this.props.context.enums[field.enumClass].options;
            return (<select value={this.props.data} onChange={this.handlChange}>
                <option value=''></option>
                {options.map((o, i) => (<option value={o.name} key={i}>{o.display}</option>))}
            </select>)

        } else if (fieldType === 'ref') {
            return <div>Not Implemented</div>

        } else if (fieldType === 'doc') {
            return <div>Not Implemented</div>
        }
    }
}

export class FieldList extends Component {
    getDisplay(field) {
        if (field.display) { return field.display }
        return this.props.context.schema[this.props.config.table].fields[field.field].display
    }
    render() {
        return this.props.config.fields.map((field, index) => (
            <div key={index}>
                {this.getDisplay(field)}:
                {React.createElement(
                    this.props.config.fieldType, {
                        config: {table: this.props.config.table, field: field.field},
                        params:this.props.params,
                        data: this.props.data[field.field],
                        context: this.props.context,
                    })
                }
            </div>
        ))
    }
}

export class Table extends Component {
    rowClick = (rowData) => {
        followAction(this.props.config.rowAction, this.props.params, rowData, this.props.context)
    }

    render() {
        return <DataGrid 
            columns={this.props.config.viewColumns.map((col) => ({
                name: col.field, 
                key: col.field,
                width: col.width,
                resizable: true,
            }))}
            rows={this.props.data}
            onRowClick={this.rowClick}
        />
    }
}

class SearchField extends Component {
    changeField = (event) => {
        this.props.context.update(this.props.config.index, event.target.value, '')
    }

    changeValue = (field, value) => {
        this.props.context.update(this.props.config.index, this.props.data.field, value)
    }

    render() {
        return (<div>
            <select value={this.props.data.field} onChange={this.changeField}>
                {this.props.config.fields.map((field, i) => (<option value={field} key={i}>{field}</option>))}
            </select>
            <EditField 
                value={this.props.data.value}
                config={{table: this.props.config.table, field: this.props.data.field}}
                context={{...this.props.context, update: this.changeValue}}
            />
        </div>)
    }
}

export class SearchBar extends Component {
    componentDidMount() {
        if (this.props.data.length == 0) { this.addParam() }
    }

    update = (index, field, value) => {
        var data = this.props.data;
        data[index] = {field: field, value: value};
        this.props.context.fullUpdate(data);
    }

    addParam = () => {
        const newField = this.props.config.fields[0]
        var data = this.props.data;
        data.push({'field': newField, 'value': ''})
        this.props.context.fullUpdate(data);
    }

    render() {
        return <div>
            {this.props.data.map((data, index) => (<SearchField 
                config={{...this.props.config, index: index}}
                context={{...this.props.context, update: this.update}}
                data={data}
                key={index}/>))}
            <div onClick={this.addParam}>Add Term</div>
            <button onClick={this.props.context.updateTable}>Search</button>
        </div>
    }
}