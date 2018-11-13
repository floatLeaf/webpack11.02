####基于webpack的vue多入口环境搭


####vue热加载
webpack-dev-middleware +  webpack-hot-middleware 

####html处理
html-loader 导出 HTML 为字符串，需要引用静态资源


####css预处理
 
+style-loader 将模块的导出作为样式添加到 DOM 中
+css-loader 解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们。
+less-loader 加载和转译 LESS 文件
+sass-loader 加载和转译 SASS/SCSS 文件
+postcss-loader 使用 PostCSS 加载和转译 CSS/SSS 文件
+stylus-loader 加载和转译 Stylus 文件

ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: "css-loader"
  publicPath: ''
})
use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
fallback:编译后用什么loader来提取css文件
publicfile:用来覆盖项目路径,生成该css文件的文件路径

css-loader options: {import: true, modules: true, localIdentName: true, cameCase: true}


####文件处理

url-loader 像 file loader 一样工作，但如果文件小于限制，可以返回 data URL， 常用于处理图片

file-loader 生成文件 file.png，输出到输出目录并返回 public URL（"/public/path/0dcbbaa7013869e351f.png"）。



####ES2015
.babelrc
{
	preset: [
		[
			'@babel/preset-env', {
				targets: {
					"chrome": "58",
    				"ie": "11"
				}
			}
		]
	]
}