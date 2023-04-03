import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export default class TablePage extends Component {

    render() {
        if (!this.props.data) { return <div />}
        const data = this.props.data;
        const config = this.props.config;
        const params = this.props.params;
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
                    context = {context}
                />
                <Table
                    config={config}
                    params={params}
                    data={data}
                    context={context}
                />
                <ButtonList
                    config={{
                        buttons: config.buttons,
                    }}
                    params = {params}
                    data = {data}
                    context = {context}
                    hide={params.mode === 'select'}
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
                    hide={params.mode !== 'select'}
                />
            </div>
            </div>
    )
    }
}