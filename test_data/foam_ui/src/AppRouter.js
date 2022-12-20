import React, { Component } from 'react';

import { 
    getRecord,
    getRecords,
    saveRecord 
} from './comms.js';

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    createSearchParams,
    useSearchParams
} from "react-router-dom";


class PageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            modalStack: [],
        }
    }
  
    go = (target, params, mode) => {
        if (target === 'back') { 
            if (this.state.modalStack.length > 0) {
                this.state.modalStack.pop()
                this.setState({ modalStack: this.state.modalStack })
            } else {
                this.props.navigate(-1)
            }
        } else {
            if (mode === 'modal') {
                this.state.modalStack.push(this.getPage(target, params))
                this.setState({ modalStack: this.state.modalStack })
            } else {
                this.setState({ modalStack: [] })
                this.props.navigate({
                    pathname: `/${target}`,
                    search: createSearchParams(params).toString()
                });
            }
        }
    }

    getPage(pageName, params) {
        const page = this.props.context.pages[pageName]
        return React.createElement(page.type, {
            config: page.config,
            params: params,
            context: {...this.props.context, go: this.go}
        })
    }

    componentDidMount() {
        var params = {};
        for (let [k, v] of this.props.params[0]) { params[k] = v; }

        this.setState({page: this.getPage(this.props.page, params)})
    }

    render() {
        if (!this.state.page) {return <div /> }
        return (
            <div className="App">
                { this.state.page }
                { this.state.modalStack.map((page, i) => (
                    <div className="modal-outer" key={i}>
                        <div className="modal-inner">
                            { page }
                        </div>
                    </div>
                ))}
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
        const context = {
            getRecord: getRecord,
            getRecords: getRecords,
            saveRecord: saveRecord,
            schema: this.props.schema,
            enums: this.props.enums,
            pages: this.props.pages,
        }
        
        return (
        <BrowserRouter>
            <Routes>
            {Object.keys(this.props.pages).map((page) => 
                React.createElement(Route, {path: page, key: page, element: 
                React.createElement(this.getWrapper(context, page))}))}
            </Routes>
        </BrowserRouter>
        );
    }
}
