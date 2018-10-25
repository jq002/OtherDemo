
// var data={name:'kk'};
// observe(data);
// data.name='jq';
function observe(data){
    if(!data||typeof data !=='object'){
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    })
}
function defineReactive(data,key,val){
    var dep=new Dep();
    observe(val);
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:false,
        get:function(){
            Dep.target;
            return val;
        },
        set:function(newVal){
            console.log('监听到数据变化',val,'-->',newVal);
            val=newVal;
            dep.notify();
        }
    })
}
Watcher.prototype={
    
}
//调度中心
function Dep(){
    this.subs=[]
}
Dep.prototype={
    addSub:function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}