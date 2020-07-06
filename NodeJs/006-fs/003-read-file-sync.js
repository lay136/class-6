const fs = require('fs')
const util = require('util')
/*
//1.同步
//逐步操作
		//1.打开文件
	const fd = fs.openSync('01.txt','r')
		//2.读出文件内容
	const buf = Buffer.alloc(100)
		// console.log(buf)
	fs.readSync(fd,buf,0,50,0)
	//readSync[文件名,缓冲区数据将被写入,buffer写入的偏移量,指定文件读取字节数长度,指定文件读取的起始位置]
		console.log(buf);//打印出读取的buf数据
		console.log(buf.toString());//将buf数据转化
		//3.关闭文件
	fs.closeSync(fd);
*/


//合并操作
//readFile()是异步的方法
//readFileSync其同步方法的版本,会产生阻塞效果,达到同步的目的
	const data = fs.readFileSync('01.txt',{encoding:'utf8',errors='strict'})
		console.log(data);
