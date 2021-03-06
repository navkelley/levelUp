require('babel-polyfill');

const path = require('path');

const webpack = require('webpack');

const packageData = require('./package.json');

const filename = [packageData.name, packageData.version, 'js'];

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: filename.join('.'),
	},
	node: {
		fs: 'empty',
		net: 'empty'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader', 
			},
				{
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: [
				{
					loader: 'url-loader',
					options: { limit: 40000 }
				},
				'image-webpack-loader' // first one append
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
			NODE_ENV: JSON.stringify('production')
			}
		}),
	]
};
