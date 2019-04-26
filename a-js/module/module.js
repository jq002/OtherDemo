
var baseModule=(function(){
    var basket=[];
    function doSomething(){}
    return{
        addItem:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        },
        getTotal:function(){
            var str=basket.join('')
            return 'total:'+this.getItemCount()+':'+str;
        }
    }

})()

baseModule.getOtherTotal=function(){
    var str=basket.join('')
    return 'othertotal:'+this.getItemCount()+':'+str;
}