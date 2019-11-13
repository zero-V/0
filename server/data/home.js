// 引入数据库模块
let { collection, end } = require('../db');
// 引入配置
let { SHOW_GOODS_NUM } = require('../consts');
// 接口方法
module.exports = (req, res) => {
	// res.json('success')
	// 操作集合
	collection('goods', res, (colls, db) => {
		// 查询数据
		colls.find()
			// 倒序
			.sort({ _id: -1 })
			// 截取数据的条数据
			.limit(SHOW_GOODS_NUM)
			// 转化成
			.toArray((err, list) => {
				// console.log(err, result)
				// 如果有错误
				if (err) {
					// 提示错误
					return end('collectionFindError', res, db)
				}
				// 没有数据
				if (list.length === 0) {
					return end('collectionFindNoData', res, db)
				}
				// 返回数据
				end({ list }, res, db)
			})
	})
}