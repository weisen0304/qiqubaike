// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

import 'jquery'

import './common/less/index.less'
import './common/css/common.css'

import VueLazyload from 'vue-lazyload'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueVideoPlayer from 'vue-video-player'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.use(VueVideoPlayer)

if (process.browser) {
  const VueVideoPlayer = require('vue-video-player/ssr')
  Vue.use(VueVideoPlayer)
}

Vue.use(ElementUI)

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.png',
  loading: 'static/loading.gif',
  try: 3
})

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$axios = axios // 将axios 该写为Vue 的原型属性

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  rander: h => h(App)
})

router.push('/Selection')

