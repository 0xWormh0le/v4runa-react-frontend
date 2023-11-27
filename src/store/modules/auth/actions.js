import { createAction } from 'redux-actions'

import * as types from './types'

export const login = createAction(types.AUTH_LOGIN)

export const loginSuccess = createAction(types.AUTH_LOGIN_SUCCESS)

export const loginFail = createAction(types.AUTH_LOGIN_FAIL)

export const logout = createAction(types.AUTH_LOGOUT)

export const registerUser = createAction(types.AUTH_REGISTER_USER)

export const getProfile = createAction(types.AUTH_GET_PROFILE)

export const changePassword = createAction(types.AUTH_CHANGE_PASSWORD)
