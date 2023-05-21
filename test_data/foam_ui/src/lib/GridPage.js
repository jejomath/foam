import React, { Children, Component } from 'react';
import { SearchBar, Grid, ButtonList } from './Components.js'

export default class GridPage extends Component {

    render() {
        const config = this.props.config;
        const data = this.props.data[config.dataKey];
        const params = this.props.params[config.dataKey];
        const context = this.props.context;
        const client = context.clients[config.dataKey]

        if (!data || data.length === 0) { return <div />}
        return (
            <div>
                <Grid
                    config={config}
                    params={params}
                    data={data}
                    context={{...context, update: client.update}}
                />
            </div>
        )
    }
}
