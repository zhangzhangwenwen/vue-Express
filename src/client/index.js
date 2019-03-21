import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import App from './App'
import Hello from './components/Hello'

Vue.config.debug = true
Vue.use(Router)

// 将axios引入到vue.prototype上
Vue.prototype.$http = axios

const router = new Router({
  routes: [
    { path: '/', redirect: '/hello', component: Hello },
    { name: 'hello', path: '/hello', component: Hello }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
