const webpack = require('webpack');
const path = require('path');

const hrm = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr';

module.exports = {
    devtool: 'sourcemap',
    entry: {
        app: [hrm, './src/index.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dev'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.svg', '.jpg', '.png', '.jpeg', '.jpeg','.woff', '.woff2']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] , include: path.join(__dirname, 'src'), exclude: /node_modules|lib/},
            { test: /.(jpe?g|png|gif)$/i, loader: 'url?name=[name].[ext]&limit=10000' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [
                new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
                new webpack.optimize.CommonsChunkPlugin('common.js'),
                // Webpack 1.0
                new webpack.optimize.OccurenceOrderPlugin(),
                // Webpack 2.0 fixed this mispelling
                // new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin(),
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('development')
                })
            ]
};
