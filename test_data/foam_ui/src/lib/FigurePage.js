import React, { Component } from 'react';
import { ButtonList } from './Components.js'
import Plot from 'react-plotly.js';

export default class Figure extends Component {
    render() {
        if (!this.props.data.table) { return <div />}
        const config = this.props.config.plots.map(plot => {
            Object.entries(plot.data).forEach(v => {
                plot.config[v[0]] = this.props.data.table.map((d) => (d[v[1]]))
            });
            return plot.config;
        })
        return (
            <div className='figure-page-outer-div'>
            <div className='figure-page-inner-div'>
                <Plot
                    data={config}
                    layout={this.props.config.layout}
                />
            </div>
            </div>
        )
    }
}
