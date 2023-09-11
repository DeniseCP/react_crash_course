import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        task: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({ task: '' });
    };

    render() {
        return (
            <form style={ { display: "flex" } } onSubmit={ this.onSubmit.bind(this) }>
                <input
                    type="text"
                    name="task"
                    placeholder="Add Todo.."
                    style={ { flex: "10", padding: "5px" } }
                    value={ this.state.task }
                    onChange={ this.onChange } />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={ { flex: "1" } } />
            </form>
        );
    }
}

AddTodo.prototypes = {
    addTodo: PropTypes.func,
};
export default AddTodo;
