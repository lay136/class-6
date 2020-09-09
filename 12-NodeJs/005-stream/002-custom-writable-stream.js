const { Writable } = require('stream')//数组对象的扩展运算
//流stream是一种中处理数据的抽象接口,是将数据分割成一段一段的来处理,提高效率
//流可以是可读的、可写的、或是可读写的,所有的流都是 EventEmitter 的实例


// console.log(Writable);
/*
const writer = new Writable()
writer.write('hello') //The _write() method is not implemented
*/

class CustomWriter extends Writable{
    _write(chunk, encoding, callback){
        console.log('chunk::',chunk.toString());
        console.log('encoding::',encoding);
        callback && callback()
    }
}

const writer = new CustomWriter()
/*
writer.on('finish',()=>{
    console.log('write done....');
})
*/
writer.write('hello','',()=>{
    console.log('after write hello');
})
writer.write('good')
writer.end('yes')

