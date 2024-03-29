import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export default class TablePage extends Component {

    render() {
        const config = this.props.config;
        const params = this.props.params;
        const data = this.props.data;
        const context = this.props.context;

        if (this.props.mode === 'reference') {
            return <Table
                config={{ 
                    source: config.source,
                    viewColumns: config.viewColumns.concat(config.editColumns),
                    editColumns: [],
                    rowAction: config.rowAction
                }}
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
                    context = {context}
                    hide={!config.searchFields || config.searchFields.length === 0}
                />
                <Table
                    config={config}
                    params={params}
                    data={data}
                    context={context}
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
