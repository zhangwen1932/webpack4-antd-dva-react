import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import './style.css';

function IndexPage() {
  return (
    <div className="normal">
      <h1 className="title">Yay! Welcome to dva!</h1>
      <div className="welcome" />
      <ul className="list">
        <li>
          <h1>Hello world</h1>
        </li>
        <li>
          <Button type="primary">Getting Started</Button>
        </li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
