// 引入express
let express = require('express');
// 引入server
let server = require('./server');
// 引入中间件
let middleware = require('./middleware');
// 引入路由
let router = require('./router');

// 创建express应用
let app = express();

// 启动服务
server(app);
// 安装中间件
middleware(app);
// 引入路由
router(app);


// 引入mongodb
// let mongodb = require('mongodb');
// // 定义地址
// let mongoUrl = 'mongodb://localhost:27017/ickt_22_vue';
// // 获取客户端
// let MongoClient = mongodb.MongoClient;
// 引入db
let { collection, end } = require('./db')
// 输入/create地址的时候，插入一条数据
app.get('/create', (req, res) => {

	// 操作集合
	// collection('goods', res, (collection, db) => {
	// 	collection
	// 		.insertOne({
	// 			"img": "01.jpg",
	// 			"title": "hello",
	// 			"description": "串亭户外套餐A，建议4-6人使用",
	// 			"sales": 44,
	// 			"price": 405,
	// 			"originPrice": 468,
	// 			"evaluate": 4.5,
	// 			"storeName": "串亭烧烤居酒屋（五道口店）",
	// 			"storeAddress": "海淀区成府路35号华清嘉园12号楼底商（华清嘉园东门向北30米）",
	// 			"storeNum": 6,
	// 			"content": "<h3>有效日期</h3><p>2016.4.27 至 2016.10.26（周末、法定节假日通用）</p><h3>使用日期</h3><p>10:00-24:00,请您提前48小时预约，预约电话：010-8424-3309。（仅限东直门店自取）</p><h3>使用规则</h3><p>提前48小时预约，电话：010-8424-3309</p><p>每张美团券建议4至6人使用</p><p>店内无包间</p><p>仅限餐前外带，提供免费打包服务</p><p>亲爱的顾客，为了让您有更好的户外烧烤体验，请仔细阅读以下须知：一、我们将免费为您提供户外烧烤用具（需付押金）、烧烤酱料及餐巾抽纸。二、客户自愿交付 200 元押金（含不锈钢烧烤炉及不锈钢夹子各一套），归还上述所使用工具时退还全部押金。三、如需串亭专业烤师为您主理烤制，烤师费用标准为 200 元/日/次/人，烤师的食宿与交通由客户提供安排。四、客户购买食品和需返还的烧烤用具数量请在店内（仅限东直门店）进行确认。五、请您按需购买食品及辅助材料，以避免浪费。六、请您提前48小时预约，预约电话：010-8424-3309。团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商</p><p>停车位收费标准：详情咨询商家</p>"
	// 		}, (err) => {
	// 			if (err) {
	// 				// // 提示用户，
	// 				// res.json({ errno: 2, msg: '操作集合错误' })
	// 				// // 关闭数据
	// 				// db.close();
	// 				// return;
	// 				return end('collectionInsertError', res, db)
	// 			}
	// 			// 成功也要提示用户
	// 			// res.json({ errno: 0, msg: 'success' })
	// 			// // 关闭数据库
	// 			// db.close();
	// 			end('success', res, db)
	// 		})
	// })
	// res.json('success')
	// 打开数据库
	// MongoClient.connect(mongoUrl, (err, db) => {
	// 	// 操作集合
	// 	db.collection('goods')
	// 		// 插入数据
	// 		.insertOne({
	// 			"img": "01.jpg",
	// 			"title": "串亭烧烤居酒屋",
	// 			"description": "串亭户外套餐A，建议4-6人使用",
	// 			"sales": 44,
	// 			"price": 405,
	// 			"originPrice": 468,
	// 			"evaluate": 4.5,
	// 			"storeName": "串亭烧烤居酒屋（五道口店）",
	// 			"storeAddress": "海淀区成府路35号华清嘉园12号楼底商（华清嘉园东门向北30米）",
	// 			"storeNum": 6,
	// 			"content": "<h3>有效日期</h3><p>2016.4.27 至 2016.10.26（周末、法定节假日通用）</p><h3>使用日期</h3><p>10:00-24:00,请您提前48小时预约，预约电话：010-8424-3309。（仅限东直门店自取）</p><h3>使用规则</h3><p>提前48小时预约，电话：010-8424-3309</p><p>每张美团券建议4至6人使用</p><p>店内无包间</p><p>仅限餐前外带，提供免费打包服务</p><p>亲爱的顾客，为了让您有更好的户外烧烤体验，请仔细阅读以下须知：一、我们将免费为您提供户外烧烤用具（需付押金）、烧烤酱料及餐巾抽纸。二、客户自愿交付 200 元押金（含不锈钢烧烤炉及不锈钢夹子各一套），归还上述所使用工具时退还全部押金。三、如需串亭专业烤师为您主理烤制，烤师费用标准为 200 元/日/次/人，烤师的食宿与交通由客户提供安排。四、客户购买食品和需返还的烧烤用具数量请在店内（仅限东直门店）进行确认。五、请您按需购买食品及辅助材料，以避免浪费。六、请您提前48小时预约，预约电话：010-8424-3309。团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商</p><p>停车位收费标准：详情咨询商家</p>"
	// 		})
	// })
})





// 引入express
// let express = require('express');
// 引入ejs
// let ejs = require('ejs');
// // 引入path
// let path = require('path');
// 引入http
// let http = require('http');
// 引入https
// let https = require('https');
// 引入fs
// let fs = require('fs');


// 创建express应用
// let app = express();

// // ejs插值语法的标志
// ejs.delimiter = '$';
// // 设置模板
// app.set('view engine', 'ejs')
// // 拓展名
// app.engine('.html', ejs.__express);

// // 静态化
// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
// // logo静态化
// app.use('/favicon.ico', express.static(path.join(process.cwd(), './favicon.ico')))
// // 定义模拟数据的方式（mock数据）
// // 继续添加中间件
// app.use('/data/', (req, res, next) => {
// 	// console.log(req.url)
// 	// 添加后缀名
// 	// req.url += '.json';
// 	// req.url = req.url.replace('?', '.json?')
// 	// 将字符串，根据？切割成数组
// 	let arr = req.url.split('?')
// 	// 第一个成员添加.json
// 	arr[0] += '.json';
// 	// 数组拼接成字符串
// 	req.url = arr.join('?')
// 	// console.log(req.url)
// 	next();
// }, express.static(path.join(process.cwd(), '/static/data/')))
// // 数据接口
// // app.get('/data/home', (req, res) => {
// // 	res.json({ msg: 'success' })
// // })

// 请求
// app.get('/', (req, res) => {
// 	// 渲染页面
// 	res.render('home.html', {
// 		// 渲染数据
// 		title: '爱创课堂'
// 	})
// })
// 定义路由的第二种方式
// 路由中间件的方式
// let router = new express.Router();
// // 定义方法
// let home = (req, res) => {
// 	// 渲染页面
// 	res.render('home.html', {
// 		// 渲染数据
// 		title: '爱创课堂'
// 	})
// }
// // 配置规则
// router.get('/', home)
// // 安装路由中间件
// app.use(router)




// // 配置端口号
// let HTTP_PORT = 3000;
// let HTTPS_PORT = 3001;

// // 读取秘钥文件
// let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
// let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// // 启动服务
// http.createServer(app).listen(HTTP_PORT, res => console.log('http server listen at ' + HTTP_PORT))
// https.createServer({ key, cert }, app).listen(HTTPS_PORT, res => console.log('https server listen at ' + HTTPS_PORT))
