// import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import React from 'react';
import ProptTypes from "prop-types";
import ThemedButton from 'ThemedButton';
import Counter from 'Counter.js'



class App extends React.Component{
  state={myquery:"", language:""}
  Change_func = (e) =>{
    const {name, value}=e.target; //타겟은 input되는 대상을 의미함
    this.setState({ //name이라는 지정된 값의 상태값을 지정해줌
      [name]:value
    })
  }
  render(){
    return(
      <div>
        <Counter onClick={() => console.log("Clicked")}/> 
        {/* 핸들러는 함수로 지정하기 */}
        <input name="myquery" onChange={this.Change_func}/>
        <input name="language" onChange={this.Change_func}/>
        {/* ex - > myquery라는 이름에 어떤 언어를 쓰는지를 input 타입으로 표현한 하나의 예시 식 */}
      </div>
    )
  }
}

export default App;