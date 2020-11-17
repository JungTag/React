import React from 'react'; // import React, {memo} from 'react';
// memo는 함수형 컴포넌트의 PureComponent와 같음

const HabitAddForm = props => {
    const inputRef = React.createRef(); // 연결한 요소가 브라우저에 표시되면 그대로 가져옴
    const formRef = React.createRef();

    const onSubmit = e => {
        e.preventDefault();
        // console.log(this.inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name); // name이 있다면 해당 함수를 실행한다!!
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    );
};

export default HabitAddForm;

// import React, { Component } from 'react';

// class HabitAddForm extends Component {
//     inputRef = React.createRef(); // 연결한 요소가 브라우저에 표시되면 그대로 가져옴
//     formRef = React.createRef();

//     onSubmit = e => {
//         e.preventDefault();
//         // console.log(this.inputRef.current.value);
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name); // name이 있다면 해당 함수를 실행한다!!
//         //this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     }

//     render() {
//         return (
//             <div>
//                 <form ref={this.formRef}className="add-form" onSubmit={this.onSubmit}>
//                     <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
//                     <button className="add-button">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default HabitAddForm;