import React, { Component } from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';

// import './style.css';
import style from './header.css';


class Header extends Component {
  handleClick = ({ key }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'utils/goto',
      goto: key,
    });
  }

  render() {
    const { activeRoute } = this.props;
    return (
      <header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[activeRoute.activeMenu]}
          mode="horizontal"
        >
          <Menu.Item key="/" className={style.test}>Indexpage</Menu.Item>
          <Menu.Item key="/products">products</Menu.Item>
        </Menu>
      </header>
    );
  }
}

function mapStateToProps({ utils }) {
  return {
    activeRoute: utils.activeRoute,
  };
}

export default connect(mapStateToProps)(Header);
