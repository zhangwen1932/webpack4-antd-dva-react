import { routerRedux } from 'dva/router';
import pathToRegexp from 'path-to-regexp';

const { push } = routerRedux.push;

const routers = [{
  test: '/indexPage',
  activeMenu: '/indexPage',
  path: [{
    text: 'menu_index',
  }],
}, {
  test: '/products',
  activeMenu: '/products',
  path: [{
    text: 'menu_products',
  }],
}];

export default {
  namespace: 'utils',
  state: {
    routers,
    pathname: '',
    history: null,
    activeRoute: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        dispatch({ type: 'updateCurrentPathName', pathname, history });
        let changeRoute = false;
        console.log('pathname', pathname);
        console.log('routers', routers);
        for (let i = 0; i < routers.length; i += 1) {
          const router = routers[i];
          const test = pathToRegexp(router.test).exec(pathname);
          console.log('test', test);
          if (test) {
            dispatch({
              type: 'updateState',
              payload: {
                activeRoute: router,
              },
            });
            changeRoute = true;
            break;
          }
        }
        if (!changeRoute) {
          dispatch({
            type: 'updateState',
            payload: {
              activeRoute: null,
            },
          });
        }
      });
    },
  },
  effects: {
    * goBack(_, { select }) {
      const history = yield select(({ utils }) => utils.history);
      history.goBack();
    },
    * goto({ goto }, { put }) {
      console.log('goto', goto);
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
