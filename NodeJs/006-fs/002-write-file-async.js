const fs = require('fs')
const util = require('util')
//2.异步
// 逐步操作
//1 打开文件
fs.open('./01.txt','w',(err,fd)=>{
    if(err){
        console.log('open file error:',err);
    }else{
        //2 写入文件
        // console.log(fd)
        fs.write(fd,'Hi 小辉',(err)=>{
            if(err){
                console.log('write file error:',err);
            }else{
                console.log('write file success');
            }
            //3 关闭文件
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
