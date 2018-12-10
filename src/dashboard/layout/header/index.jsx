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
          <Menu.Item key="Index">Indexpage</Menu.Item>
          <Menu.Item key="products">products</Menu.Item>
        </Menu>
      </header>
    );
  }
}

export default Header;
