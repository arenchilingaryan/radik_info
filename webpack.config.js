const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

const cssRegx = /\.css$/
const imgRegx = /\.(png|jpe?g|gif|ico)$/i

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // optimization: {
  //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  // },
  mode: 'production',
  entry: {
    main: './home/main.js',
    sakura: './home/sakura.js',
    biography: './components/biography/biography.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './components/biography/biography.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
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
      },
      {
        test: imgRegx,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          },
        ],
      }
    ]
  }
}

