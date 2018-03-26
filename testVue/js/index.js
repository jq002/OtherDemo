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
//插槽
Vue.component('anchored-heading', {
    template: '#anchored-heading-template',
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })
  
  var app7=new Vue({
    el:"#app7",
    data:{
        items:[{i:1},{i:2},{i:3}]
    }
});
//渲染函数render
Vue.component('anchored-heading-2', {
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // tag name 标签名称
        this.$slots.default // 子组件中的阵列
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  });
  var app8=new Vue({
    el:"#app8",
    data:{
        items:[{i:1},{i:2},{i:3},{i:4},{i:5}]
    }
});