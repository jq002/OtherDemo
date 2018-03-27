const Foo = {
    template: '<div> id:{{$route.params.id}}</div>'
};
const Bar = {
    template: '<div> bar content<router-view></router-view></div>'
};
const Profile = {
    template: '<div> profile content</div>'
};
const Your = {
    template: '<div> your content</div>'
};
const routes = [{
        path: '/foo/:id',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar,
        children: [{
            path: 'profile',
            component:Profile
        },{
            path:'your',
            component:Your

        }]
    },
];
const router = new VueRouter({
    routes
});
const app = new Vue({
    router
}).$mount('#app');