import React from 'react';
import logo from './logo.svg';
import './App.css';

// function WordClock(props) {
//   return (
//     <div className="WorldClock">
//       <h2>도시: {props.city} </h2>
//       <p>시간: {props.time}시</p>
//     </div>
//   )
// }

// 1. 시간과 분이 변화
// 2. 동적으로 변화
class WordClock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    // this.setState
    // this.state.minute += 1 절대 안됨!
    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59
          ? { hour: state.hour + 1, minute: 0 }
          : { minute: state.minute + 1 }
      ))
    }, 100)
  }

  // 핸들링함수는 화살표 함수로 작성!
  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value}) // 이건 외워라
    clearInterval(this.timer)
  }

  // render는 미리 약속된 함수
  render() {
    return (
      <div className="WorldClock">
        <h2>도시: {this.props.city} </h2>
        <p>시간: {this.state.hour}시 {this.state.minute}분</p>
    <button value={true} onClick={this.handlingClick}>멈춰!</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17],
      ['부산', 10]
    ]
    this.state = {
      content: ''
    }
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
    console.log(event)
  }

  render () {
    return (
      <div>
        <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        {this.cityTimeData.map((citytime, index) =>
          <WordClock city={citytime[0]} time={citytime[1]} key={index} />
        )}
      </div>
    )
  }
}

/*
function App() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10]
  ]

  const WorldClockList = cityTimeData.map((citytime, index) =>
    <WordClock city={citytime[0]} time={citytime[1]} key={index} />
  )

  return (
    <div>
      {WorldClockList}
    </div>
  )
}
*/

export default App;
