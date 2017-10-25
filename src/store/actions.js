/**
 * Created by Administrator on 2017/10/2.
 */
// import * as types from './mutation-types'
import { HIDEDIALOG } from './mutation-types'
// export const listenTranstionEnd = (context, {obj, callback}) => {
//   if (typeof obj === 'object') {
//     obj.addEventListener('webkitTransitionEnd', () => {
//       callback && callback()
//     })
//     obj.addEventListener('transitionEnd', () => {
//       callback && callback()
//     })
//   }
// }
//
// export const transitionAgain = ({state, commit}, {obj, modules}) => {
//   if (state[modules].index >= state[modules].length) {
//     commit(types.REMOVE_TRANSITION, {obj})
//     commit(types.SET_TRANSLATE, {x: 0, y: 0, z: 0, obj})
//     state[modules].index = 0
//   }
// }

export const hideDialog = ({ dispatch }) => dispatch(HIDEDIALOG)
