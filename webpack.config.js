const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './client/src/',
  output: {
    path: `${__dirname}/public`,
    filename: '[name].bundle.js'
  },
  mode: 'production',
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
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  //   'styled-components': 'styled'
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  // optimization: {
  //   minimizer: [new TerserPlugin({})],
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  // optimization: {
  //   minimizer: [new TerserPlugin({})],
  // },
}