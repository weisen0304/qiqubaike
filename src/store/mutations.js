/**
 * Created by newuser on 2017/9/19.
 */
// import * as types from './mutation-types'
import { HIDEDIALOG } from './mutation-types'

export default {
  [HIDEDIALOG] (state) {
    state.isShowIndex = !state.isShowIndex
    state.isShowLogin = !state.isShowLogin
    state.isShowDetail = !state.isShowDetail
    state.isShowBack = !state.isShowBack
    state.isShowWrap = !state.isShowWrap
  }
}
