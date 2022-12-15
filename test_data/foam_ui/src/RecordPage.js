import React, { Component } from 'react';
import { Button, ButtonList, ViewField, EditField, FieldList } from './Components.js'

export class RecordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.context.getRecord(
                this.props.config.sourceTable,
                this.props.params),
        })
    }

    update = (field, value) => {
        var data = this.state.data;
        data[field] = value;
        this.setState({
          data: data,
        })
    }

    render() {
        if (!this.state.data) { return <div />}
        return (
            <div>
                <FieldList
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.viewFields,
                        fieldType: ViewField,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {this.props.context}
                />
                <FieldList
                    config={{
                        table: this.props.config.sourceTable,
                        fields: this.props.config.editFields,
                        fieldType: EditField,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {{...this.props.context, update: this.update}}
                />
                <ButtonList
                    config={{
                        buttons: this.props.config.buttons,
                    }}
                    params = {this.props.params}
                    data = {this.state.data}
                    context = {this.props.context}
                />
            </div>
        )
    }
}
