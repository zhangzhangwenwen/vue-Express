import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import App from './App'

Vue.config.debug = true

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'

Vue.use(Router)
Vue.use(ElementUI)
// 将axios引入到vue.prototype上
Vue.prototype.$http = axios

const Layout = resolve => require(['./views/layout/layout'], resolve)
const Home = resolve => require(['./views/layout/home'], resolve)
const User = resolve => require(['./views/system/user'], resolve)
const router = new Router({
  routes: [
    { path: '/', redirect: '/home/index', hidden: true },
    {
      path: '/home',
      component: Layout,
      hidden: true,
      children: [
        {path: 'index', component: Home, name: '首页'}
      ]
    },
    {
      path: '/system',
      component: Layout,
      hidden: true,
      children: [
        {path: 'user', component: User, name: '首页'}
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  base: '/',
  render (createElement) {
    return createElement(App)
  }
})
