
function Promise1(resolver){
    if(resolver&&typeof resolver!='function'){
        throw new Error('Promise resolver error')
    }
    this.state="PENDING";
    this.data=undefined;
    this.callbackQueue=[];
    if(resolver)executeResolver.call(this,resolver);
}
Promise1.prototype.then=function(){}

// new Promise(function(resolve,reject){...})
// 异步操作：成功执行resolve(),失败执行reject()
function executeResolver(resolver){
    var called=false,_this=this;
    function onError(value){
        if(called){
            return;
        }
        called=true;
        executeCallback.bind(_this)('reject',value);
    }
    function onSuccess(value){
        if(called){
            return;
        }
        called=true;
        executeCallback.bind(_this)('resolve',value);
    }
    try {
        //再调用onSuccess\onError是发生错误，则将状态改为reject
        resolver(onSuccess,onError);
    } catch (error) {
        onError(error);
    }
}

//resolve()reject()主要是更改当前实例的状态，然后执行当前实例的then()注册的成功、失败回调
function executeCallback(type,x){
    var isResolve=type==='resolve',thenable;
    if(isResolve&&(typeof x==='object'|| typeof x==='function')){
        try {
            thenable=getThen(x);
        } catch (error) {
            return executeCallback.bind(this)('reject',error);
        }
    }
    if(isResolve&&thenable){
        executeResolver.bind(this)(thenable);
    }else{
        this.state=isResolve?"RESOLVED":"REJECTED";
        this.data=x;
        this.callbackQueue&&this.callbackQueue.length&&this.callbackQueue.forEach(element => {
            element[type](x);
        });
    }
}


function getUrl(url){
    return new Promise((resolve,reject)=>{
        let req=new XMLHttpRequest();
        req.open('GET',url,true);
        req.onload=()=>{
            if(req.status===200){
                resolve(req.responseText);
            }else{
                reject(new Error(req.statusText));
            }
        };
        req.onerror=()=>{
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var URL='http://xxx/xx';
getUrl(URL).then((value)=>{
    console.log(value);
}).catch(()=>{
    console.error(error);
})