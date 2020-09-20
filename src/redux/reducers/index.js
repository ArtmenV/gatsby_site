import { combineReducers } from 'redux'

import clientsReducer from './clientsReducer'
import menuReducer from './menuReducer'
import currentSectionIndexReducer from './currentSectionIndexReducer'


const rootReducer = combineReducers({
  isMenuOpen: menuReducer,
  countClick: clientsReducer,
  currentSectionIndex: currentSectionIndexReducer
})

export default rootReducer