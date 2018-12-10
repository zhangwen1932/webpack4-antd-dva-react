import { routerRedux } from 'dva/router';

const { push } = routerRedux.push;

export default {
  namespace: 'utils',
  state: {
    pathname: '',
    history: null,
    activeRoute: null,
  },
  effect: {
    * goBack(_, { select }) {
      const history = yield select(({ utils }) => utils.history);
      history.goBack();
    },
    * goto({ goto }, { put }) {
      yield put(push(goto));
    },
  },
  reducers: {
    updateCurrentPathName(state, { pathname, history }) {
      return { ...state, pathname, history };
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
