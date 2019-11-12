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
                <label class="toggleButton">
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} id={this, id} /> 
                    <div>
                    <svg viewBox="0 0 44 44">
                        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                    </svg>
                    </div>
                </label>
                    <span className="todoText">{' '}
                    { title }</span>
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