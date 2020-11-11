import React, { Component } from 'react';

export default class FormClass extends Component {

    constructor(props) {
        super();
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.name);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" id="name"></input>
                <button type="submit">Submit!</button>
            </form>
        )
    }
}