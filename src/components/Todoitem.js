import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component{

    getStyle = () => {
        return {
            background: 'f4f4f4',
            padding: '10px',
            border: '1px #ccc solid',
            borderRadius: '10px',
            margin: '10px',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            padding: '10px',
            border: '2px solid #464646',
            bordeRadius: '10px',
            margin: '10px',
            texDecoration: 'none',
            boxShadow: '0 20px 30px rgba(0,0,0,0.19), 0 12px 12px rgba(0,0,0,0.23)',
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem