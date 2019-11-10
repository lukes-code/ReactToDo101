import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component{

    getStyle = () => {
        return {
            background: this.props.todo.completed ? 
            '#2c5629' : '#212121',
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={items}>
                <div style={this.getStyle()} className="todoBox">
                    <label className="check">
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} id={this, id} /> {' '}
                    { title }
                    </label>
                    <span className="checkmark"></span>
                 </div>
                <div className="delBtn" onClick={this.props.delTodo.bind(this, id)}>
                </div>
            </div>
        )
    }
}

const items = {
    display: 'flex'
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