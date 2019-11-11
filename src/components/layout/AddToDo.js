import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

export class AddTodo extends Component {
    state = {
        title: '',
        id: uuid.v4()
    }
 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        let x = document.getElementById('input');
        if(x.value == ''){
            x.placeholder = 'Please enter more than one character...';
        } else{
            this.props.addTodo(this.state.title);
            this.setState({ title: '' });
            x.placeholder = 'Add Todo...';
        }
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="formStyle" autocomplete="off">
                <input 
                    type="text" 
                    name="title" 
                    minlength='1'
                    maxlength='35'
                    id="input"
                    className="addInput"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

// Prop Types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo