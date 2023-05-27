import React, { Component } from 'react';
import { PageCell } from './Components.js'

export default class LayoutPage extends Component {
    render() {
    
        return (
            <div>
                {this.props.config.cells.map((page, i) => (
                    <div className='layout-cell-div' key={i}>
                        { page.display ? (<div className='layout-cell-header'>{page.display}</div>) : (<div />)}
                        <PageCell
                            page={page}
                            params={this.props.params}
                            data={this.props.data}
                            context={this.props.context}
                        />
                    </div>
                ))}
            </div>
        )
    }
}
