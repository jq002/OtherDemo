//js允许调用函数不传入所有参数

//es5以及之前版本，给函数赋默认值
//有瑕疵
function makeRequest(url, timeout, callback) {
    timeout = timeout || 2000;
    callback = callback || function () { };
}
//为了简单的功能，代码太多
function makeRequest2(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback : function () { };
}
//es6写法
function makeRequest3(url, timeout = 2000, callback = function () { }) { }
makeRequest3('/foo') //使用默认值
makeRequest3('/foo', undefined) //使用默认值
makeRequest3('/foo', null) //不使用默认值

//arguments对象

function mixArgs(first, second) {
    console.log(arguments[0]); //a
    console.log(arguments[1]); //b
    first = "c";
    second = "d";
    console.log(arguments[0]); //c
    console.log(arguments[1]); //d
}
mixArgs("a", "b");

function mixArgs2(first, second) {
    "use strict";
    console.log(arguments[0]); //a
    console.log(arguments[1]); //b
    first = "c";
    second = "d"
    console.log(arguments[0]); //a
    console.log(arguments[1]); //b
}
mixArgs2("a", "b");

// 非严格模式,es6默认传参，会使得arguments对象对该命名参数解绑，和严格模式一样的效果。
function mixArgs3(first, second = "b") {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    first = "c";
    second = "d"
    console.log(arguments[0]);
    console.log(arguments[1]);
}
mixArgs3("a");

"use strict";
if (true) {
    console.log(typeof doSomething);
    function doSomething() {
    }
    doSomething();
}
console.log(typeof doSomething);

"use strict";
if (true) {
    console.log(typeof doSomething); // 抛出错误
    let doSomething = function () {
        // ...
    }
    doSomething();
}
console.log(typeof doSomething);

//测试尾部调用优化

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        // 未优化 - 尾调用函数值有乘法运算
        return n * factorial(n - 1);
    }
}
(function () {
    var start = new Date().valueOf();
    factorial(100000);
    var end = new Date().valueOf();
    console.log(end - start);

})()

    (function () {
        "use strict"
        function factorial(n, p = 1) {
            if (n <= 1) {
                return 1 * p;
            } else {
                let result = n * p;
                // 优化
                return factorial(n - 1, result);
            }
        }
        var start = new Date().valueOf();
        factorial(100);
        var end = new Date().valueOf();
        console.log(end - start);

    })()