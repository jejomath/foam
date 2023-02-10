import React, { Component } from 'react';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    updateUsername = (event) => {this.setState({username: event.target.value})}
    updatePassword = (event) => {this.setState({password: event.target.value})}

    render() {
        return (
            <div>
                <div><input type='text' value={this.state.username} onChange={this.updateUsername}/></div>
                <div><input type='text' value={this.state.password} onChange={this.updatePassword}/></div>
                <button onClick={() => this.props.context.logIn(this.state.username, this.state.password)}>Log In</button>
            </div>
        )
    }
}
