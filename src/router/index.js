import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'首页',
            component : () => import('../views/out.vue')
            // children:[
            //     {
            //         path:'/',
            //         name:'首页',
            //         component: resolve => require(['../views/index.vue'] , resolve),
            //         metaP:{
            //             title:'首页'
            //         }
            //     }
            // ]
        }
    ]
});

export default router;