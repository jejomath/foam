import React, { Component } from 'react';
import { ButtonList, ViewField, EditField, FieldList } from './Components.js'
import TablePage from './TablePage.js';

export default class RecordPage extends Component {
    render() {
        const config = this.props.config;
        const data = this.props.data[config.dataKey];
        const params = this.props.params[config.dataKey];
        const context = this.props.context;
        const client = context.clients[config.dataKey]

        if (!data) { return <div />}
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
                    context={{ ...context, update: client.update }}
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
                    context={{ ...context, save: client.save }}
                />
            </div>
            </div>
        )
    }
}
