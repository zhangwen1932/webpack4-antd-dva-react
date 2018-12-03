const path = require('path');

module.exports = {
  mode: "development",
  entry: __dirname+'/src/index.js',
  devServer: {
    port:8060,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    filename:'test.js',
    path:path.resolve(__dirname,'public')
  }
};