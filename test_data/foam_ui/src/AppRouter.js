import React, { Component } from 'react';

import { getRecord, getRecords, saveRecord } from './comms.js';

import { BrowserRouter, Routes, Route, useNavigate, createSearchParams, useSearchParams } from "react-router-dom";



class PageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: null
        }
        }
  
    go = (target, params, mode) => {
        if (target === 'back') { this.props.navigate(-1) }
        else {
            this.props.navigate({
            pathname: `/${target}`,
            search: createSearchParams(params).toString()
            });
        }
    }
  
    componentDidMount() {
        var params = {};
        for (let [k, v] of this.props.params[0]) { params[k] = v; }
        
        this.setState({
            props: {
            config: this.props.page.config,
            params: params,
            context: {...this.props.context, go: this.go}
            }
        });
    }
    
    render() {
        if (!this.state.props) {return <div /> }
        return (
            <div className="App">
            {React.createElement(this.props.page.type, this.state.props)}
            </div>
        )
    }        
}
    
export default class AppRouter extends Component {

    getWrapper(context, page) {
        return () => {
        return <PageWrapper page={page} context={context} navigate={useNavigate()} params={useSearchParams()} />
        }
    }

    render() {
        const pages = this.props.pages;
        const context = {
            getRecord: getRecord,
            getRecords: getRecords,
            saveRecord: saveRecord,
            schema: this.props.schema,
            enums: this.props.enums,
            pages: pages,
        }
        
        return (
        <BrowserRouter>
            <Routes>
            {Object.keys(pages).map((name) => 
                React.createElement(Route, {path: name, key: name, element: 
                React.createElement(this.getWrapper(context, pages[name]))}))}
            </Routes>
        </BrowserRouter>
        );
    }
}
