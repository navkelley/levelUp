require('babel-polyfill');

const path = require('path');

const webpack = require('webpack');

const packageData = require('./package.json');

const filename = [packageData.name, packageData.version, 'js'];

const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) 
			},
			exports.loadImages = function ({ include, exclude, options } = {}) {
				return {
					module: {
						rules: [
							{
								test: /\.(png|jpg|svg)$/,
								include,
								exclude,

								use: {
									loader: 'url-loader',
									options,
								},
							},
						],
					},
				};
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
			NODE_ENV: JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin('app.css')
	]
};
