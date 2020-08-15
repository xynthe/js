'use strict';
const path = require('path');

const serveConfig = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: ['/node_modules/'],
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	target: 'node',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		library: 'synthetix',
		libraryTarget: 'commonjs',
		globalObject: "typeof self !== 'undefined' ? self : this",
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts'],
	},
};

const clientConfig = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: ['/node_modules/'],
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	entry: './src/index.ts',
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.browser.js',
		library: 'synthetix',
		libraryTarget: 'umd',
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts'],
	},
};

module.exports = [clientConfig, serveConfig];
