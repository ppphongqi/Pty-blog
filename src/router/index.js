import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: resolve => require(['../views/out.vue'],resolve),
            children:[
                {
                    path:'/',
                    name:'首页',
                    component:resolve => require(['../views/index.vue'],resolve),
                    meta:{
                        title:'首页'
                    }
                },
            ]
        },
    ]
});

export default router;