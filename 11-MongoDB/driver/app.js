//引入mongoose
const mongoose = require('mongoose');
//连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/gu',{userNewurlParser:true,useUnifiedTopology:true});//警告信息处理

const db = mongoose.connection;
db.on('error',(err)=>{
    console.log('connect mongodb err::',err);
    throw err;
});
db.once('open',function(){
    console.log('connect mongodb success !!');
})









