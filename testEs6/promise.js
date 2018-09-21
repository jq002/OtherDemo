
var p=Promise.resolve(42);
var p2=Promise.reject("Oops").defer();

// p.then(function fulfilled(msg){
//     console.log(msg.toLowerCase())
// }).catch(function handerError(err){
//     console.log(err);
// })

p.then(function fulfilled(){
    return p2;
})