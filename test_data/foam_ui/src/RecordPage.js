import React, { Component } from 'react';
import { Button, ButtonList, ViewField, EditField, FieldList } from './Components.js'

export class RecordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        var createRecord = null;
        if (this.props.config.newEntry !== 'Always' && this.props.params) {
            createRecord = this.props.context.getRecord(
                this.props.config.sourceTable,
                this.props.params);
        } else { createRecord = Promise.resolve(null) }

        createRecord.then((record) => {
            var newRecord = null
            if (!record) {
                const fields = this.props.context.schema[this.props.config.sourceTable].fields;
                newRecord = Object.assign({}, ...Object.keys(fields).map((f) => ({[f]: null}))) }
            else { newRecord = record; }
            this.setState({
                data: newRecord,
            })})
    }

    update = (field, value) => {
        var data = this.state.data;
        data[field] = value;
        this.setState({
          data: data,
        })
    }

    save = () => {
        this.props.context.saveRecord(this.props.config.sourceTable, this.state.data).then((record) =>{
            console.log(record);
            this.setState({
                data: record,
            })
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
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {this.props.context}
                />
                <FieldList
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.editFields,
                        fieldType: EditField,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {{...this.props.context, update: this.update}}
                />
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {{...this.props.context, save: this.save }}
                />
            </div>
            </div>
        )
    }
}
