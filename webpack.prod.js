const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname,'src/index.jsx'),
        react: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name][hash].js'
    },
    resolve: {
        modulesDirectories: ["src", "assets", "node_modules"],
        extensions: ['', '.js', '.jsx', '.scss', 'jpg', 'png']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass'), include: path.join(__dirname, 'src'), exclude: /node_modules|lib/},
            {test: /\.(jpg|png)$/, loader: 'file'}
        ]
    },
    plugins: [

                new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'react', /* filename= */'react.bundle.js'),
                new webpack.optimize.CommonsChunkPlugin('common.js'),
                // Webpack 1.0
                new webpack.optimize.OccurenceOrderPlugin(),
                // Webpack 2.0 fixed this mispelling
                // new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.NoErrorsPlugin(),
                new webpack.DefinePlugin({
                    "process.env": {
                        NODE_ENV: JSON.stringify('production')
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    },
                    comments: true,
                    sourceMap: false,
                    mangle: {
                        except: ['$super', '$','exports','require','import']
                    }
                }),
                new ExtractTextPlugin("style.css"),
                new HtmlWebpackPlugin({
                  filename: 'index.html',
                  template: './src/app.template.html',
                  inject: 'body'
                })
            ]
};
