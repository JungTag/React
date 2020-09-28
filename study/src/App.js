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
class WordClock extends React.PureComponent {
  
  /*
  constructor
  1. State 구조 설정(handling함수 this binding 설정)
  2. 컴포넌트가 Mount하기 전에 할 설정
  3. setState X
  */
  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    // this.setState
    // this.state.minute += 1 절대 안됨!
    console.log("  Child) 시작합니다")
  }

  /*
  ComponentDidMount
  1. 필요한 데이터 요청
  2. 각종 비동기 요청(Subscription)
  */  
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59
          ? { hour: state.hour + 1, minute: 0 }
          : { minute: state.minute + 1 }
      ))
    }, 5000)
    console.log("  Child) 마운트되었습니다.")
  }

  /*
  ComponentDidUpdate
  1. 업데이트 이후 수정할 때
  2. if() {setState()} -> 조건절을 통해 setState
   - why? setState -> DidUpdate -> setState...(무한루프)
  */    
  componentDidUpdate(){
    console.log("  Child) 업데이트!")
  }

  /*
  ComponentWillUnmount
  1. 데이터 요청, 비동기 함수, 타이머 종료
  2. setState X (위와 동일)
  */    
  componentWillUnmount() {
    console.log("  Child) 언마운트!")
    clearInterval(this.timer)
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
      content: '',
      show: true,
    }
    console.log("Parent) 시작합니다")
  }

  componentDidMount(){
    console.log("Parent) 마운트되었습니다.")
  }

  componentDidUpdate(){
    console.log("  Parent) 업데이트!")
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
    console.log(event)
  }

  handlingClick = (event) => {
    this.setState((prevState)=> ({show: !prevState.show}))
  }
  /*
  이벤트 핸들링 3단계
  1. 필요한 state를 만든다.
  2. 핸들링 함수를 만든다.
  3. 해당 요소에 연결한다.
   */
  render () {
    return (
      <div>
        <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        <button onClick={this.handlingClick}>손가락 튕기기</button>
        
        { this.state.show && this.cityTimeData.map((citytime, index) =>
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
