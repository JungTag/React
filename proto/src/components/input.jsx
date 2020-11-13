import React, { Component } from 'react';

class Input extends Component {
    handleChange = e => { 
        this.props.onChange(e);
    };

    handleAdd = e => {
        this.props.onAdd(e);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd }>
                    <input type="text" placeholder="Habit" onChange={this.handleChange}></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Input;