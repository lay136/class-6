const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()
const listener1 = ()=>{
    console.log('execute test fn1...');
}
const listener2 = ()=>{
    console.log('execute test fn2...');
}
// emitter.emit('listener')
emitter.on('test',listener1)//添加监听事件1
emitter.on('test',listener2)//添加监听事件2

// console.log(emitter.removeListener == emitter.off);//true

/*移除方法1：emitter.removeListener(eventName, listener)
emitter.removeListener('test',listener1)//移除事件1
emitter.removeListener('test',listener2)//移除事件2
*/

/*移除方法2：emitter.off(eventName, listener)
emitter.off('test',listener1)
emitter.off('test',listener2)
*/
//emitter.removeListener和emitter.off是同一个方法
emitter.emit('test')//打印结果








