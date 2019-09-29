const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    mode:'development',
    entry: {
        appBundle: [
            './src/js/pagina1.js',
            './src/js/pagina2.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
       ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: "pagina1.html",
            template: "index_template.html",
            templateParameters: {
                pageScript: 'pagina1'
            }
        }),
        new HtmlWebpackPlugin({
            filename: "pagina2.html",
            template: "index_template.html",
            templateParameters: {
                pageScript: 'pagina2'
            }
        })        
    ]
};