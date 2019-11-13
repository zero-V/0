// 引入path
let path = require('path');
// 引入http
let http = require('http');
// 引入https
let https = require('https');
// 引入fs
let fs = require('fs');
// 配置端口号
let { HTTP_PORT, HTTPS_PORT } = require('../consts')
// let HTTP_PORT = 3000;
// let HTTPS_PORT = 3001;

// 读取秘钥文件
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), './ssl/file.crt'));

// 定义接口方法
module.exports = (app) => {
	// console.log(process.argv, process.argv[2], process.argv[3])
	// 定义端口号
	let httpProt = process.argv[2] || HTTP_PORT;
	let httpsPort = process.argv[3] || (process.argv[2] && +process.argv[2] + 1) || HTTPS_PORT
	// 启动服务
	http.createServer(app).listen(httpProt, res => console.log('http server listen at ' + httpProt))
	https.createServer({ key, cert }, app).listen(httpsPort, res => console.log('https server listen at ' + httpsPort))
}
