const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './client/src/',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: `${__dirname}/node_modules`,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}