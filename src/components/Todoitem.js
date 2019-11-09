import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component{

    getStyle = () => {
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderRadius: '10px',
            margin: '10px',
            transition: 'all 0.4s ease',
            background: this.props.todo.completed ? 
            '#2c5629' : '#212121',
            padding: '10px',
            bordeRadius: '10px',
            margin: '10px',
            texDecoration: 'none',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.39), 0px 7px 20px rgba(0,0,0,0.43)',
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} id={this, id} /> {' '}
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