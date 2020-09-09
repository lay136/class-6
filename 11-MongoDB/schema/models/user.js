const mongoose = require('mongoose')

//1.定义Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true],
        // minlength:[4,"用户名最小长度为4个字符"],
        minlength:[4],

        maxlength:[8]
    },
    age:{
        type:Number,
        min:[18],
        max:[100]
    },
    major:{
        type:String,
        enum:["Art","Sport","Computer"]
    },
    phone:{
        type:String,
        validate:{
            validator:function(val){
                return /1[358]\d{9}/.test(val)    
            },
            message:'{VALUE}'
        }
    }
   
})
//注意:要用到调用时的对象,所以不能用箭头函数
UserSchema.methods.findBlogs = function(cb){
   
    this.model('blog').find({author:this._id},cb)
}
//注意:因为需要用到调用时的对象,所以不能用箭头函数
UserSchema.statics.findByPhone = function(val,cb){
    //console.log(this)// UserModel
    //console.log(this.model('user') == this)//true
    this.findOne({phone:val},cb)
}




//2.根据Schema定义数据模型
//2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel