import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.is_completed ? 'line-through' : 'none'
        }
    }

  
    render() {
        const { id, name } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p onClick={this.props.markComplete.bind(this,id)}>{name}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>remove</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'blue',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'

}
export default TodoItem
