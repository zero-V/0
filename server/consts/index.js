module.exports = {
	HTTP_PORT: 3000,
	HTTPS_PORT: 3001,
	// 静态化
	STATIC: {
		'/static/': './static/',
		'/favicon.ico': './favicon.ico'
	},
	// 数据库配置
	MONGO_URL: 'mongodb://localhost:27017/ickt_22_vue',
	// 错误提示
	ERRORS: {
		// 成功
		success: { errno: 0, msg: 'success' },
		// 数据库失败
		databaseError: { errno: 1, msg: '数据库错误' },
		// 集合操作失败
		collectionInsertError: { errno: 2, msg: '数据库错误' },
		// 查询错误
		collectionFindError: { errno: 3, msg: '数据库错误' },
		// 没有查询到数据
		collectionFindNoData: { errno: 4, msg: '数据库错误' }
	},
	// 显示商品的数量
	SHOW_GOODS_NUM: 10
}