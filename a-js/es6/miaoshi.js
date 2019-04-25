
console.log('script start')

async function a1(){
    console.log('a1 start');
    await a2();
    console.log('a2 end');
}
async function a2(){
    console.log('a2')
}

a1();

Promise.resolve().then(()=>{
    console.log('promise1')
});

setTimeout(()=>{
console.log('settimeout')
},0);



let promise2=new Promise((resolve)=>{
    console.log('promise2')
    resolve('promise2.then')
});

promise2.then((res)=>{
    console.log(res);
});

console.log('script end')

['1','2','3'].map(parseInt);

