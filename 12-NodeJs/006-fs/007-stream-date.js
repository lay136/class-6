const fs = require('fs')
// 复制大文件,分成小块进行读写

/*
可可读流、写流复制文件
const rs = fs.createReadStream('a.mp4')
const ws = fs.createWriteStream('b.mp4')
rs.pipe(ws)
*/



/*
//可读流复制文件的过程
const rs = fs.createReadStream('a.mp4')
rs.on('open',()=>{
    console.log('read stream open...')
})
rs.on('close',()=>{
    console.log('read stream close..')
})
rs.on('end',()=>{
    console.log('read stream end')
})
rs.on('data',(chunk)=>{
    console.log('chunk:',chunk)
})
*/

