import dva from 'dva';
import router from './router';
import models from '../dashboard/models';

function render() {
  console.log(models);
  const app = dva();
  Object.keys(models).forEach((key) => {
    app.model(models[key]);
  });
  app.router(router);
  app.start('#root');
}

render();
