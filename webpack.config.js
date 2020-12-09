const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    mode:'development',
    entry: {
      index:path.resolve(__dirname,'src/js/index.js'),//首页
      detail:path.resolve(__dirname,'src/js/detail.js'),//详情
      collections:path.resolve(__dirname,'src/js/collections.js')//收藏
    },
    devtool:'source-map',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:path.resolve(__dirname,'node_module'),//排除node_module下的js文件
                query:{
                    "presets":["latest"]//高级语法转低级
                }
            },
            {
                test:/\.tpl$/,
                use:[{
                    loader:'ejs-loader',
                    options: {
                        esModule: false,
                      }
                }]
            },//ejs-loader可以把文件解析成一个函数，
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'                  
                ]
            },
            //这个不管用，可能是因为版本冲突
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader'
                    ,
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:function(){
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg|ico|woff|eot|ttf)$/, //图片，文字
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'img/[name]-[hash:16].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        watchOptions:{
            ignored:/node_modules/
        },
        open:true,
        host:'localhost',
        port:3000,
    
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:path.resolve(__dirname,'src/index.html'),
           filename:'index.html',
           title:'新闻头条',
           chunks:['index'],
           chunksSortMode:'manual',//按数组顺序来排
           hash:true,
           minify:{
               removeComments:true,
               collapseWhitespace:true
           },//去掉空格和换行
           excludeChunks:['node_modules']
       }),
       new HtmlWebpackPlugin({
           template:path.resolve(__dirname,"src/detail.html"),
           filename:'detail.html',
           title:"新闻详情",
           chunks:['detail'],
           chunksSortMode:'manual',
           hash:true,
           minify:{
               removeComments:true,
               collapseWhitespace:true
           },//去掉空格和换行
           excludeChunks:['node_modules']
       }),
       new HtmlWebpackPlugin({
           template:path.resolve(__dirname,'src/collections.html'),
           filename:'collections.html',
           title:"收藏",
           chunks:['collections'],
           chunksSortMode:'manual',
           hash:true,
           minify:{
               removeComments:true,
               collapseWhitespace:true
           },//去掉空格和换行
           excludeChunks:['node_modules']
       })
    ]
}