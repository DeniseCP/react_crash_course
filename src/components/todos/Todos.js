import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={ todo.id } todo={ todo } markComplete={ this.props.markComplete } deleteTask={ this.props.deleteTask } />
        ));
    };
}

Todos.prototypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default Todos;
