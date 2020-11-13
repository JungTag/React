import React, { Component } from 'react';
import Input from './input';
import Habits from './habits';
import Reset from './reset';

class Body extends Component {
    handleChange = e => { 
        this.props.onChange(e);
    };

    handleAdd = e => {
        this.props.onAdd(e);
    }

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleReset =  () => {
        this.props.onReset();
    };

    render() {
        return (
            <>
                <Input 
                    habits={this.props.habits}
                    onChange={this.handleChange}
                    onAdd={this.handleAdd}
                />
                <Habits
                    habits={this.props.habits}
                    onChange={this.handleChange}
                    onAdd={this.handleAdd}
                    onIncrement={this.handleIncrement} // 함수 복제 정도로 이해하고 넘어가자
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                />
                <Reset
                    habits={this.props.habits}
                    onReset={this.handleReset}
                />
            </> 
        );
    }
}

export default Body;