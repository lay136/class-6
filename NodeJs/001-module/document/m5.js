//定义模块
console.log('in m5...');
const str = 'hello'

const fn = ()=>{
    console.log('fn...');
}

const obj = {
    name:'Tom',
    age:18
}

/*
console.log(exports);
console.log(module.exports);
console.log(module.exports == exports);
*/

/*
exports.str = str
exports.fn = fn
exports.obj = obj
*/

/*
module.exports.str = str
module.exports.fn = fn
module.exports.obj = obj
*/

/*
exports = {
    str,
    fn,
    obj
}
*/


//exports对象和module.exports对象是同一个对象
//导出的始终是module.exports指向的对象
module.exports = {
    str,
    fn,
    obj
}


/*1.module.exports对象可以赋值一个对象来导出值
    如果module.exports被赋值一个对象,则exports对象的值就不会被导出
  2.可以在module.exports对象或者exports对象上添加属性来导出值
*/


/*
exports.str = str
module.exports = {
    fn,
    obj
}
*/
