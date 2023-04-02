import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export default class TablePage extends Component {

    render() {
        if (!this.props.data) { return <div />}
        if (this.props.mode === 'reference') {
            return <Table
                config={this.props.config}
                params={this.props.params}
                data={this.props.data}
                context={this.props.context}
            />
        }
        return (
            <div className='table-page-outer-div'>
            <div className='table-page-inner-div'>
                <SearchBar
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.searchFields
                    }}
                    params = {this.props.params}
                    data = {this.props.params}
                    context = {{...this.props.context, 
                        fullUpdate: this.updateSearchParams, 
                        updateTable: this.updateTable,
                    }}
                />
                <Table
                    config={this.props.config}
                    params={this.props.params}
                    data={this.props.data}
                    context={this.props.context}
                />
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params = {this.props.params}
                    data = {this.props.data}
                    context = {this.props.context}
                    hide={this.props.params.mode === 'select'}
                />
                <ButtonList
                    config={{
                        buttons: [
                            {display: 'Cancel', target: 'back'},
                            {...this.props.params.rowAction, display: 'None'}
                        ]
                    }}
                    params = {this.props.params}
                    data = {null}
                    context = {this.props.context}
                    hide={this.props.params.mode !== 'select'}
                />
            </div>
            </div>
    )
    }
}