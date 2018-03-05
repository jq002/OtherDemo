### 
在手机上无法播放，将es6打包

### npm run build 打包
### npm run dev开发
###
1. 打包报错webpack 打包压缩 ES6文件报错UglifyJs + Unexpected token ：name(Snowflate)
解决方案：添加.babelrc文件
2. 使用git命令时遇到 fatal: Unable to create index.lock File exists  
解决方案：在项目根目录下 .git 文件夹。找到文件夹里面的index.lock 文件，删除！即可解决问题。
     （这个大概是因为 git 一些失误操作冲突被锁住了）