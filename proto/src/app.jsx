import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Body from './components/body';


class App extends Component {
    state = {
        input: '',
        total: 3,
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    handleChange = e => { 
        const input = e.target.value;
        this.setState({ input }); 
    };

    handleAdd = e => {
        e.preventDefault();
        const habits = [...this.state.habits];
        const input = this.state.input;
        const index = habits.length + 1;
        const newHabit = { id: index, name: input, count: 0 };
        habits.push(newHabit);
        e.target.reset(); // 입력창 초기화
        const total = habits.length;
        this.setState({ input: '' });
        this.setState({ habits });
        this.setState({ total });
    }

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
        const total = habits.length;
        this.setState({ total });
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = [];
        const total = 0;
        this.setState({ total });
        this.setState({ habits });
    }

    render() {
        return (
            <>
                <Navbar
                    total={this.state.total}
                />
                <Body
                    habits={this.state.habits}
                    onChange={this.handleChange}
                    onAdd={this.handleAdd}
                    onIncrement={this.handleIncrement} // 함수 복제 정도로 이해하고 넘어가자
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset} />
            </>
        );
    }
}
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

export default App;