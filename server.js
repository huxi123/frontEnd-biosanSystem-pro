var webpack = require('webpack');
var express = require('express');
var path = require('path');
var config = require('./webpack.config.pc.hot');
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
var compiler = webpack(config);

// const tempHtmlPath = './src/template/index.html';
const tempHtmlPath = './index.html';
/**
 * !!!! webpack-dev-middleware !!!
 * 1、No files are written to disk, rather it handles files in memory
	2、If files changed in watch mode, the middleware delays requests until compiling has completed.
	3、Supports hot module reload (HMR).
 */
app.use(require('webpack-dev-middleware')(compiler, {
	headers:{ "X-Custom-Header": "yes" },
	index:tempHtmlPath,
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));



app.use(require('webpack-hot-middleware')(compiler));

//special handles for browserHistory
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname,tempHtmlPath));
});

app.listen(3000, function() {
	console.log('正常打开3000`端口')
});