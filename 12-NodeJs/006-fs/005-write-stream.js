const fs = require('fs')
const ws = fs.createWriteStream('ws.txt')

//打开可写流
ws.on('open',()=>{
    console.log('write stream open...');
})
//结束可写流
ws.on('finish',()=>{
    console.log('write data end');
})
//关闭可写流
ws.on('close',()=>{
    console.log('write stream close..');
})
ws.write('hello world !')
// ws.write('good')
ws.end()














