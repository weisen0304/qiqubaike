/**
 * Created by newuser on 2017/9/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import videoMutations from './video/mutations'
import mutations from './mutations'
import header from './modules/header'
import selection from './modules/selection'
import * as actions from './actions'

Vue.use(Vuex)

const videoGetters = {
  showMask: state => state.playStatus
}
const video = {
  state: {
    url: '',
    cover: '',
    playStatus: false
  },
  mutations: videoMutations,
  getters: videoGetters
}

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

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    header,
    selection,
    video
  }
})
