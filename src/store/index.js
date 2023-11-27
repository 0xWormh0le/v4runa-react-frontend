import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import getReducers from './modules'
import authMiddleware from './middlewares/authMiddleware.js'
import sagas from './modules/sagas'
import { getProfile, tokenSelector } from './modules/auth'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Redux-saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [middleware, sagaMiddleware, thunk, authMiddleware]

const enhancers = [applyMiddleware(...middlewares)]

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
/* eslint-enable */

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(getReducers(history), {}, composeEnhancers(...enhancers))

sagaMiddleware.run(sagas)

// Load user profile on load
if (tokenSelector(store.getState())) {
  store.dispatch(getProfile())
}

export default store
