const data = [{
  key: '1',
  name: '张',
  age: 32,
  address: '',
}, {
  key: '2',
  name: '李四',
  age: 42,
  address: '西湖区湖底公园1号',
}];

export default {
  namespace: 'products',
  state: {
    productList: data,
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
