import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';
import Header from './components/layouts/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
class App extends Component {

  state = {
    todos: [
      {
        id: v4(),
        task: 'Takeout the trash',
        completed: true
      },
      {
        id: v4(),
        task: 'Clean the fridge',
        completed: false
      },
      {
        id: v4(),
        task: 'Wipe the counters',
        completed: false
      }
    ]
  };

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  deleteTask = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = (task) => {
    this.setState({
      todos: [...this.state.todos, {
        id: v4(),
        task,
        completed: false
      }]
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodo addTodo={ this.addTodo } />
          <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTask={ this.deleteTask } />
        </div>
      </div>
    );
  };
}

export default App;
