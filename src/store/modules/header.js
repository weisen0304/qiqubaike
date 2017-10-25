/**
 * Created by newuser on 2017/9/19.
 */
import * as types from '../mutation-types'
const state = {
  index: 0,
  timer: 1,
  length: 0
}

const mutations = {
  [types.RECEIVE_LENGTH] (state, length) {
    state.length = length
  }
}

// 计时器开始轮播图
const actions = {
  startHeaderTransition ({commit, state}, obj) {
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, {obj})
      let offsetY = -state.index * 16 + 'px'
      commit(types.SET_TRANSLATE, {x: 0, y: offsetY, z: 0, obj})
    }, 1500)
  }
}

export default {
  state,
  mutations,
  actions
}
