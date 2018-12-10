import dva from 'dva';
import router from './router';
import models from '../dashboard/models';

function render() {
  console.log(models);
  const app = dva({
    initialState: {
      products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
      ],
    },
  });
  Object.keys(models).forEach((key) => {
    app.model(models[key]);
  });
  app.router(router);
  app.start('#root');
}

render();
