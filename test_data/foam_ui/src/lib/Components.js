import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import DataGrid from 'react-data-grid';
import {createPortal} from 'react-dom';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-data-grid/lib/styles.css';

function followAction(config, params, data, context) {
    const promise = config.pretargetFn ? config.pretargetFn(params, data, context) : Promise.resolve(data)

    promise.then((newData) => { 
        var actionParams = {}
        if (config.paramsFn) {
            actionParams = config.paramsFn(params, newData, context);
        } else if (config.params) {
            actionParams = config.params;
        }
        context.go(config.target, actionParams, config.mode);
    })
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
                    (!config.visibleFn || config.visibleFn(this.props.params, this.props.data)) ?
                    <Button 
                        config={config}
                        params={this.props.params}
                        data={this.props.data}
                        context={this.props.context}
                        key={index}
                    /> : <div key={index} />))}
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
                this.props.context.update(null);
            } else {
                this.props.context.update(this.state.oDict[parseInt(event.target.value)])
            }
        } else {
            this.props.context.update(event.target.value)
        }
    }

    handleDateChange = (date) => {
        if (!date) {
            this.props.context.update(null)
        } else {
            date.setHours(0, 0, 0, 0);
            const strDate = date.toISOString().substring(0, 10);
            this.props.context.update(strDate)
        }
    }

    focus = (input) => {
        if (this.props.focus) { input?.focus(); }
    }
    
    dateFocus = (input) => {
        if (this.props.focus) { document.getElementById('date-picker').focus(); }
    }
    
    render() {
        const field = this.props.context.schema[this.props.config.table].fields[this.props.config.field.field];
        const fieldType = field.fieldType;
        if (fieldType === 'STRING' || (fieldType === 'TEXT' && this.props.config.small)) {
            return (<input type='text' value={this.props.data || ''} onChange={this.handlChange} ref={this.focus}/>)

        } else if (fieldType === 'TEXT') {
            return (<textarea type='text' value={this.props.data || ''} onChange={this.handlChange}/>)

        } else if (fieldType === 'DATE') {
            return <DatePicker 
                selected={Date.parse(`${this.props.data}T23:59:59`)}
                onChange={this.handleDateChange}
                dateFormat="yyyy-MM-dd"
                popperContainer={({children}) => createPortal(children,document.body)}
                id="date-picker"
                ref={this.dateFocus}
            />

        } else if (fieldType === 'INTEGER') {
            return (<input type='text' value={this.props.data || ''} onChange={this.handlChange} ref={this.focus}/>)

        } else if (fieldType === 'enum') {
            const options = this.props.context.enums[field.enumClass].options;
            return (<select value={this.props.data || ''} onChange={this.handlChange} ref={this.focus}>
                <option value=''></option>
                {options.map((o, i) => (<option value={o.name} key={i}>{o.display}</option>))}
            </select>)

        } else if (fieldType === 'ref' && this.props.config.field.lookup) {
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
                                pretargetFn: (params, data) => {
                                    this.props.context.update(
                                        data ? {id: data.id, name: data.name} : null
                                    )
                                    return Promise.resolve()
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
            return (<select value={this.props.data ? this.props.data.id : ''} onChange={this.handlChange}  ref={this.focus}>
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
            (!field.visibleFn || field.visibleFn(this.props.params, this.props.data)) ?
            <div className='field-list-field-div' key={index}>
                <div className='field-list-name-div'>{this.getDisplay(field)}:</div>
                <div className='field-list-value-div'>
                    {React.createElement(
                        this.props.config.fieldType, {
                            config: {table: this.props.config.table, field: field},
                            params: this.props.params,
                            data: this.props.data[field.field],
                            context: {
                                ...this.props.context, 
                                update: (value) => this.props.context.update(field.field, value) 
                            },
                        })
                    }
                </div>
            </div> : <div key={index} />
        ))
    }
}

export class Table extends Component {
    rowClick = (rowData) => {
        const rowAction = this.props.params.rowAction || this.props.config.rowAction;
        if (rowAction) {
            followAction(rowAction, this.props.params, rowData, this.props.context);
        }
    }

    format = (value, field) => {
        if (field.name === 'id') {
            return value
        } else if (value && typeof value === 'object') {
            return value.name
        } else if (value && field.fieldType === 'enum') {
            return this.props.context.enums[field.enumClass].options.filter(
                (e) => (e.name === value))[0].display
        } else {
            return value
        }
    }

    render() {
        const dynamicHeight = Math.min(this.props.data.length, 25) * 35 + 37
        const s = this.props.context.schema[this.props.config.source]
        return <div className="data-grid-div"><DataGrid 
            columns={[
                ...this.props.config.viewColumns.map((col) => ({
                    name: col.field, 
                    key: col.field,
                    width: parseInt(col.width),
                    resizable: true,
                    formatter: (data) => this.format(data.row[col.field], s.fields[col.field]),
                })),
                ...this.props.config.editColumns.map((col) => ({
                    name: col.field,
                    key: col.field,
                    width: parseInt(col.width),
                    resizable: true,
                    formatter: (data) => this.format(data.row[col.field], s.fields[col.field]),
                    editor: (context) => (<EditField
                                config={{table: this.props.config.source, field: col}}
                                params={this.props.params}
                                data={context.row[col.field]}
                                focus={true}
                                context={{...this.props.context, update: (value) => {context.onRowChange(
                                    {...context.row, [col.field]: value})} }}
                            />),
                }))
            ]}
            onRowClick={this.rowClick}
            onRowsChange={(data) => { this.props.context.update(data); }}
            rows={this.props.data}
            style={{height: dynamicHeight}}
            rowReorderColumn={true}
            renderers={ (key, rows) => (rows) }
        /></div>
    }
}

