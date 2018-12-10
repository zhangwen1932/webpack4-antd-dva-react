import React, { Component } from 'react';
import { Menu } from 'antd';

import './style.scss';

class Header extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={current}
          mode="horizontal"
        >
          <Menu.Item key="products">导航一</Menu.Item>
          <Menu.Item key="example">导航二</Menu.Item>
        </Menu>
      </header>
    );
  }
}

export default Header;
