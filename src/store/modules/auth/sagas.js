import { put, takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER_USER, AUTH_GET_PROFILE, AUTH_CHANGE_PASSWORD } from './types'
import { loginSuccess, loginFail } from './actions'
import { saveData } from 'utils/storage'

const login = apiCallSaga({
  type: AUTH_LOGIN,
  method: 'post',
  path: '/api/auth/login/',
  selectorKey: 'login',
  success: function*(payload) {
    saveData({ authToken: payload.token })
    yield put(loginSuccess(payload))
  },
  fail: function*(payload) {
    yield put(loginFail(payload))
  }
})

const registerUser = apiCallSaga({
  type: AUTH_REGISTER_USER,
  method: 'post',
  path: '/api/auth/register/',
  selectorKey: 'registerUser'
})

const getProfile = apiCallSaga({
  type: AUTH_GET_PROFILE,
  method: 'get',
  path: '/api/auth/profile/',
  selectorKey: 'profile'
})

const changePassword = apiCallSaga({
  type: AUTH_CHANGE_PASSWORD,
  method: 'put',
  path: '/api/auth/password/',
  allowedParamKeys: ['password', 'current_password'],
  selectorKey: 'changePassword'
})

const logout = function*(action) {
  yield saveData({ authToken: null })
}

export default function* rootSaga() {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  yield takeLatest(AUTH_REGISTER_USER, registerUser)
  yield takeLatest(AUTH_GET_PROFILE, getProfile)
  yield takeLatest(AUTH_CHANGE_PASSWORD, changePassword)
}
