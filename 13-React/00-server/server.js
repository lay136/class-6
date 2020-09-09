const http = require('http')


const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")//设置请求头
    res.end(JSON.stringify(["learn JavaScript",'learn React','learn MongoDB','learn Html']))
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running on http://127.0.0.1:3000')
})