export class Grid extends Component {

    formatter = (field) => {
        if (field.name === 'id') {
            return (value) => (value)
        } else if (field.fieldType === 'enum') {
            return (value) => {
                if (value) { 
                    return this.props.context.enums[field.enumClass].options.filter(
                        (e) => (e.name === value))[0].display
                } else { return value }
            }
        } else {
            return (value) => {
                if (value && typeof value === 'object') {
                    return value.name
                } else {
                    return (value) => (value)
                }
            }
        }
    }

    updateRows = (data) => {
        data.forEach((row) => {
            Object.entries(row).forEach((k) =>  {
                const key = parseInt(k);
                if (!isNaN(key)) { 
                    const i = row.source[key];
                    this.props.data[i][this.props.config.displayField] = row[key];
                }
            })
        })
        this.props.context.update(this.props.data);
    }

    render() {
        const rowCount = Math.max(...this.props.data.map((r) => r[this.props.config.rowField])) + 1
        const columnCount = Math.max(...this.props.data.map((r) => r[this.props.config.columnField])) + 1
        const displayField = this.props.config.displayField;
        const dynamicHeight = rowCount * 35 + 37

        const s = this.props.context.schema[this.props.config.source]
        const format = this.formatter(s.fields[displayField])

        var gridData = new Array(rowCount).fill(null).map(
            (r, i) => ({key: i, source: {}})
        )
        this.props.data.forEach((record, i) => { 
            gridData[record.row][record.column] = record[displayField]
            gridData[record.row].source[record.column] = i
        })

        return <div className="data-grid-div"><DataGrid 
            columns={[
                {name: '', key: 'key', width: 10},
                ...new Array(columnCount).fill(null).map(
                (r, i) => ({
                    name: i,
                    key: i,
                    width: 150,
                    formatter: (data) => format(data.row[i]),
                    editor: (context) => (<EditField
                        config={{table: this.props.config.source, field: {field: displayField}}}
                        params={this.props.params}
                        data={context.row[i]}
                        focus={true}
                        context={{...this.props.context, update: (value) => {context.onRowChange(
                            {...context.row, [i]: value})} }}
                    />),
        }))
            ]}
            rows={gridData}
            onRowsChange={this.updateRows}
            style={{height: dynamicHeight}}
            renderers={ (key, rows) => (rows) }
        /></div>
    }
}


class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
        }
    }

    changeField = (event) => {
        this.props.context.changeParamField(this.props.index, event.target.value);
    }

    changeFilter = (event) => {
        this.props.context.changeParamFilter(this.props.index, event.target.value);
    }

    changeValue = (value) => {
        this.props.context.changeParamValue(this.props.index, value);
    }

    render() {
        if (this.props.data.field === '') { return null }
        return (
            <div className='search-field-div'>
                <div className='search-field-select-div'>
                    <select value={this.props.data.field} onChange={this.changeField}>
                        {this.props.config.fields.map((field, i) => (
                            <option value={field} key={i}>{field}</option>))}
                    </select>
                </div>
                <div className='search-field-filter-div'>
                    <select value={this.state.filter} onChange={this.changeFilter}>
                        {this.props.data.filters.map((filter, i) => (
                            <option value={filter.value} key={i}>{filter.display}</option>))}
                    </select>
                </div>
                <div className='search-field-edit-div'>
                    <EditField
                        data={this.props.data.value}
                        config={{table: this.props.config.table, field: this.props.data, small: true}}
                        context={{...this.props.context, update: this.changeValue}}
                        key={this.props.data.field}
                    />
                </div>
            </div>
        )
    }
}

export class SearchBar extends Component {
    componentDidMount() {
        if (this.props.params.length === 0) { this.props.context.addParam() }
    }

    render() {
        if (this.props.hide) { return <div />}
        return <div className='search-bar-div'>
            <div className='search-bar-fields-div'>
                {this.props.params._internal.map((data, index) => (<SearchField 
                    config={{...this.props.config, index: index}}
                    context={this.props.context}
                    data={data}
                    index={index}
                    key={index}/>))}
                <div className='search-bar-add-term-div' onClick={this.props.context.addParam}>Add Term</div>
            </div>
            <div className='search-bar-button-div'>
                <button onClick={this.props.context.load}>Search</button>
            </div>
        </div>
    }
}

export class UnderConstruction extends Component {

    render() {
        return <div>
            This page is not yet implemented.
            <Button 
                    config={{
                        display: 'Back',
                        target: 'back',
                    }}
                    params={null}
                    data={null}
                    context={this.props.context}
                />
        </div>
    }
}


export class PageCell extends Component {
    constructor(props) {
        super(props);
        this.page = this.props.page;
    }

    localParams() {
        return this.page.config.dataKey ? this.props.params[this.page.config.dataKey] : this.props.params;
    }

    localData() {
        return this.page.config.dataKey ? this.props.data[this.page.config.dataKey] : this.props.data;
    }

    localContext() {
        const localClient = this.page.config.dataKey ? this.props.context.data[this.page.config.dataKey] : {}
        return { ...localClient, ...this.props.context }
    }

    getPage() {
        return React.createElement(this.page.type, {
            config: this.page.config,
            params: this.localParams(),
            data: this.localData(),
            context: this.localContext(),
        })
    }

    render() {
        return (
            <div>
                {this.getPage()}
                <ButtonList
                    config={{
                        buttons: this.page.buttons,
                    }}
                    params = {this.localParams()}
                    data = {this.localData()}
                    context = {this.localContext()}
                />
            </div>
        )
    }
}
