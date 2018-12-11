import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Main from '../dashboard/layout/main';
import IndexPage from '../dashboard/components/indexPage';
import Products from '../dashboard/components/products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Main>
    </Router>
  );
}

export default RouterConfig;
