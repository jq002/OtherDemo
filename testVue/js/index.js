var app=new Vue({
    el:"#app",
    data:{
        message:'hello world'
    }
});
var app2=new Vue({
    el:"#app2",
    data:{
        message:'鼠标悬停'
    }
});
var app3=new Vue({
    el:"#app3",
    data:{
        todos:[
            {txt:'6:00起床'},
            {txt:'8:00洗漱'},
            {txt:'8:30出门'}
        ]
    }
});
var app4=new Vue({
    el:"#computed",
    data:{
        message:'hello'
    },
    computed:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('');
        }
    }
});
var app5=new Vue({
    el:"#app5",
    data:{
        isActive:false,
        hasError:true,
        styleObject:{
            fontSize:'20px',
            color:'green'
        },
        loginType:true,
        inputValue:'',
        checked:[]
    },
    methods:{
        onClickBtn:function(){
            this.loginType=!this.loginType;

        }

    }
});
Vue.component('child',{
    props:['message'],
    template:'<span>{{message}}</span>'
});
var app6=new Vue({
    el:"#app6",
    data:{
        parentMsg:''
    }
});