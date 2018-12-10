import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import Main from '../dashboard/layout/main';
import IndexPage from '../dashboard/components/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Main>
    </Router>
  );
}

export default RouterConfig;
