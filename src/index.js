import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Steps } from 'antd';
import './index.css';
import test from './assets/img/test.jpg';


// eslint-disable-next-line prefer-destructuring
const Step = Steps.Step;
class App extends Component {
  state ={
    reset: 'yes',
  }

  onClick = () => {
    const temp = this.state.reset === 'yes' ? 'no' : 'yes';
    this.setState({
      reset: temp,
    });
  }
  
  render() {
    return (
      <div>
        <img
          src={test}
          alt="flower"
          className={this.state.reset === 'yes' ? 'flower' : 'flower flower-rotate'}
          onClick={this.onClick}
        />
        <Button>Primary</Button>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
