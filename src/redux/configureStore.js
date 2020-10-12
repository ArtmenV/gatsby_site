import { createStore as createReduxStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production'
});

const createStore = () => createReduxStore(rootReducer, applyMiddleware(loggerMiddleware))

export default createStore