const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ProvidePlugin = webpack.ProvidePlugin;
const CommonsChunk = webpack.optimize.CommonsChunkPlugin;
const UglifyJs = webpack.optimize.UglifyJsPlugin;
const ExtractText = require('extract-text-webpack-plugin');
const HtmlPlugin = require('webpack-html-plugin');
const Clean = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const LessExtract = new ExtractText('[name].[contenthash:8].css');

let config = {

    entry: {
        index: './app/index/index.jsx',
        list: './app/list/list.jsx',
       // react: ['react', 'react-dom'], //设置需要提取的公共模块
        //jquery: ['jquery']
        common: ['react', 'react-dom', 'jquery']
    },
    // entry: './app/index/index.jsx',
    output: {
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[chunkhash:8].[name].js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        //配置项,设置忽略js后缀
        extensions: ['', '.js', 'jsx', '.less', '.css', '.png', '.jpg'],
        //定义解析的根目录
        // root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
        // root: path.resolve(__dirname, 'app/common/scripts'),
        //定义别名，便于直接require('Test')
        alias: {
            // react: path.resolve(__dirname, 'node_modules/react/dist/react.js'),
            // 'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.js'),
            //由于jquery1.8.3为非amd或cmd格式的，所以alias引入时，得不到jquery对象
            jquery: path.resolve(__dirname, 'app/lib/jquery-1.8.3.js'),
            lodash: path.resolve(__dirname, 'app/lib/lodash'),
            Test: path.resolve(__dirname, './app/common/scripts/Test.js'),
            testexpose: path.resolve(__dirname, 'app/common/scripts/TestExpose.js')
        }
    },
    //将html中的外部链接变为可以使用require('jquery')等方法引入
    externals: {
        // 'jquery': '$',
        // 'lodash': '_'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015&presets[]=react'
                /* loader: 'babel', */
                // query: {
                    // presets: ['react', 'es2015']
                /* } */
            },
            {
                test: /\.less$/,
                loader: ExtractText.extract('style-loader', 'css!autoprefixer!less')
            },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]' },
            // {test: path.join(__dirname, '/app/common/scripts/TestExpose'), loader: 'expose?TestExpose'}
            {test: require.resolve('./app/lib/jquery-1.8.3.js'), loader: 'exports?jQuery'}
        ]
    },
    plugins: [
        new Clean('./build'),
        //第一种方式将对象变为全局对象，如果是外部或者自定义的模块，需要alias别名，然后providePlugin申明
        //第二种方式  用expose  loader暴露
        new ProvidePlugin({
            'TestGlobal': 'Test',
            'TestExpose': 'testexpose',
            '$': 'jquery',
            // '_': 'lodash'
        }),
        new CommonsChunk({
            name: ['common'], //将公共模块提取
            minChunks: Infinity //提取所有entry共同依赖的模块
        }),
        // new UglifyJs({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new WebpackMd5Hash(),
        new webpack.NoErrorsPlugin(),
        LessExtract,
        new HtmlPlugin({
            filename: 'index.html',
            inject: true,
            chunks: ['common', 'index'],
            template: path.resolve(__dirname, 'app/index/index.html')
        }),
        // new HtmlPlugin({

        // })
    ]
}

module.exports = config;

//对于非amd或者cmd格式的外部模块，如果通过在html中写入链接，可以通过externals引入，key为require的路径标识，value为模块的全部变量。然后require就可以使用了
//但是如果是用alias别名引入，整个文件会被压入一个js中，则require得到的值是个空对象.所以需要通过exports-loader将其转为cmd规范，然后
//通过alais建立别名，即可require
