
function Observer(){
    this.fns=[];
}

Observer.prototype={
    subscribe:function(fn){
        this.fns.push(fn);
    },
    unsubscribe:function(fn){
        this.fns=this.fns.filter(function(el){
            if(el!==fn){
                return el;
            }
        })
    },
    //相当于发布事件
    update:function(o,thisObj){
        var scope=thisObj||window;
        this.fns.forEach(
            function(el){
                el.call(scope,o);
            }
        )
    }
}

var o=new Observer;
var f1=function(data){
    console.log('订阅者1，知道了: '+data);
}
var f2=function(data){
    console.log('订阅者2，知道了: '+data);
}
o.subscribe(f1);
o.subscribe(f2);

o.update('领导来啦');
o.unsubscribe(f1);
o.update('领导走了');