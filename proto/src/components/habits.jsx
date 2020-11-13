import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    render() {
        return (<ul>
            {this.props.habits.map(habit => ( 
                    <Habit key={habit.id} 
                    habit = {habit} 
                    onIncrement={this.handleIncrement} // 함수 복제 정도로 이해하고 넘어가자
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}/>
            ))}
        </ul>
        );
    }
}

export default Habits;