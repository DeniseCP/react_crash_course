import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        task: 'Takeout the trash',
        completed: true
      },
      {
        id: 2,
        task: 'Clean the fridge',
        completed: false
      },
      {
        id: 3,
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
      todos: this.state.todos.map(
        todo => {
          if (todo.id === id) {
             
          }
        }
      )
    })
  };

  render() {
    return (
      <div className="App">
        <Todos todos={ this.state.todos } markComplete={ this.markComplete } />
      </div>
    );
  };
}

export default App;
