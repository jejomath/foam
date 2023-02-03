import React, { Component } from 'react';
import { ButtonList, ViewField, EditField, FieldList } from './Components.js'
import TablePage from './TablePage.js';

export default class RecordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    cleanParam(field, value) {
        return {id: value, name: value}
    }

    componentDidMount() {
        var createRecord = null;
        if (this.props.config.newEntry !== 'Always' && Object.keys(this.props.params).length > 0) {
            createRecord = this.props.context.getRecord(
                this.props.config.sourceTable,
                this.props.params);
        } else { createRecord = Promise.resolve(null) }

        createRecord.then((record) => {
            var newRecord = null
            if (!record) {
                const fields = this.props.context.schema[this.props.config.sourceTable].fields;
                newRecord = Object.assign({}, ...Object.keys(fields).map((f) => (
                    {[f]: this.props.params[f] ? this.props.params[f] : null}
                ))) 
            } else { 
                newRecord = record; 
            }
            this.setState({
                data: newRecord,
            })
        })
    }

    update = (field, value) => {
        var data = this.state.data;
        data[field] = value;
        this.setState({
          data: data,
        })
    }

    save = () => {
        return this.props.context.saveRecord(this.props.config.sourceTable, this.state.data).then((record) =>{
            this.setState({
                data: record,
            })
            return record;
        });
    }

    render() {
        if (!this.state.data) { return <div />}
        return (
            <div className='record-page-outer-div'>
            <div className='record-page-inner-div'>
                <FieldList
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.viewFields,
                        fieldType: ViewField,
                    }}
                    params={this.props.params}
                    data={this.state.data}
                    context={this.props.context}
                />
                <FieldList
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.editFields,
                        fieldType: EditField,
                    }}
                    params={this.props.params}
                    data={this.state.data}
                    context={{...this.props.context, update: this.update}}
                />
                {this.props.config.referenceTables.map((t, i) => (
                    <div className='reference-table-div' key={i}>
                        {t.display}
                        <TablePage
                            config={this.props.context.pages[t.tablePage].config}
                            context={this.props.context}
                            params={t.paramsFn ? t.paramsFn(this.props.params, this.state.data) : {}}
                            mode='reference'
                        />
                    </div>
                ))}
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params={this.props.params}
                    data={this.state.data}
                    context={{...this.props.context, save: this.save }}
                />
            </div>
            </div>
        )
    }
}
