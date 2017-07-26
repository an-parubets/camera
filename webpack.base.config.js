'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
		context: __dirname,

		entry: [
			'./src/js/test.js',
			'./src/scss/styles.scss'
		],

		output: {
			path: __dirname + '/dist/js',
			filename: 'bundle.js'
		},

		devtool: 'source-map',

		states: {
			colors: true
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [
						path.resolve(__dirname, 'node_modules'),
						/\.(spec|e2e)\.js$/
					],
					loader: 'bable-loader',
					options: {
						presets: ['es2015']
					}
				},
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						loader: 'css-loader'
					})
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						loader: [
							{
								loader: 'css-loader'	
							},
							{
								loader: 'sass-loader'
							}
						]
					})
				}
			]
		},

		pluigins: [
			new ExtractTextPlugin('css/mian.css'),
		]
}