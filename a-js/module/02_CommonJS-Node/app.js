/**
  1. 定义暴露模块:
    module.exports = value;
    exports.xxx = value;
  2. 引入模块:
    var module = require(模块名或模块路径);
 */
"use strict"
//引用模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

// let uniq = require('uniq')
let fs = require('fs')

//使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

// console.log(uniq([1, 3, 1, 4, 3]))

// fs.readFile('app.js', function (error, data) {
//   console.log(data.toString())
// })

console.log('counter:',module3.counter);
console.log('obj.counter:',module3.obj.counter);
module3.incCounter();
console.log('counter:',module3.counter);
console.log('obj.counter:',module3.obj.counter);
console.log('getCounter:',module3.getCounter());
module3.obj.counter=7;
console.log('obj.counter:',module3.obj.counter);
// console.log('obj:',module3.obj);

module3.setObjName();
console.log('obj:',module3.obj);
// console.log('obj:',module3.obj.getName());
// console.log('obj:',module3.obj);
module3.setNewObj();
console.log('obj:',module3.obj);
console.log('obj:',module3.getObj());