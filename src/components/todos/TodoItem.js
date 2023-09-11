import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        };
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type='checkbox' checked={ this.props.todo.completed } onChange={ this.props.markComplete.bind(this, id) } /> { ' ' }
                    { title }
                    {/* @ts-ignore */ }
                    <button style={ btnStyle } onClick={ this.props.deleteTask.bind(this, id) }>Delete</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: '#dc3545',
    color: '#fff',
    border: '1px solid #dc3545',
    float: 'right',
    padding: '5px 10px',
    borderRadius: '0.25em',
    cursor: 'pointer'
};

TodoItem.prototypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default TodoItem;
