import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';


class Products extends Component {
  render() {
    const { products } = this.props;
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <Table dataSource={products} columns={columns} />
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products: products.productList,
  };
}

export default connect(mapStateToProps)(Products);
