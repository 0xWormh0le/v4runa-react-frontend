import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import api from './api'
import alert from './alert'
import auth from './auth'
import sensor from './sensor'
import resourceAllocation from './resource-allocation'
import report from './legacy-report'
// import todo from './todo'

export default history =>
  combineReducers({
    // todo,
    api,
    alert,
    auth,
    sensor,
    resourceAllocation,
    report,
    router: connectRouter(history)
  })
