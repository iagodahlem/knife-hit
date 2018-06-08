import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  output: {
    filename: '[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:4].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
    ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
}
