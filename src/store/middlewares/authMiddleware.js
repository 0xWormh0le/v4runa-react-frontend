import get from 'lodash/get'

// import { logout } from 'store/modules/auth'
import { REQUEST_REJECTED } from 'store/modules/api'

const authMiddleware = store => next => action => {
  if (action.type === REQUEST_REJECTED) {
    const status = get(action, ['payload', 'data', 'status'])
    if ([401, 403].includes(status)) {
      // store.dispatch(logout())
      // return
    }
  }
  return next(action)
}

export default authMiddleware
