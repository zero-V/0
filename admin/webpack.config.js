// 引入path
let path = require('path');
// 处理模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入模块拆分打包插件
let { CommonsChunkPlugin } = require('webpack').optimize;
// css打包
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 配置
module.exports = {
	// 解决问题
	resolve: {
		// 别名
		alias: {
			vue$: 'vue/dist/vue.js'
		},
		// 拓展名
		extensions: ['.vue', '.js']
	},
	// 入口
	entry: {
		main: './src/main.js',
		lib: ['vue']
	},
	// 发布
	output: {
		// 根路径
		path: path.join(process.cwd(), '../'),
		// 文件名
		filename: './static/admin/[name].js'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.js$/,
				loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,

				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// 配置
				options: {
					extractCSS: true,
					// js变成es5规范
					loader: {
						js: ['babel-loader?presets[]=es2015']
					}
				}
			},
			// css加载机
			{
				test: /\.css$/,
				// 将css打包
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			// 字体图标
			{
				test: /\.(woff|ttf)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 模板
		new HtmlWebpackPlugin({
			// 模板位置
			template: './public/index.html',
			// 模板发布
			filename: './views/admin.html',
			// 添加hash
			hash: true
		}),
		// 模块打包
		new CommonsChunkPlugin('lib'),
		// css打包
		new ExtractTextPlugin('./static/admin/style.css')
		// 开发完成再压缩。
	]
}