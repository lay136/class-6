const http = require('http');
const hostname = '127.0.0.1';
const port = '3000';

//每一次的请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
    res.statuCode = 200;
    res.setHeader('Content-Type','text/plain');
    //req request 可读流
    //res response 可写流
    // res.write('hello world !')
    res.end('good');
});


	server.listen(port,hostname,()=>{
// server.listen(3000,'127.0.0.1',()=>{
    console.log('server running at http://${hostname}:${port}/');
})

