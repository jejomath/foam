import React, { Component } from 'react';
import LoginPage from './LoginPage.js';

import { 
    getRecord,
    getRecords,
    logIn,
    logOut,
    loggedIn,
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


/* Connects the data to the page */
class Page extends Component {
    constructor(props) {
        super(props);
        const page = this.props.context.pages[this.props.name]
        this.clients = {
            base: page.data ? new page.data.type(
                'base',
                page.data.source,
                this.props.params,
                {
                    ...this.props.context,
                    setState: (data) => { this.setState({data: {base: data}}) },
                    getState: () => { return this.state.data.base; }
                }) : null
        }
        this.state = {
            data: {base: null},
            params: {base: this.props.params},
        }
    }

    componentDidMount() {
        if (this.clients.base) { this.clients.base.load(); }
    }

    updateSearchParams = (params) => {
        this.setState({searchParams: params})
    }

    render() {
        const page = this.props.context.pages[this.props.name]
        return React.createElement(page.type, {
            data: this.state.data.base,
            config: page.config,
            params: this.clients.base ? this.clients.base.internalParams() : {},
            context: {
                ...this.props.context,
                update: this.clients.base ? this.clients.base.update : null,
                save: this.clients.base ? this.clients.base.save : null,
            }
        })
    }
}

/* Controls the stack of modals above the current page. */
class PageStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            modalStack: [],
            loginStatus: loggedIn()
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

    componentDidMount() {
        var params = {};
        for (let [k, v] of this.props.params[0]) { params[k] = v; }

        this.setState({page: this.getPage(this.props.page, params)})
    }

    logIn = (username, password) => {
        return logIn(username, password).then(() => this.setState({loginStatus: loggedIn()}))
    }

    logOut = () => {
        logOut()
        this.setState({loginStatus: loggedIn()})
        return Promise.resolve()
    }

    getPage(pageName, params) {
        return <Page 
            name={pageName}
            params={params}
            context={{
                ...this.props.context,
                go: this.go,
                logIn: this.logIn,
                logOut: this.logOut
            }}
        />
    }

    render() {
        if (!this.state.loginStatus) {
            return (
                <div className="modal-outer">
                    <div className="modal-inner">
                        <LoginPage context={{logIn: this.logIn}} />
                    </div>
                </div>
            )
        } else if (!this.state.page) {
            return <div /> 
        } else {
            return (
                <div className="App">
                    <div className="base-page-outer-div">
                        <div className="base-page-inner-div">
                            { this.state.page }
                        </div>
                    </div>
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
}

/* Controls the router that translates URLs to individual pages */
export default class AppRouter extends Component {

    getStack(context, page) {
        return () => {
        return <PageStack page={page} context={context} navigate={useNavigate()} params={useSearchParams()} />
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
                React.createElement(this.getStack(context, page))}))}
            </Routes>
        </BrowserRouter>
        );
    }
}