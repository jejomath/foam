import React, { Component } from 'react';
import { ButtonList, ViewField, EditField, FieldList } from './Components.js'
import TablePage from './TablePage.js';

export default class RecordPage extends Component {
    render() {
        if (!this.props.data) { return <div />}
        return (
            <div className='record-page-outer-div'>
            <div className='record-page-inner-div'>
                <FieldList
                    config={{
                        table: this.props.config.source,
                        fields: this.props.config.viewFields,
                        fieldType: ViewField,
                    }}
                    params={this.props.params}
                    data={this.props.data}
                    context={this.props.context}
                />
                <FieldList
                    config={{
                        table: this.props.config.source,
                        fields: this.props.config.editFields,
                        fieldType: EditField,
                    }}
                    params={this.props.params}
                    data={this.props.data}
                    context={this.props.context}
                />
                {this.props.config.referenceTables.map((t, i) => (
                    <div className='reference-table-div' key={i}>
                        {t.display}
                        <TablePage
                            config={this.props.context.pages[t.tablePage].config}
                            context={this.props.context}
                            params={t.paramsFn ? t.paramsFn(this.props.params, this.props.data) : {}}
                            mode='reference'
                        />
                    </div>
                ))}
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params={this.props.params}
                    data={this.props.data}
                    context={{...this.props.context, save: this.save }}
                />
            </div>
            </div>
        )
    }
}
