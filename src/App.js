import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos'
import AddTodo from './components/layout/AddToDo'
import uuid from 'uuid'
import About from './components/pages/About'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({ todos: res.data }))
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    
  }

  addTodo = (title) => {
    const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
    }
      this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div style={container} className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                key={this.addId}
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const container = {
  background: '#212121',
}

export default App;
