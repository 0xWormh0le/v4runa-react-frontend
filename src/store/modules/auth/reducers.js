import { handleActions } from 'redux-actions'
import jwt_decode from 'jwt-decode'

import * as types from './types'
import { loadData } from 'utils/storage'

const getInitialState = () => {
  const { authToken } = loadData()
  const currentTime = Date.now() / 1000 // to get in milliseconds
  let tokenToRestore = authToken
  let decoded
  if (authToken) {
    try {
      decoded = jwt_decode(authToken)
      if (decoded.exp < currentTime) {
        tokenToRestore = null
      }
    } catch (ex) {
      tokenToRestore = null
    }
  }
  return {
    isAuthenticated: Boolean(tokenToRestore),
    authToken: tokenToRestore || null,
    profile: null
  }
}

export default handleActions(
  {
    [types.AUTH_LOGIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      isAuthenticated: true,
      authToken: payload.token,
      profile: payload.profile
    }),
    [types.AUTH_LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isAuthenticated: false,
      authToken: null,
      profile: null
    }),
    [types.AUTH_LOGOUT]: (state, { payload }) => ({
      ...state,
      isAuthenticated: false,
      authToken: null,
      profile: null
    })
  },
  getInitialState()
)
