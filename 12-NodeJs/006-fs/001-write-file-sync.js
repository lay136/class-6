//同步读写文件
const fs = require('fs')
const util = require('util')

/*
//逐步操作
//1.打开文件
	const fd = fs.openSync('./01.txt','a')
//1.写入文件
	fs.writeSync(fd,'hello world !')
//1.关闭文件
	fs.closeSync(fd)
*/



//合并操作
	fs.writeFileSync('./01.txt','hello world !',{flag:'a'})

	


	



