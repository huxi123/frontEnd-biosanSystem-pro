var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.pc.hot');
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
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
//将其他路由，全部返回login_pc.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index_pc.html')
});

app.listen(3000, function() {
	console.log('正常打开3000`端口')
});