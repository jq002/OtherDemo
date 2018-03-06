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
cnpm i --save-dev webpack-dev-server
#### clean-webpack-plugin 清除文件
#### 模块热替换（不刷新网页更新修改的内容）
webpack-dev-server --hot(待研究，分离css插件先关掉)
### 开发运行
npm run dev

