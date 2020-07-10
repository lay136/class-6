//引入mongoose
const mongoose = require('mongoose');

//连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/gu',{useNewUrlParser:true,useUnifiedTopology:true});//警告信息处理

//获取db对象
const db = mongoose.connection;

//连接数据库失败
db.on('error',(err)=>{
    console.log('connect mongodb err::',err);
    throw err;
});

/*
db.once('open',function(){
    console.log('connect mongodb success !!');
})
*/

db.once('open',()=>{
	    //1.定义Schema
	    const UserSchema = new mongoose.Schema({
	        name: String,
	        age:Number,
	        major:String
	    })
	    //2.根据Schema定义数据模型
	    //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
	    //2.2 model方法第二个参数指定Schema
	    const UserModel = mongoose.model('user', UserSchema);

	    //3.使用模型(CRUD)
	    /*
	    //3.1 新增
	    const user = new UserModel({name:"Amy",age:88,major:"Computer"})
	    user.save((err,doc)=>{
	        if(err){
	            console.log('save user error:',err);
	        }else{
	            console.log(doc);
	        }
	    })
	    */
	    //3.2 查找
	   	/*
	   	UserModel.find({},(err,docs)=>{
	        if(err){
	            console.log('find user error:',err);
	        }else{
	            console.log(docs);
	        }    
	   	})
	   	*/
	   	//3.3 更新
	   	//设置某一个字段的值,如果匹配到的文档有该字段则修改没有则新增
	  	UserModel.updateOne({name:"Tom"},{$set:{age:22}},(err,result)=>{
	        if(err){
	            console.log('updateOne user error:',err);
	        }else{
	            console.log(result);
	        }       
	  	})
	  	


})










