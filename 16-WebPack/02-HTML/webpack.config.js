const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //入口
    /*
    entry: './src/index.js',
    entry: {main:'./src/index.js'},
    */
    //多入口
    entry:{
        common:'./src/page/commit/index.js',
        index:'./src/page/index/index.js',
    },
    //出口
    output: {
        //「入口分块(entry chunk)」的文件名模板
        // filename: 'bundle.js',
        // filename: '[name]-[chunkhash]-bundle.js',
        filename: '[name]-[hash]-bundle.js',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //处理css文件
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            //处理图片
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 400
                        }
                    }
                ]
            }        
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:'./src/view/index.html',//模板文件
            filename:'index.html',//输出的文件名
            //inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash:true,//给生成的js/css文件添加一个唯一的hash
            chunks:['common','index']

        })
    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:8080,//指定服务端口
    },  


}










/*
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
    module:{
        rules: [
            //处理css
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            //处理图片 
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                        {
                        loader: 'url-loader',
                            options: {
                            limit: 10
                        }
                    }
                ]
            }          
        ]
    }
}
*/