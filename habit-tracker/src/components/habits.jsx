import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    render() {
        return (
        <>
        <HabitAddForm onAdd={this.props.onAdd}/>
        <ul>
            {this.props.habits.map(habit => (
                <Habit key={habit.id}
                    habit={habit}
                    onIncrement={this.props.onIncrement} // 함수 복제 정도로 이해하고 넘어가자
                    onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete} />
            ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}></button> 재사용될 확률이 낮으므로 따로 컴포넌트로 만들기 보다는 그냥 태그로!
        </>
        );
    }
    
    /* 
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };
    
    handleAdd = name => {
        this.props.onAdd(name);
    }
    
    render() {
        return (
        <>
        <HabitAddForm onAdd={this.handleAdd}/>
        <ul>
            {this.props.habits.map(habit => (
                <Habit key={habit.id}
                    habit={habit}
                    onIncrement={this.handleIncrement} // 함수 복제 정도로 이해하고 넘어가자
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete} />
            ))}
        </ul></>
        );
    }
    */
}

export default Habits;