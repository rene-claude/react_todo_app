import React, { Component } from 'react'

export class TodoItem extends Component {

    /*
    getStyle = () => {
        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
*/

    getStyle = () => {
        return {
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through': 'none' 
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    { title }
                    <button 
                        style={buttonStyle}
                        onClick={this.props.deleteTodo.bind(this, id)}
                        >Delete</button>
                </p>
            </div>
        )
    }
}

const buttonStyle = {
    background: '#ff0000',
    color: '#fff',
    broder: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// One way to define styles for an item
const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem
