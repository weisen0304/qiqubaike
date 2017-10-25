/**
 * Created by Administrator on 2017/10/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  isShowIndex: false,
  isShowLogin: false,
  isShowDetail: false,
  isShowBack: false,
  isShowWrap: false
}
const store = new Vuex.Store({
  state,
  mutations
})

if (module.hot) {
  module.hot.accept(['./mutations'], () => {
    const mutations = require('./mutations').default
    store.hotUpdate({
      mutations
    })
  })
}

export default store
