import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// @ts-ignore
import './App.css';
import Header from './components/layouts/Header';
// @ts-ignore
import axios from 'axios';
import About from './components/pages/About';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
class App extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .then((resp) => {
        this.setState(({ todos: resp.data }));
      });
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        // @ts-ignore
        if (todo.id === id) {
          // @ts-ignore
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  deleteTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // @ts-ignore
      .then(resp => this.setState({
        // @ts-ignore
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));

  };

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(resp => this.setState({
      todos: [...this.state.todos, resp.data]
    }));
  };

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" Component={ _props => (
                <React.Fragment>
                  <AddTodo addTodo={ this.addTodo } />
                  <Todos todos={ this.state.todos } markComplete={ this.markComplete } deleteTask={ this.deleteTask } />
                </React.Fragment>
              ) } />
              <Route path='/about' Component={ About } />
            </Routes>

          </div>
        </div>
      </Router>
    );
  };
}

export default App;
