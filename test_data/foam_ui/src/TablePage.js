import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchParams: [],
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.context.getRecords(
                this.props.config.sourceTable)
        })
    }

    updateSearchParams = (params) => {
        this.setState({searchParams: params})
    }

    updateTable = () => {
        console.log(this.state.searchParams);
    }

    render() {
        if (!this.state.data) { return <div />}
        return (
            <div className='table-page-outer-div'>
            <div className='table-page-inner-div'>
                <SearchBar
                    config={{table: this.props.config.sourceTable, fields: this.props.config.searchFields}}
                    params = {this.props.params}
                    data = {this.state.searchParams}
                    context = {{...this.props.context, 
                        fullUpdate: this.updateSearchParams, 
                        updateTable: this.updateTable,
                    }}
                />
                <Table
                    config={this.props.config}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {this.props.context}
                />
                <ButtonList
                config={{
                    buttons: this.props.config.buttons,
                }}
                params = {this.props.params}
                data = {this.state.data}
                context = {this.props.context}
            />
            </div>
            </div>
    )
    }
}