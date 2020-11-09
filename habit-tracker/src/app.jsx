import React from 'react';
import './app.css';
import Habit from './components/habit';

function App() {
    return <Habit />;
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
