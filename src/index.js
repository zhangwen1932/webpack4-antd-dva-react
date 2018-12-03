import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import test from './img/test.jpg';

class App extends Component{
  state = {
    reset:'yes'
  }
  onClick =() => {
    this.setState({
      reset:this.state.reset==='yes'?'no':'yes'
    })
  }
  render(){
    return(
      <div>
        <img 
        src={test} 
        alt='flower' 
        className={this.state.reset === 'yes'? 'flower' : 'flower flower-rotate'}
        onClick={this.onClick}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)