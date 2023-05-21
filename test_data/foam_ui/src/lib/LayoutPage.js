import React, { Component } from 'react';

export default class LayoutPage extends Component {
    render() {
    
        return (
            <div>
                {this.props.config.cells.map((page, i) => (
                    <div className='layout-cell-div' key={i}>
                        { page.display ? (<div className='layout-cell-header'>{page.display}</div>) : (<div />)}
                        {
                            React.createElement(page.type, {
                                data: this.props.data,
                                config: page.config,
                                params: this.props.params,
                                context: this.props.context,
                                key: i,
                            })
                        }
                    </div>
                ))}
            </div>
        )
    }
}
