const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      FROG_MODE: JSON.stringify(process.env.FROG_MODE)
    })
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}
