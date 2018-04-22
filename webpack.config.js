
//当期路径
const path = require("path");
//自动创建html文件插件
const HtmlWebpackPlugin  = require("html-webpack-plugin");
//自动清除打包文件下的文件插件
const CleanWebpackPlugin  = require("clean-webpack-plugin");
//压缩文件插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//提取分离成独立的css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //入口文件
    entry :{
        index : './src/app.js'
    } ,
    //打包配置
    output:{
        path:path.resolve(__dirname,'dist/'),
        //入口文件名
        filename:'assets/js/[name].bundle.js',
        //非入口文件名
        chunkFilename: 'assets/js/[name].bundle.js',  
        //所有资源的基础路径.必须要/结尾
        publicPath:'/'
    },
    //相关插件
    plugins:[
        //简化html的创建
        new HtmlWebpackPlugin({
            filename:"index.html",
            //指定需要的根html
            template : 'src/index.html',
        }),
        //参数，清除那个文件
        new CleanWebpackPlugin(['dist']),
         new UglifyJsPlugin(),
         //生成的css文件名
         new ExtractTextPlugin('styles.css')
    ],
    //预处理
    module : {
        rules : [
            //处理react
            {
                //匹配规则  
                test : /\.js$/,
                //使用什么处理器
                use  : [
                        {
                            loader : "babel-loader",
                            /**
                             * babel配置
                             */
                        }   
                    ],
                 //排除掉不需要兼容的模块
                exclude :[
                        path.resolve(__dirname,'node_modules'),
                    ]
            },
            //处理css
            {
                test : /\.css$/,
                /**
                 * style-loader-----》把css插入到页面中
                 * css-loader ------》出来css
                 */
                // use  : ['style-loader',{
                //             loader : 'css-loader',
                //             options : {
                //                 //是否开启模块化
                //                 module : true, 
                //                 //默认值hash:base64
                //                 //配置模块化后的css类名---语义化
                //                 //[path]-[name]-[local]-[hash:base64]
                //                 localIdentName : '[path]-[name]-[local]_[hash:base64:6]'                               
                //             }
                //         }
                //     ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                            loader : 'css-loader',
                            options:{
                                //是否开启模块化
                                module : true, 
                                //默认值hash:base64
                                //配置模块化后的css类名---语义化
                                //[path]-[name]-[local]-[hash:base64]
                                localIdentName : '[path]-[name]-[local]_[hash:base64:6]'                
                            }
                        }
                    }),
                //排除掉不需要模块化的css
                exclude :[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },
            {
                test : /\.css$/,
                /**
                 * style-loader-----》把css插入到页面中
                 * css-loader ------》出来css
                 */
                // use  : ['style-loader','css-loader'],
                //需要解析的css
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                    }),
                include: [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common'),
                ]
            },
            //处理sass
            {
                test : /\.scss/,
                // use  : ['style-loader',{
                //     loader : 'css-loader',
                //     options:{
                //         //是否开启模块化
                //         module : true, 
                //         //默认值hash:base64
                //         //配置模块化后的css类名---语义化
                //         //[path]-[name]-[local]-[hash:base64]
                //         localIdentName : '[path]-[name]-[local]_[hash:base64:6]'                
                //     }
                // },'sass-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                            loader : 'css-loader',
                            options:{
                                //是否开启模块化
                                module : true, 
                                //默认值hash:base64
                                //配置模块化后的css类名---语义化
                                //[path]-[name]-[local]-[hash:base64]
                                localIdentName : '[path]-[name]-[local]_[hash:base64:6]'                
                            }
                        }
                    })
            },
            //处理图片
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use : [{
                    //默认使用base64格式
                    loader : 'url-loader',
                    options : {
                        //1000约等于1kb
                        //编码边界
                        //超过边界使用打包
                        limit: 100000,
                        name : 'assets/img/[name]_[hash:8].[ext]'
                    }
                }]
            },
            //处理字体
            {   
                /**
                 * ../fonts/fontawesome-webfont.eot?v=4.7.0
                 * webpack会自动忽略掉?后面的查询字符串
                 */
                test : /\.(ttf|woff|woff2|eot|svg|otf)/,
                use  :{
                    loader :  'file-loader',
                    options :{
                        //默认文件名/[name]_[hash:8].[ext]
                        name : 'assets/fonts/[name]_[hash:8].[ext]'
                    }
                }
            }
        ]
    },
    //服务器配置---->打包到内存
    devServer : {
        //自动打开页面
        open: true, 
        //监听那个端口    
        port: 9000,
        contentBase :　'./src/common',
        //服务器打包资源后的输出路径
        publicPath  : '/'
    }
};  
