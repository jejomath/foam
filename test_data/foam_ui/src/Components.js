import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function followAction(config, params, data, context) {
    // Need to handle named functions like 'Save' //
    var actionParams = {}
    if (config.paramsFn) { actionParams = config.paramsFn(data, params, context); }
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
    render() {
        return this.props.config.fields.map((field, index) => (
            <div key={index}>
                {field.field}:
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