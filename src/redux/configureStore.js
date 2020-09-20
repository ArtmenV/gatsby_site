import { createStore as createReduxStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const createStore = () => createReduxStore(rootReducer, applyMiddleware(loggerMiddleware))

export default createStore