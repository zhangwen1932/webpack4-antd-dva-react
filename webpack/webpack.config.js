const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpckPlugin = require('html-webpack-plugin');

const { routers } = require('./routers.dev.json');


const entry = {};

routers.forEach((r) => {
  entry[r.name] = r.entry;
});

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '..', 'src/'),
  entry,
  devServer: {
    port: 8060,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, '..', 'src'),
        ],
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpckPlugin({
      template: path.join(__dirname, '..', 'src/templates/index.html'),
    }),
  ],
  output: {
    filename: 'test.js',
    path: path.join(__dirname, '..', 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
