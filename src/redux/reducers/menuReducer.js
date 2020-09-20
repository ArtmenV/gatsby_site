import { IS_MENU_OPEN } from '../actionTypes'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_MENU_OPEN:
      return action.payload
    default:
      return state
  }
}