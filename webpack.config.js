const HtmlWebpackPlugin = require('html-webpack-plugin')  //untuk generate file html ke dist folder
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
module.exports = {
  entry : './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //direktori output
    publicPath: 'dist/',
    filename: 'index_bundle.js' //file output
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/dist'
        }) //generate eksternal file css pakai ExtractTextPlugin
      },
      {
				test: /\.js$/, //baca semua file ekstensi .js
				exclude: /node_modules/, //ignore direktori node_modules
				use: 'babel-loader' //gunakan package ini
			}
    ],
  },
  devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		//port: 9000,
    stats: 'errors-only', //tampilkan error saja di terminal
    open: true //buka new tab saat pertama kali "npm run dev"
	},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pemula Webpack',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: __dirname + '/src/my-index.html', // Load a custom template (lodash by default see the FAQ for details)
    }),
    new ExtractTextPlugin('app.css'), //nama external file css
  ]
}
