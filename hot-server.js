const express = require('express')
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const app = express();

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
  path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.use(express.static('src'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
