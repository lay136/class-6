//引入模板插件
const express = require('express')//安装express模板
const swig = require('swig')//安装swig模板
const app = express()
const port = 3000

//配置静态信息
app.use(express.static('public'))


//开发阶段，设置不走缓存
swig.setDefaults({
  // cache: 'memory'//走缓存
  cache:false//不走缓存
})

//配置应用模板
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile)

//配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views')


//注册模板引擎
//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/list",(req,res)=>{
    res.render("list")
})
app.get('/base',(req,res)=>{
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据    
    res.render('base',{
        title:"Lilay",
        name:"Amy",
        obj:{
            name:"Leo"
        },
        arr:["Ricy","Lucy","Amy","Andy"]
    })
})


app.listen(port, () => console.log(`app listening on port ${port}!`));