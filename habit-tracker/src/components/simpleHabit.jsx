import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  // const spanRef = React.createRef(); -> 계속 Ref를 만듦
  const spanRef = useRef(); // 한 번 만들고 저장해서 계속 사용

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }); // userCallback()을 사용하면 props가 변경되도 새로운 객체가 생성되지 않는다.

  useEffect(() => { // mounted or updated
    console.log(`mounted & updated!: ${count}`);
  }, []); 
  // 두 번째 인자에 이렇게 변수를 넣어주면 해당 변수가 업데이트될 때만 함수를 실행시킨다.
  // *** 그렇다면 두 번째 인자에 빈 배열을 넣어주면 마운트될 때만 함수를 실행시킨다.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase"onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;


// class SimpleHabit extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <li className="habit">
//         <span className="habit-name">Reading</span>
//         <span className="habit-count">{this.state.count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fas fa-plus-square"></i>
//         </button>
//       </li>
//     );
//   }
// }

// export default SimpleHabit;
