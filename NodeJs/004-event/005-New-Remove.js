const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{}
const emitter = new CustomEmitter()
emitter.on('newListener',(enventName,cb)=>{
    console.log('execute newListener fn..');
    console.log('enventName:',enventName);
    cb()
})

//emitter.emit('newListener')
emitter.on('test1',()=>{
    console.log('execute test1 fn..');
})
emitter.on('test2',()=>{
    console.log('execute test2 fn..');
})