const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const emitter = new CustomEmitter()
emitter.on('test',(arg1,arg2)=>{
    console.log('get arg1:',arg1);
    console.log('get arg2:',arg2);
})
// console.log(EventEmitter);
emitter.emit('test','aa','bb')
/* const args = ['bb','cc']
emitter.emit('test',...args)//数组的扩展运算，将一个数组分开*/