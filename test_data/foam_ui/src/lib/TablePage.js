import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export default class TablePage extends Component {

    render() {
        if (!this.props.data.table) { return <div />}
        const data = this.props.data.table;
        const config = this.props.config;
        const params = this.props.params.table;
        const context = this.props.context;
        if (this.props.mode === 'reference') {
            return <Table
                config={config}
                params={params}
                data={data}
                context={context}
            />
        }
        return (
            <div className='table-page-outer-div'>
            <div className='table-page-inner-div'>
                <SearchBar
                    config={{
                        table: config.source,
                        fields: config.searchFields
                    }}
                    params = {params}
                    context = {{...context, client: context.clients.table }}
                />
                <Table
                    config={config}
                    params={params}
                    data={data}
                    context={{...context, update: context.clients.table.update}}
                />
                <ButtonList
                    config={{
                        buttons: config.buttons,
                    }}
                    params = {params}
                    data = {data}
                    context = {{...context, save: context.clients.table.save }}
                    hide={params._mode === 'select'}
                />
                <ButtonList
                    config={{
                        buttons: [
                            {display: 'Cancel', target: 'back'},
                            {...params.rowAction, display: 'None'}
                        ]
                    }}
                    params = {params}
                    data = {null}
                    context = {context}
                    hide={params._mode !== 'select'}
                />
            </div>
            </div>
        )
    }
}