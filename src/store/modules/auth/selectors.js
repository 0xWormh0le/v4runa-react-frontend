import { dataSelector, isRequestPending } from '../api'
import fp from 'lodash/fp'

export const authSelector = fp.get('auth')

export const isAuthenticatedSelector = fp.compose(fp.get('isAuthenticated'), authSelector)

export const isAuthenticatingSelector = state =>
  isRequestPending('login', 'post')(state) && !isAuthenticatedSelector(state)

export const tokenSelector = fp.compose(fp.get('authToken'), authSelector)

export const profileSelector = dataSelector('profile')

export const waterUtilitySelector = dataSelector('profile.profile.water_utility')

export const approvedSelector = dataSelector('profile.profile.is_approved')
