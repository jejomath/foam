import React, { Component } from 'react';
import { Link } from './Components.js'

export default class LinksPage extends Component {

    render() {
        return <div className='links-page-outer-div'>
            <div className='links-page-inner-div'>
            {this.props.config.boxes.map((config, i) => (
                <div className='link-box-div' key={i}>
                    <div className='link-box-title-div'>{config.name}</div>
                    {config.links.map((config, j) => (
                        <Link config={config} key={j} context={this.props.context} />
                    ))}
                </div>
            ))}
            </div>
        </div>
    }

}