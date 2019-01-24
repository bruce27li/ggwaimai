/**
 * 路由对象模块
 */

 import Vue from 'vue'
 import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
 //声明使用路由插件
 Vue.use(VueRouter)

 //暴露路由配置
 export default new VueRouter({
     //所有路由
     routes:[
         {
            path:'/',
            redirect:'/msite'
         },
         {
             path:'/msite',
             component:MSite,
             meta:{
                 showFooter:true
             }
         },
         {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        }
     ]
 })