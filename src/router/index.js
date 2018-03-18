import Vue from 'vue'
import Router from 'vue-router'


// import Home from '../components/Home.vue'
import Collect from '../components/Collect.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Detail from '../components/Detail.vue'
import Profile from '../components/Profile.vue'
import Reg from '../components/Reg.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
      meta: {keepAlive: true, title: '首页'}
    },
    {
      path: '/collect',
      component: () => import('../components/Collect.vue'),
      meta: {title: '收藏'}
    },
    {
      path: '/add',
      component: () => import('../components/Add.vue'),
      meta: {title: '添加'}
    },
    // /detail/1  {bid:1} 路径参数 必须有但是可以随机
    {
      path: '/detail/:bid',
      component: () => import('../components/Detail.vue'),
      name: 'detail',
    },
    {
      path: '/list',
      component: () => import('../components/List.vue'),
      meta: {title: '列表'}
    },
    {
      path: '/profile',
      component: () => import('../components/Profile.vue'),
      meta: {title: 'profile'}
    },
    {
      path: '/login',
      component: () => import('../components/Login.vue'),
      meta: {title: 'login'}
    },
    {
      path: '/reg',
      component: () => import('../components/Reg.vue'),
      meta: {title: 'Reg'}
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]

})
