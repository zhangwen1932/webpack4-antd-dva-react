import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button } from 'antd';

import './style.scss';

class Products extends Component {
  handleDelete = (key) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/deleteProduct',
      payload: {
        id: key,
      },
    });
  };

  setClassName = (record, index) => (index === 0 ? 'test' : 'hello')

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
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => (
        products.length >= 1
          ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <Button type="primary">Delete</Button>
            </Popconfirm>
          ) : null
      ),
    }];
    return (
      <Table dataSource={products} columns={columns} rowClassName={this.setClassName} />
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products: products.productList,
  };
}

export default connect(mapStateToProps)(Products);
