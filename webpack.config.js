'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: "source-map",

	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		ignored: /node_modules/,
		poll: 1000
	},

	entry: [
		"./src/js/script.js",
		"./src/scss/styles.scss"
	],

	output: {
		path: __dirname + "/dist/js",
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}]
			},
			{
				test: /\.scss$/,
        		use: ExtractTextPlugin.extract({
          			fallback: "style-loader",
          			use: ["css-loader", "sass-loader"]
        		})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin({
			filename: (getPath) => {
				return getPath('../css/styles.css');
			},
			allChunks: true
		}),

		new webpack.LoaderOptionsPlugin({
			minimize: false,
			debug: false,
			options: {
				context: __dirname
			}
		})
	],

	stats: {
		colors: true
	}
}
