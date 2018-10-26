
var pubsub={};//没有写分号，导致立即执行函数报错
//保存了发布的事件和订阅者
(function(q){
    var topics={};
    var subUid=-1;
    //发布的方法；topic要发布的事件,args发布的事件的相关信息
    q.publish=function(topic ,args){
        if(!topics[topic]){
            return false;//该事件没有人订阅
        }
        var subscribers=topics[topic];//存储订阅者的数组
        var len=subscribers? subscribers.length:0;
        while(len--){
            subscribers[len].func(topic,args);//通过回调来，通知订阅者
        }
        return true;
    };
    //订阅的方法;你要订阅的事件topic，怎么通知你：回调函数func
    q.subscribe=function(topic,func){
        if(!topics[topic]){
            topics[topic]=[];
        }
        var token=(++subUid).toString();
        topics[topic].push({
            token:token,
            func:func
        });
        return token;
    }
    //退订方法
    q.unsubscribe=function(token){
        for(var m in topics){
            if(topics[m]){
                for(var i=0,j=topics[m].length;i<j;i++){
                    if(topics[m][i].token=token){
                        topics[m].splice(i,1);
                        return token;
                    }
                }
            }
        }
        return false;
    }
})(pubsub);


//订阅一个事件
var subToken=pubsub.subscribe('example1',function(topics,data){
    console.log('第一个订阅者')
    console.log(topics+':'+data);
})
pubsub.subscribe('example1',function(topics,data){
    console.log('第二个订阅者')
    console.log(topics+':'+data);
})

pubsub.publish('example1','hello word');
pubsub.publish('example1','我有发布一个 hello');
//退订
pubsub.unsubscribe(subToken);
pubsub.publish('example1','第三次发布');