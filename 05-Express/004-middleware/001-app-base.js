const express = require('express')
const app = express()
const port = 3000

//处理静态方法
app.use(express.static('public'))

app.use((req,res,next)=>{
    console.log('do something for task A');
    // res.send('taks A done')
    next()
})
app.use((req,res,next)=>{
    console.log('do something for task B');
    next()
})

app.get('/',(req,res)=>{res.send('get response data')})

app.listen(port, () => console.log(`app listening on port ${port}!`));