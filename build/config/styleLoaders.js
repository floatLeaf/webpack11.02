"use static";
let config = require('./config');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let autoprefixer = require('autoprefixer');
let postcssPxtorem = require('postcss-pxtorem');

let env = process.env.NODE_ENV || 'development';
let sourceMap = config[env].sourceMap; 
let cssLoader = {
	loader: 'css-loader',
	options: { 
		sourceMap
	}
};

function generLoader(loader, options) { 
	options = options || {};
	let loaders;

	if (loader == 'lessm') {
		loaders = [{
			loader: 'css-loader',
			options: {
				modules: true,
		        //css-modules name=文件名 local--样式名 hash:base64:8 hash8
				localIdentName: '[name]-[local]-[hash:4]',
				sourceMap
			}
		}]
	} else {
		loaders = [cssLoader];
	}

	if (loader && loader != 'css') {
		loaders.push({
			loader: loader == 'scss' ? 'sass-loader' : loader + '-loader',
			options: Object.assign({}, options, {sourceMap})
		});
	}

	let remPlugin = [];
	!config.rem.disabled && remPlugin.push(postcssPxtorem({ rootValue: config.rem.rootValue, propWhiteList: ['*', '!border'] })) // border属性在的px不转rem
	loaders.push({
		loader: 'postcss-loader',
		options: {
			plugins: [
				autoprefixer({
					browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
				}),
				...remPlugin
			]  
		}
	});
 
	// return {
	// 	test: new RegExp('\\.' + loader + '$'),
	// 	use: [ 
	// 		process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader', 
	// 		...loaders
	// 	]
	// }

	return {
		test: new RegExp('\\.' + loader + '$'),
		use: ExtractTextPlugin.extract({
			use: loaders,
			fallback: 'vue-style-loader'
		})
	}
}

module.exports = ['css', 'sass', 'scss', 'less', 'stylus', 'lessm'].map(loader => { 
	// vue-loader 中sass-loader配置需要传递此项， 参考https://vue-loader.vuejs.org/guide/pre-processors.html#sass
	let options = ['scss', 'sass'].indexOf(loader) >= 0 ? {} : { indentedSyntax: true }; 
	return generLoader(loader, options)
});