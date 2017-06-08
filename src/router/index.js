import Vue from 'vue';
import Router from 'vue-router';
import {Indicator} from 'mint-ui';
//路由页面
import Index from '@/components/index';
import Login from '@/components/login';
import Discuss from '@/components/discuss';
import LoadMore from '@/components/loadmore';
import InfiniteScroll from '@/components/infiniteScroll';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '*', component: Index},
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/discuss',
            name: 'Discuss',
            component: Discuss
        },
        {
            path: '/loadMore',
            name: 'LoadMore',
            component: LoadMore
        },
        {
            path: '/infiniteScroll',
            name: 'InfiniteScroll',
            component: InfiniteScroll
        },
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
});
router.beforeEach((to, from, next) => {
    console.log(`路由开始：${from.path}`)
    Indicator.open('加载中...');
    next();
});
router.afterEach(route => {
    setTimeout(()=>{
        Indicator.close();
    },1000)
    console.log(`路由结束：${route.path}`)
});

export default router;
