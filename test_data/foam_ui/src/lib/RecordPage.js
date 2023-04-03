import React, { Component } from 'react';
import { ButtonList, ViewField, EditField, FieldList } from './Components.js'
import TablePage from './TablePage.js';

export default class RecordPage extends Component {
    render() {
        if (!this.props.data) { return <div />}
        const data = this.props.data;
        const config = this.props.config;
        const params = this.props.params;
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
                    context={context}
                />
                {config.referenceTables.map((t, i) => (
                    <div className='reference-table-div' key={i}>
                        {t.display}
                        <TablePage
                            config={context.pages[t.tablePage].config}
                            context={context}
                            params={t.paramsFn ? t.paramsFn(params, data) : {}}
                            data={[{name: 'foo'}, {name: 'bar'}]}
                            mode='reference'
                        />
                    </div>
                ))}
                <ButtonList
                    config={{
                        buttons: config.buttons,
                    }}
                    params={params}
                    data={data}
                    context={context}
                />
            </div>
            </div>
        )
    }
}
