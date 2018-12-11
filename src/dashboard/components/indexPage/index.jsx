import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import './style.scss';

function IndexPage() {
  return (
    <div className="normal">
      <h1 className="title">测试热加载是否成功</h1>
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

export default connect()(IndexPage);
