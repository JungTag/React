import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js'
import SimpleHabit from './components/simpleHabit';

// ReactDom -> 가장 상위의 컴포넌트를 연결해줌
ReactDOM.render( // ReactDom 클래스의 render 함수
  <React.StrictMode>
    <SimpleHabit />  
  </React.StrictMode>, // StrinctMode -> 디버깅
  document.getElementById('root')
);
