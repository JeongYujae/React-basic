// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProptTypes from "prop-types";
import Counter from 'Counter.js'
import Message from "Message"
import Profile from "Profile"


class App extends React.Component{
  render(){
    return(
      <div>
        <Profile/>
        <Message/>
        <Counter color={'red'}/>
        <Counter />
        <Counter color={'green'}/>

      </div>
    )

  }
}

export default App;