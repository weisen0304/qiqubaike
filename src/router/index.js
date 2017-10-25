import Vue from 'vue'
import Router from 'vue-router'

import Video from '../components/video/Video'
import Selection from '../components/selection/Selection'
import Joke from '../components/joke/Joke'
import Find from '../components/find/Find'
import Column from '../components/column/Column'

import Login from '../components/login/Login'

import Detail from '../components/detail/Detail'

import NotFound from '../components/NotFound404'

Vue.use(Router)

const routes = [
  {path: '/Selection', name: 'Selection', component: Selection},
  {path: '/video', name: 'Video', component: Video},
  {path: '/joke', name: 'Joke', component: Joke},
  {path: '/find', name: 'Find', component: Find},
  {path: '/column', name: 'Column', component: Column},
  {path: '/login', name: 'Login', component: Login},
  {path: '/detail', name: 'Detail', component: Detail},
  {path: '*', name: 'NotFound', component: NotFound}]

export default new Router({
  linkActiveClass: 'active',
  routes
})
