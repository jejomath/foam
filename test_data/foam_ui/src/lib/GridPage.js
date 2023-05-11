import React, { Children, Component } from 'react';
import { SearchBar, Grid, ButtonList } from './Components.js'

export default class GridPage extends Component {

    render() {
        const data = this.props.data.table;
        if (!data || data.length === 0) { return <div />}
        const config = this.props.config;
        const params = this.props.params.table;
        const context = this.props.context;

        return (
            <div>
                <Grid
                    config={config}
                    params={params}
                    data={data}
                    context={{...context, update: context.clients.table.update}}
                />
            </div>
        )
    }
}
