const path = require('path')

module.exports = {
    //指定环境
    mode:'development', // mode:'development production',
    //入口文件
    entry: './src/index.js',
    //出口文件
    output: {
        //「入口分块(entry chunk)」的文件名模板
        filename: 'bundle.js',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    }    
}