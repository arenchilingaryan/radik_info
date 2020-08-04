const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssRegx = /\.css$/

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './home/main.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'dist/css/[name].[contenthash].css',
      chunkFilename: 'dist/css/[name].[contenthash].chunk.css'
    })
  ],
  module: {
    rules: [
      {
        test: cssRegx,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './dist',
              minimize: true
            }
          },
          'css-loader'
        ]
      }
    ]
  }
}

