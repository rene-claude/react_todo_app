import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    // passing down the ability to call this cunction

  //This compoent is a "list container" for the indavidual items
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem 
            key={todo.id}  
            todo={todo} 
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
        />
    )); 
  }
}

export default Todos;
