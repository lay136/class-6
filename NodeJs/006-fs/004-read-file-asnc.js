const fs = require('fs')
const util = require('util')

//2.异步
//逐步操作

/*
//1.打开文件
fs.open('01.txt','r',(err,fd)=>{//./当前文件夹可不写
    if(err){
        console.log('open file err:',err);
    }else{
        //2.读出文件内容
        const buf = Buffer.alloc(100)
        fs.read(fd,buf,0,50,0,(err)=>{
        //read[文件名,缓冲区数据将被写入,buffer写入的偏移量,指定文件读取字节数长度,指定文件读取的起始位置]
            if(err){
                console.log('read file err:',err);
            }else{
                console.log(buf);
                //3.关闭文件
                // fs.close(fd,err=>{//也可以写道else里面的
                //     if(err){
                //         console.log('close file error:',err);
                //     }else{
                //         console.log('close file success');
                //     }                
                // })
                
            }
            //3.关闭文件
            fs.close(fd,err=>{
                if(err){
                    console.log('close file error:',err);
                }else{
                    console.log('close file success');
                }                
            })            
        })
    }
})
*/