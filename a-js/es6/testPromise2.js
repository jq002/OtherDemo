let Promise=require('./promise2');

let promise1=new Promise(function(resolve){
    resolve('promise1');
})
promise1.then((data)=>{
    console.log(data,' success1');
    return data;
}).then(data=>{
    console.log(data,' success2');
})
console.log('promise end1');

// setTimeout(()=>{
//     promise1.then((data)=>{
//         console.log(data,' success2');
//     })
//     console.log('promise end2');
// },0)

