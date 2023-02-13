import React, { Component } from 'react';
import { SearchBar, Table, ButtonList } from './Components.js'

export default class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            searchParams: [],
        }
    }

    componentDidMount() {
        this.updateTable();
    }

    updateSearchParams = (params) => {
        this.setState({searchParams: params})
    }

    getSearchDict(param) {
        const key = (param.filter === '') ? param.field : `${param.field}__${param.filter}`;
        const value = param.value.id ? param.value.id : param.value;
        return {[key]: value}
    }

    updateTable = () => {
        const params = Object.assign({}, this.props.params,
            Object.assign({}, ...this.state.searchParams.map((s) => (this.getSearchDict(s)))))
        this.props.context.getRecords(
            this.props.config.sourceTable,
            params).then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    render() {
        if (!this.state.data) { return <div />}
        if (this.props.mode === 'reference') {
            return <Table
                config={this.props.config}
                params={this.props.params}
                data={this.state.data}
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
                    data = {this.state.searchParams}
                    context = {{...this.props.context, 
                        fullUpdate: this.updateSearchParams, 
                        updateTable: this.updateTable,
                    }}
                />
                <Table
                    config={this.props.config}
                    params={this.props.params}
                    data={this.state.data}
                    context={this.props.context}
                />
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
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