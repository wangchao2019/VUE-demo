import VueRouter from 'vue-router'

import connect from './components/connect.vue'
import home from './components/home.vue'
import news from './components/news.vue'
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path:'/home',component:home},
        {path:'/news',component:news},
        {path:'/connect',component:connect},


    ],
    linkActiveClass: 'mui-active'
})


export default router