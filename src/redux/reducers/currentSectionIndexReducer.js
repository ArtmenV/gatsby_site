import { CURRENT_SECTION_INDEX } from '../actionTypes'

const initialState = 0

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SECTION_INDEX:
      return action.payload
    default:
      return state
  }
}