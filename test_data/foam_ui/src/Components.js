import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import DataGrid from 'react-data-grid';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-data-grid/lib/styles.css';

function followAction(config, params, data, context) {
    var actionParams = {}
    if (config.paramsFn) {
        actionParams = config.paramsFn(data, params, context); 
    } else if (config.params) {
        actionParams = config.params;
    }

    if (config.pretargetFn) { config.pretargetFn(data, params, context); }
    context.go(config.target, actionParams, config.mode);
}

export class Button extends Component {
    click = () => {
        followAction(this.props.config, this.props.params, this.props.data, this.props.context)
    }

    render() {
        return (<div className='button-div'>
            <button onClick={this.click}>{this.props.config.display}</button>
        </div>)
    }
}

export class Link extends Component {
    click = () => {
        followAction(this.props.config, this.props.params, this.props.data, this.props.context)
    }

    render() {
        return (<div className='link-div' onClick={this.click}>
            {this.props.config.display}
        </div>)
    }
}

export class ButtonList extends Component {
    render() {
        if (this.props.hide) { return <div />}
        return (
            <div className='button-list-div'>
                {this.props.config.buttons.map((config, index) => (
                    <Button 
                        config={config}
                        params = {this.props.params}
                        data = {this.props.data}
                        context = {this.props.context}
                        key={index}
                    />))}
            </div>
        )
    }
}


export class ViewField extends Component {

    render() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field.field];
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
            const e = this.props.context.enums[field.enumClass].options;
            const d = Object.assign({}, ...e.map((o) => ({[o.name]: o.display})))[this.props.data]
            return (d)

        } else if (fieldType === 'ref') {
            return (this.props.data ? this.props.data.name : '')

        } else if (fieldType === 'doc') {
            return <div>Not Implemented</div>
        }
    }
}


export class EditField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: null,
            oDict: null,
        }
    }

    componentDidMount() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field.field];
        const fieldType = field.fieldType;
        if (fieldType === 'ref') {
            this.props.context.getRecords(field.refTable).then((result) => {
                this.setState({
                    options: result,
                    oDict: Object.assign({}, ...result.map((o) => ({[o.id]: o})))
                })
            });
        }
    }

    handlChange = (event) => {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field.field];
        const fieldType = field.fieldType;
        if (fieldType === 'ref') {
            if (event.target.value === '') {
                this.props.context.update(this.props.config.field.field, null);
            } else {
                this.props.context.update(this.props.config.field.field, this.state.oDict[parseInt(event.target.value)])
            }
        } else {
            this.props.context.update(this.props.config.field.field, event.target.value)
        }
    }

    handleDateChange = (date) => {
        date.setHours(0, 0, 0, 0);
        const strDate = date.toISOString().substring(0, 10);
        this.props.context.update(this.props.config.field.field, strDate)
    }

    render() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field.field];
        const fieldType = field.fieldType;
        if (fieldType === 'STRING' || (fieldType === 'TEXT' && this.props.config.small)) {
            return (<input type='text' value={this.props.data || ''} onChange={this.handlChange}/>)

        } else if (fieldType === 'TEXT') {
            return (<textarea type='text' value={this.props.data || ''} onChange={this.handlChange}/>)

        } else if (fieldType === 'DATE') {
            return <DatePicker 
                selected={Date.parse(`${this.props.data}T23:59:59`)}
                onChange={this.handleDateChange}
                dateFormat="yyyy-MM-dd"
            />

        } else if (fieldType === 'INTEGER') {
            return <div>Not Implemented</div>

        } else if (fieldType === 'enum') {
            const options = this.props.context.enums[field.enumClass].options;
            return (<select value={this.props.data || ''} onChange={this.handlChange}>
                <option value=''></option>
                {options.map((o, i) => (<option value={o.name} key={i}>{o.display}</option>))}
            </select>)

        } else if (fieldType === 'ref' && this.props.config.field.lookup !== '') {
            return <div>
                {this.props.data ? this.props.data.name : ''}
                <Button 
                    config={{
                        display: 'Select',
                        target: this.props.config.field.lookup, 
                        mode: 'modal',
                        params: {
                            mode: 'select',
                            rowAction: {
                                target: 'back', 
                                pretargetFn: (data) => {
                                    this.props.context.update(
                                        this.props.config.field.field,
                                        data ? {id: data.id, name: data.name} : null
                                    )
                                }
                            }
                        }
                    }}
                    params={null}
                    data={null}
                    context={this.props.context}
                />
            </div>

        } else if (fieldType === 'ref') {
            if (!this.state.options) { return <div />}
            return (<select value={this.props.data ? this.props.data.id : ''} onChange={this.handlChange}>
                <option value=''></option>
                {this.state.options.map((o, i) => (<option value={o.id} key={i}>{o.name}</option>))}
            </select>)

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
            <div className='field-list-field-div' key={index}>
                <div className='field-list-name-div'>{this.getDisplay(field)}:</div>
                <div className='field-list-value-div'>
                    {React.createElement(
                        this.props.config.fieldType, {
                            config: {table: this.props.config.table, field: field},
                            params:this.props.params,
                            data: this.props.data[field.field],
                            context: this.props.context,
                        })
                    }
                </div>
            </div>
        ))
    }
}

