import { INCREMENT_COUNT_CLICK } from '../actionTypes'

const initialState = 0

export default (state = initialState, action) => {
  if (action.type === INCREMENT_COUNT_CLICK) {
    if (state === 18) {
      return 1
    } else {
      return state + 1
    }
  } else {
    return state
  }
}