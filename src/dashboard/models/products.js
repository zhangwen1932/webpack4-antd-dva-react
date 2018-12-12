const data = [{
  key: '1',
  name: '张三',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '李四',
  age: 42,
  address: '西湖区湖底公园1号',
}];

export default {
  namespace: 'products',
  state: {
    productList: [],
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'queryData',
      });
    },
  },
  effects: {
    * queryData(_, { put }) {
      const productList = data;
      yield put({
        type: 'updateState',
        payload: {
          productList,
        },
      });
    },
    * deleteProduct({ payload }, { put }) {
      const products = data;
      const productList = products.filter(item => item.key !== payload.id);
      yield put({
        type: 'updateState',
        payload: {
          productList,
        },
      });
    },
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
