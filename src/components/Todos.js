import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    markComplete = () => {

    }
    render(){
        return this.props.todos.map((todo) => (
            <div className="TodoItems">
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} 
                />
            </div>
        ));
    }
}

// Prop Types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
