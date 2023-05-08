import React, { Component } from 'react';
import { ButtonList, ViewField, EditField, FieldList } from './Components.js'
import TablePage from './TablePage.js';

export default class RecordPage extends Component {
    render() {
        if (!this.props.data.record) { return <div />}
        const data = this.props.data.record;
        const config = this.props.config;
        const params = this.props.params.record;
        const context = this.props.context;
        return (
            <div className='record-page-outer-div'>
            <div className='record-page-inner-div'>
                <FieldList
                    config={{
                        table: config.source,
                        fields: config.viewFields,
                        fieldType: ViewField,
                    }}
                    params={params}
                    data={data}
                    context={context}
                />
                <FieldList
                    config={{
                        table: config.source,
                        fields: config.editFields,
                        fieldType: EditField,
                    }}
                    params={params}
                    data={data}
                    context={{ ...context, update: context.clients.record.update }}
                />
                {config.referenceTables.map((t, i) => (
                    <div className='reference-table-div' key={i}>
                        {t.display}
                        <TablePage
                            config={context.pages[t.tablePage].config}
                            context={context}
                            params={{table: {}}}
                            data={{table: this.props.data[t.tablePage]}}
                            mode='reference'
                        />
                    </div>
                ))}
                <ButtonList
                    config={{
                        buttons: config.buttons,
                    }}
                    params={params}
                    data={this.props.data}
                    context={{ ...context, save: context.clients.record.save }}
                />
            </div>
            </div>
        )
    }
}
