/**
 * Created by Administrator on 2017/9/26.
 */
import * as types from '../mutation-types'
const state = {
  index: 0,
  timer: 1,
  length: 0,
  addlike: [],
  addislike: [],
  showIndex: true
}

const getters = {
  addlike: state => state.addlike,
  addislike: state => state.addislike,
  showIndex: state => state.showIndex
}

const mutations = {
  [types.RECEIVE_LENGTH] (state, length) {
    state.length = length
  }
}

const actions = {
  startBannerTranstion ({commit, state}, obj) {
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, {obj})
      let offsetX = -state.index * 375 + 'px'
      commit(types.SET_TRANSLATE, {x: offsetX, y: 0, z: 0, obj})
    }, 5000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
