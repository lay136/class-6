const express = require('express')
const app = express()
const port = 3000

//处理静态方法
app.use(express.static('public'))



///	HANDLER 
//	处理路由   使用多个回调函数处理路由需要指定next
app.all("/",(req,res,next)=>{
    console.log('do something...');
    next()
})

app.get('/', (req, res,next) => {
    console.log('do something for get request...');
    next()
},(req,res)=>{
   res.send('get response data!');//发送数据
})

app.post('/', (req, res) => res.send('post response data!'))
app.put('/', (req, res) => res.send('put response data!'))
app.delete('/', (req, res) => res.send('delete response data!'))

app.listen(port, () => console.log(`app listening on port ${port}!`));