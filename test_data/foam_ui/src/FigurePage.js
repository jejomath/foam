import React, { Component } from 'react';
import { ButtonList } from './Components.js'
import Plot from 'react-plotly.js';

export default class FigurePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        this.props.context.getRecords(
            this.props.config.sourceTable).then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    render() {
        if (!this.state.data) { return <div /> }
        const config = this.props.config.plots.map(plot => {
            Object.entries(plot.data).forEach(v => {
                plot.config[v[0]] = this.state.data.map((d) => (d[v[1]]))
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
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {this.props.context}
                    hide={this.props.params.mode === 'select'}
                />
            </div>
            </div>
        )
    }
}

// data={[{
//     type: 'bar', 
//     y: this.state.data.map((d) => (d.name)), 
//     x: this.state.data.map((d) => (d[this.props.config.figureConfig.field])),
//     orientation: 'h'
// }]}
// layout={ {width: 700, height: 400, title: this.props.config.figureConfig.title} }
