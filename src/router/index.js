import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'首页',
            component:()=>import('../views/index.vue'),
        },
    ]
});

export default router;