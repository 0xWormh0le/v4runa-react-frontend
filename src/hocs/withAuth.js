import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'

import { profileSelector, isAuthenticatedSelector } from 'store/modules/auth'

const selector = createStructuredSelector({
  isAuthenticated: isAuthenticatedSelector,
  profile: profileSelector
})

export const isAuthenticatedOrRedir = Component => {
  const Wrapper = ({ isAuthenticated, ...props }) =>
    isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
  return connect(selector)(Wrapper)
}

export const isNotAuthenticatedOrRedir = Component => {
  const Wrapper = ({ isAuthenticated, ...props }) =>
    isAuthenticated ? <Redirect to="/landing" /> : <Component {...props} />
  return connect(selector)(Wrapper)
}

export const withUserRole = Component => {
  const Wrapper = ({ profile, ...props }) => <Component {...props} userRole={profile && profile.role} />

  return connect(selector)(Wrapper)
}

export const withUserProfile = Component => {
  const Wrapper = ({ profile, ...props }) => <Component {...props} profile={profile} />

  return connect(selector)(Wrapper)
}
