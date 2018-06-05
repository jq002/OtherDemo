# webpack学习


#### bug
webpack升级至4，extract-text-webpack-plugin插件3.0.2会报错
解决方案:cnpm i --save-dev extract-text-webpack-plugin@next

#### 插件extract-text-webpack-plugin
分离出css文件

#### 插件html-webpack-plugin
（如果有传入）生成html文件，自动加入打包的js文件

#### 打包css，scss
cnpm i --save-dev css-loader styke-loader
cnpm i --save-dev sass-loader node-sass

#### webpack-dev-server 本地打开服务，开启浏览器
DevServer 会启动一个 HTTP 服务器用于服务网页请求，同时会帮助启动 Webpack ，并接收 Webpack 发出的文件更变信号，通过 WebSocket 协议自动刷新网页做到实时预览。


用浏览器打开这个地址你会发现页面空白错误原因是 ./dist/bundle.js 加载404了。 同时你会发现并没有文件输出到 dist 目录，原因是 DevServer 会把 Webpack 构建出的文件保存在内存中，在要访问输出的文件时，必须通过 HTTP 服务访问。 由于 DevServer 不会理会 webpack.config.js 里配置的 output.path 属性，所以要获取 bundle.js 的正确 URL 是 http://localhost:8080/bundle.js.


index.html 文件是脱离了 JavaScript 模块化系统的，所以 Webpack 不知道它的存在。
```
cnpm i --save-dev webpack-dev-server
```

The webpack-dev-server provides you with a simple web server and the ability to use live reloading(实时重载). 
This set of options is picked up by webpack-dev-server and can be used to change its behavior in various ways. 
```
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
```
If you're using dev-server through the Node.js API, the options in devServer will be ignored. Pass the options as a second parameter instead: 
```
new WebpackDevServer(compiler, {...}).

```
#### clean-webpack-plugin 清除文件

#### 模块热替换（不刷新网页更新修改的内容）
webpack-dev-server --hot(待研究，分离css插件先关掉)

### 开发运行
npm run dev

### 待研究webpack的运行模式

####插件file-loader提取图片   html-loader
cnpm i --save-dev file-loader
cnpm i --save-dev html-loader
从html里导出img标签的图片(html-loader)

###    devtool: 'source-map'
js出错后可以定位到源文件

### 'css-loader?sourceMap', 'sass-loader?sourceMap'
css出错后可以定位到源文件

