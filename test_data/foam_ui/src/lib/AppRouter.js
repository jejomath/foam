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
    useSearchParams,
    useParams
} from "react-router-dom";


/* Connects the data to the page */
class Page extends Component {
    constructor(props) {
        super(props);
        const page = this.props.context.pages[this.props.name]
        this.clientDict = {}
        this.clientList = []
        var dataDict = {}
        var paramsDict = {}
        for (const config of page.data) {
            const name = config.name;
            const client = new config.type(
                config,
                this.props.params,
                {
                    ...this.props.context,
                    setState: (data) => {
                        var stateData = this.state.data;
                        stateData[name] = data;
                        this.setState({data: stateData}); 
                    },
                    getState: () => { return this.state.data[name]; },
                    setParams: (params) => { 
                        var stateParams = this.state.params;
                        stateParams[name] = params;
                        this.setState({params: stateParams});
                    },
                    getParams: () => { return this.state.params[name]; },
                }
            )
            this.clientDict[name] = client;
            this.clientList.push(client);
            dataDict[name] = null;
            paramsDict[name] = this.props.params;
        }
        this.state = {
            data: dataDict,
            params: paramsDict,
        }
    }

    async loadData() {
        for (const client of this.clientList) {
            await client.load(this.state.data);
        }
    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        const page = this.props.context.pages[this.props.name]
        return React.createElement(page.type, {
            data: this.state.data,
            config: page.config,
            params: this.state.params,
            context: {
                ...this.props.context,
                clients: this.clientDict,
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
        if (!target) {
            return;
        } else if (target === 'back') { 
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
            return <PageStack
                page={page}
                context={context}
                navigate={useNavigate()}
                params={useSearchParams()}
            />
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
