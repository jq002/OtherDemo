
const Foo={template:'<div> Foo content</div>'};
const Bar={template:'<div> bar content</div>'};
const routes=[
    { path:'/foo',component: Foo},
    { path:'/bar',component: Bar},
];
const router=new VueRouter({routes});
const app=new Vue({router}).$mount('#app');
