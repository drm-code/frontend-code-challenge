const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
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
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },
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
