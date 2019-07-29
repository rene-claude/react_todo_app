import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About'
import Todos from './components/Todos';
import AddTodos from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';
import './App.css';
import {isTSImportType} from "@babel/types";

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with the wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Test out more list items',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        
      console.log(todo);
        return todo;
    }) });
  }

  deleteTodo = (id) => {
    this.setState({todos: 
      // using a spread oporator to copy everything there and retur a new array that satisfies the condition 
      [...this.state.todos.filter(todo => todo.id !== id) ]
    });
  }

  addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      }

      // compy all contents of the current array but add the latest object to it
      this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
        <Router>
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodos addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                </React.Fragment>
            )} />

            <Route path="/about" component={About}/>


            </div>
        </Router>
    )
  }
}

export default App;
