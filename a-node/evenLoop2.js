console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    setTimeout(function() {
        console.log('timeout1_timeout');
        new Promise(function(resolve) {
            console.log('timeout1_timeout_promise');
            resolve();
        }).then(function() {
            console.log('timeout1_timeout_then')
        })
        process.nextTick(function() {
            console.log('timeout1_timeout_nextTick');
        })
    })
})

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})


new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})
process.nextTick(function() {
    console.log('glob1_nextTick');
})
setTimeout(function() {
    console.log('timeout2');
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })
    process.nextTick(function() {
        console.log('timeout2_nextTick');
    })
    setTimeout(function() {
        console.log('timeout2_timeout');
        new Promise(function(resolve) {
            console.log('timeout2_timeout_promise');
            resolve();
        }).then(function() {
            console.log('timeout2_timeout_then')
        })
        process.nextTick(function() {
            console.log('timeout2_timeout_nextTick');
        })
    
    })

})


new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})
process.nextTick(function() {
    console.log('glob2_nextTick');
})

setImmediate(function() {
    console.log('immediate2');
    process.nextTick(function() {
        console.log('immediate2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function() {
        console.log('immediate2_then')
    })
})