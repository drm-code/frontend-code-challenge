const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      title: 'McMakler GmbH - Frontend Code Challenge'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
