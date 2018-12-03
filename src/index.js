import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import test from './img/test.jpg';

class App extends Component{
  render(){
    return(
      <div>
        <img src={test} alt='flower'/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)