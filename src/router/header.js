import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/Login'

Vue.use(Router)

const routes = [
  {path: '/login', name: 'Login', component: Login}]

export default new Router({
  linkActiveClass: 'active',
  routes
})
