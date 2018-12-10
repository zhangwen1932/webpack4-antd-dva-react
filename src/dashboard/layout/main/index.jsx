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
    return (
      <div id="main">
        <Header />
        <div className="main-content">{this.props.children}</div>
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
