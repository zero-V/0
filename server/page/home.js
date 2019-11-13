// 路由方法
module.exports = (req, res) => {
	// 渲染页面
	res.render('home.html', {
		// 渲染数据
		title: '爱创课堂'
	})
}