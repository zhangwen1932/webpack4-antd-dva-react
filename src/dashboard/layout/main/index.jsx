/**
 * @name: Main组件
 * @description: 主layout组件
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

import './style.scss';

import Header from '../header';

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <div id="main">
        <Header />
        <div className="main-content">{ children }</div>
      </div>
    );
  }
}

function mapStateToProps({ utils }) {
  return {
    pathname: utils.pathname,
  };
}

export default withRouter(connect(mapStateToProps)(Main));
