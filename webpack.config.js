//its importation format type used by nodejs
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //Remove production optimaze
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        //The files inside node_modules are already read-ready in the brownser, but each library should have the responsibility to generate the file that the browser understands //
        exclude: /node_modules/,
        //Webpack call babel to convert the file//
        use: 'babel-loader'
      }
    ]
  }
}
