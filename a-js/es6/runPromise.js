function run(gen){
    var args=[].slice.call(arguments,1),it;
    it=gen.apply(this,args);//初始化生成器
     return Promise.resolve().then(function handleNext(value){
         var next=it.next(value);
         return (function handleResult(next){
             if(next.done){
                 return next.value;
             }else{
                 return Promise.resolve(next.value).then(handleNext,function handleErr(err){
                     return Promise.resolve(it.throw(err)).then(handleResult);
                 });
             }
         })(next);
     });
}


function foo(x,y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y
    );
}
function *main() {
    try {
        var text = yield foo( 11, 31 );
        console.log( text );
    }
    catch (err) {
        console.error( err );
    }
}
//以下等同于 run(main);
var it = main();
var p = it.next().value;
// 等待promise p决议
p.then(
    function(text){
        it.next( text );
    },
    function(err){
        it.throw( err );
    }
);
