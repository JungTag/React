import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    handleIncrement = habit => {
        const habits = [...this.state.habits]; // 복사
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
    };

    handleDecrement = habit => {
        const habits = [...this.state.habits]; // 복사
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
    };

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };

    render() {
        return (<ul>
            {this.state.habits.map(habit => ( 
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