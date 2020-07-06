const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}
const emitter = new CustomEmitter()
// console.log(emitter);

/*
//一个EventEmitter对象默认最大可以有10个监听
可以通过emitter.setMaxListeners(n)来设置最大监听数
//1. 用on
emitter.on('test',()=>{
    console.log('execute test fn1...');
})

//2. 用addListener
emitter.addListener('test',()=>{
    console.log('execute test fn2...');
})

emitter.emit('test')
emitter.emit('test')
emitter.emit('test')
*/

/*
//3. 用once   emitter.once(eventName, listener)
emitter.once('test',()=>{
    console.log('execute test fn3...');
})//只打印执行一次
emitter.emit('test')
emitter.emit('test')
*/




//emitter.addListener和emitter.on(eventName, listener)是同一个方法
//console.log(emitter.on == emitter.addListener);//true
emitter.setMaxListeners(11)

emitter.on('test',()=>{
    console.log('execute test fn1...');
})
emitter.on('test',()=>{
    console.log('execute test fn2...');
})
emitter.on('test',()=>{
    console.log('execute test fn3...');
})
emitter.on('test',()=>{
    console.log('execute test fn4...');
})
emitter.on('test',()=>{
    console.log('execute test fn5...');
})
emitter.on('test',()=>{
    console.log('execute test fn6...');
})
emitter.on('test',()=>{
    console.log('execute test fn7...');
})
emitter.on('test',()=>{
    console.log('execute test fn8...');
})
emitter.on('test',()=>{
    console.log('execute test fn9...');
})
emitter.on('test',()=>{
    console.log('execute test fn10...');
})
emitter.on('test',()=>{
    console.log('execute test fn11...');
})
emitter.emit('test')







