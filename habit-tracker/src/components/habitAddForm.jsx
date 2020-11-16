import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef(); // 연결한 요소가 브라우저에 표시되면 그대로 가져옴
    formRef = React.createRef();

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.inputRef.current.value);
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }

    render() {
        return (
            <div>
                <form ref={this.formRef}className="add-form" onSubmit={this.onSubmit}>
                    <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                    <button className="add-button">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;