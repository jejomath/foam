import React, { Component } from 'react';
import { Grid } from './Components.js'

export default class GridPage extends Component {

    render() {
        const config = this.props.config;
        const params = this.props.params;
        const data = this.props.data;
        const context = this.props.context;

        if (data.length === 0) { return <div />}
        return (
            <div>
                <Grid
                    config={config}
                    params={params}
                    data={data}
                    context={context}
                />
            </div>
        )
    }
}
