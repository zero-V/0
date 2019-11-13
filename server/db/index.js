// 引入mongodb
let mongodb = require('mongodb');
// 定义地址
let { MONGO_URL, ERRORS } = require('../consts');
// let mongoUrl = 'mongodb://localhost:27017/ickt_22_vue';
// 获取客户端
let MongoClient = mongodb.MongoClient;

// 关闭数据，并提示用户
function end(data, res, db) {
	// 如果是字符串
	if (typeof data === 'string') {
		res.json(ERRORS[data])
	} else {
		// 返回提示数据对象
		res.json(data);
	}
	// 关闭数据库
	db.close();
}

/***
 * 操作集合方法
 * @collectionName 	集合名称
 * @res 			响应
 * @callback 		回调函数
 **/ 
function collection(collectionName, res, callback) {
	// 打开数据库
	MongoClient.connect(MONGO_URL, (err, db) => {
		// 如果有错误，
		if (err) {
			// 提示用户
			// res.json({ errno: 1, msg: '数据库错误' })
			// // 关闭数据库
			// db.close();
			// 阻止执行
			// return;
			return end('databaseError', res, db)
		}
		// 操作集合
		callback(db.collection(collectionName), db, res)
	})
}


// 暴露接口
module.exports = { collection, end }