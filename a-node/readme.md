
### evenLoop1.js
```
<!-- nodejs -->
golb1
glob1_promise
glob2_promise
glob1_nextTick
glob2_nextTick
glob1_then
glob2_then
timeout1
timeout1_promise
timeout2
timeout2_promise
timeout1_nextTick
timeout2_nextTick
timeout1_then
timeout2_then
immediate1
immediate1_promise
immediate2
immediate2_promise
immediate1_nextTick
immediate2_nextTick
immediate1_then
immediate2_then
```
loop1在浏览器上运行不同
```
<!-- nodejs -->
golb1
glob1_promise
glob2_promise
glob1_then
glob2_then
timeout1
timeout1_promise
timeout2
timeout2_promise
timeout1_then
timeout2_then
```

```
<!-- 浏览器 -->
golb1
VM1091:33 glob1_promise
VM1091:56 glob2_promise
VM1091:36 glob1_then
VM1091:59 glob2_then
Promise {<resolved>: undefined}
VM1091:4 timeout1
VM1091:9 timeout1_promise
VM1091:12 timeout1_then
VM1091:40 timeout2
VM1091:45 timeout2_promise
VM1091:48 timeout2_then
```
#### loop2和loop1对比
node.js先执行同一个宏任务源的任务队列的所有任务，再执行微任务。（浏览器不是的）

先执行nextTick队列后执行Promise队列，同一个事件循环与代码前后书写无关。


- [x] [深入浅出Javascript事件循环机制(上)](https://zhuanlan.zhihu.com/p/26229293)
- [x] [前端基础进阶（十二）：深入核心，详解事件循环机制](https://www.jianshu.com/p/12b9f73c5a4f)
- [x] [Javascript事件循环机制以及渲染引擎何时渲染UI](https://segmentfault.com/a/1190000013212944)