export class Table extends Component {
    rowClick = (rowData) => {
        const rowAction = this.props.params.rowAction || this.props.config.rowAction;
        followAction(rowAction, this.props.params, rowData, this.props.context)
    }

    cleanRows() {
        return this.props.data.map((row) => (
            Object.assign(
                {}, ...Object.keys(row).map((k) => (
                    {[k]: (row[k] && row[k].id) ? row[k].name : row[k]}
                ))
            )
        ))
    }

    render() {
        return <DataGrid 
            columns={this.props.config.viewColumns.map((col) => ({
                name: col.field, 
                key: col.field,
                width: col.width,
                resizable: true,
            }))}
            rows={this.cleanRows()}
            onRowClick={this.rowClick}
        />
    }
}

const fieldFilters = {
    STRING: [
        {display: 'contains', value: 'contains'},
        {display: '=', value: ''},
    ],
    TEXT: [
        {display: 'contains', value: 'contains'},
        {display: '=', value: ''},
    ],
    DATE: [
        {display: '=', value: ''},
        {display: 'before', value: 'lte'},
        {display: 'after', value: 'gte'},
    ],
    INTEGER: [
        {display: '=', value: ''},
        {display: '<', value: 'lt'},
        {display: '>', value: 'gt'},
        {display: '=<', value: 'lte'},
        {display: '>=', value: 'gte'},
    ],
}

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
        }
    }

    componentDidMount() {
        this.changeField(this.props.config.fields[0])
    }

    changeFieldEvent = (event) => {
        this.changeField(event.target.value);
    }

    changeField = (value) => {
        const field = this.props.context.schema[this.props.config.table].fields[value];
        const fieldType = field.fieldType;
        this.setState({
            filters: fieldFilters[fieldType]
        }, () => {
            console.log(this.state.filters[0].value)
            this.props.context.update(
                this.props.config.index, 
                value,
                this.state.filters[0].value,
                ''
            )
        })
    }

    changeFilter = (event) => {
        this.props.context.update(
            this.props.config.index,
            this.props.data.field,
            event.target.value,
            this.props.data.value
        )
    }

    changeValue = (field, value) => {
        this.props.context.update(
            this.props.config.index,
            this.props.data.field,
            this.props.data.filter,
            value
        )
    }

    render() {
        if (this.props.data.field === '') { return null }
        return (
            <div className='search-field-div'>
                <div className='search-field-select-div'>
                    <select value={this.props.data.field} onChange={this.changeFieldEvent}>
                        {this.props.config.fields.map((field, i) => (
                            <option value={field} key={i}>{field}</option>))}
                    </select>
                </div>
                <div className='search-field-filter-div'>
                    <select value={this.state.filter} onChange={this.changeFilter}>
                        {this.state.filters.map((filter, i) => (
                            <option value={filter.value} key={i}>{filter.display}</option>))}
                    </select>
                </div>
                <div className='search-field-edit-div'>
                    <EditField 
                        data={this.props.data.value}
                        config={{table: this.props.config.table, field: this.props.data, small: true}}
                        context={{...this.props.context, update: this.changeValue}}
                    />
                </div>
            </div>
        )
    }
}

export class SearchBar extends Component {
    componentDidMount() {
        if (this.props.data.length === 0) { this.addParam() }
    }

    update = (index, field, filter, value) => {
        var data = this.props.data;
        data[index] = {field: field, filter: filter, value: value};
        this.props.context.fullUpdate(data);
    }

    addParam = () => {
        var data = this.props.data;
        data.push({field: '', filter: '', value: ''})
        this.props.context.fullUpdate(data);
    }

    render() {
        return <div className='search-bar-div'>
            <div className='search-bar-fields-div'>
                {this.props.data.map((data, index) => (<SearchField 
                    config={{...this.props.config, index: index}}
                    context={{...this.props.context, update: this.update}}
                    data={data}
                    key={index}/>))}
                <div className='search-bar-add-term-div' onClick={this.addParam}>Add Term</div>
            </div>
            <div className='search-bar-button-div'>
                <button onClick={this.props.context.updateTable}>Search</button>
            </div>
        </div>
    }
}