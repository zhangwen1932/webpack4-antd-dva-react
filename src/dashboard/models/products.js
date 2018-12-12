export default {
  namespace: 'products',
  state: {
    productList: [{
      key: '1',
      name: '张三',
      age: 32,
      address: '西湖区湖底公园1号',
    }, {
      key: '2',
      name: '李四',
      age: 42,
      address: '西湖区湖底公园1号',
    }],
  },
  subscriptions: {
  },
  effects: {
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
