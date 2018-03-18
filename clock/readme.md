

### canvas画时钟

### bug
- 1.canvas标签没有设置width，height属性，初始宽高为300*150;使用css设置的宽高在绘图时会按照比例缩放，（css与初始画布比例不一致时）导致图片变形
- 2.javaScript脚本的执行顺序；当HTML解析器遇到script标签时，默认先执行脚本（src属性的脚本，等待其下载执行完毕），在解析渲染HTML文档；除非在script标签里使用defer属性（下载时继续解析渲染HTML，延迟，文档解析完毕时执行）async属性（下载后立即执行，下载不会阻塞解析HTML）