setTimeout(function() {
    // 应该是这里执行前开始渲染ui，试试用alert阻塞下。
    alert(' ui 已经渲染完毕了吗？ ');
    console.log('timeout1');
})

new Promise(function(resolve) {
    console.log('promise1');
    for(var i = 0; i < 1000; i++) {
        i == 99 && resolve();
    }
    console.log('promise2');
}).then(function() {
    console.log('then1');
    alert(' ui 开始渲染 ');
})

console.log('global1');

div.innerHTML = 'end';