const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpckPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.js'),
  devServer: {
    port: 8060,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
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
      template: path.resolve(__dirname, '/src/templates/index.html'),
    }),
  ],
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'public'),
  },
};
