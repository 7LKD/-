import { createRouter,createWebHistory } from "vue-router";
import leader from '../views/leader.vue';

import yajay from '../components/yajay.vue';
import tryhands from '../components/tryhands.vue';
import makef from '../components/makef.vue';

import mymsg from '../components/mymsg.vue';
import register from '../components/register.vue';
import login from '../components/login.vue';
import chateach from '../components/chateach.vue';
import umsg from '../components/mfmsg/umsg.vue';
import fabu from '../views/putit/fabu.vue';
import shoucang from '../views/putit/shoucang.vue';

import tiezi from '../views/shoucangit/tiezi.vue';
import user from '../views/shoucangit/user.vue';

import test from '../views/blogsys/test.vue'
import dashboard from '../views/dashboard/Dashboard.vue';

const router =createRouter({
history: createWebHistory(),
    routes:[
        {
            path: '/leader',
            component: leader,
            redirect:'/login',
            children:[
                {
                    path:'/leader/yajay',
                    component:yajay
                },
             
                {
                    path:'/leader/tryhands',
                    component:tryhands
                },
                {
                    path:'/leader/makef',
                    component:makef,
                },
                {
                    path:'/leader/chateach',
                    component:chateach
                },
                {
                    path:'/umsg',
                    component:umsg
                },
                {
                    path:'/fabu',
                    component:fabu
                },
                {
                    path:'/shoucang',
                    component:shoucang ,
                    children:[
                        {
                            path:'/tiezi',
                            component:tiezi ,
                        },
                        {
                            path:'/user',
                            component:user ,
                        }
                    ]
                },
                {
                    path:'/test',
                    component:test
                },
                {path:'/detail' ,component:()=> import("../views/blogsys/detail.vue")},
                {
                    path:'/dashboard',
                    component:dashboard,
                    redirect: "/dashboard/mymsg",
                    children:[
                        { path:'/dashboard/category' ,component:()=> import("../views/dashboard/category.vue") },
                        { path:'/dashboard/article' ,component:()=> import("../views/dashboard/article.vue") },
                        {path:'/dashboard/mymsg',component:mymsg},
                    ]
                } 

            ]
        },
        {
            path: '/register',
            component:register
        },
        {
            path:'/login',
            component:login
        },
    ]

})
export default router;