let fs = require('fs');
let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin')
// let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let config = require('./config/config');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let styleLoaders = require('./config/styleLoaders');
let NODE_ENV = process.env.NODE_ENV || 'development'; 

module.exports = {
	mode: 'development', // production, development, none(默认) 

	output: {
		filename: 'js/[name].[hash].js',
		path: config[NODE_ENV].output.path, // f文件输出路径
		publicPath: config[NODE_ENV].output.publicPath,  // 处理静态资源引用的路径
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					transformToRequire: {
						video: ['src', 'poster'],
						source: 'src',
						img: 'src',
						image: 'xlink:href'
					},
					hotReload: true, 
				}
			}, 
			
			{
				test: '/\.jsx?$/',
				loader: 'babel-loader'
			}, 

			{
	        	test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        		loader: 'url-loader?limit=8192&context=client&name=img/[name].[hash:7].[ext]' 
			},

			...styleLoaders
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin({filename: 'css/[name].[hash:6].css'}),
		// new MiniCssExtractPlugin({ filename: "css/[name].[hash:6].css" }),  // 无法单独提取出css
	],

	resolve: {  
        extensions: ['.js', '.vue', 'json'],
        modules: [path.join(__dirname, '../node_modules')],
        alias: {
        	vue: 'vue/dist/vue.js', // vue2.x 中， 如果不设置此项会报编译错误
            src: path.resolve(__dirname, '../src'),
            lib: path.resolve(__dirname, '../src/lib'),
            assets: path.resolve(__dirname, '../src/assets'),
            components: path.resolve(__dirname, '../src/components'),
            myVuex: path.resolve(__dirname, '../src/vuex'),
            vux: path.resolve(__dirname, '../node_modules/vux'),
        } 
	}
};