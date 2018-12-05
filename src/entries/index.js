import dva from 'dva';
import router from './router';
import models from '../dashboard/models';
import './index.scss';

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
  // app.model(require('../dashboard/models/products').default);
  Object.keys(models).forEach((key) => {
    app.model(models[key]);
  });
  app.router(router);
  app.start('#root');
}

render();
// // 1. Initialize
// const app = dva({
//   initialState: {
//     products: [
//       { name: 'dva', id: 1 },
//       { name: 'antd', id: 2 },
//     ],
//   },
// });


// // 2. Plugins
// // app.use({});

// // 3. Model
// app.model(require('../dashboard/models/products').default);

// // 4. Router
// app.router(require('./router').default);

// // 5. Start
// app.start('#root');
