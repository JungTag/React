import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
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
        this.setState({ habits });
    };

    handleDecrement = habit => {
        const habits = [...this.state.habits]; // 복사
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    };

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    };

    handleAdd = name => {
        const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
        this.setState({habits})
    }

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            habit.count = 0;
            return habit;
        });
        this.setState({habits});
    };

    render() {
        return (
            <>
            <Navbar totalCount={this.state.habits.filter(item => item.count>0).length}/>
            <Habits
                habits={this.state.habits}
                onIncrement={this.handleIncrement} // 함수 복제 정도로 이해하고 넘어가자
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onReset={this.handleReset}/>
            </>
        );
    };
}

export default App;
// function App() {
//     const name = "tag";
//     return ( // 다수의 태그를 return 할 수 없음, 묶어줘야 함!
//     <>
//         <h1>Hello! {name}:)</h1>
//         <h1>hi!</h1>
//     {name && <h1>bye! {name}</h1>}
//     {['😀', '😇'].map(item => (
//         <h1>{item}</h1>
//     ))}
//     {/* 자바스크립트 코드 작성 가능 */}
//     </>
//     );
// }

