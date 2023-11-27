import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withUserRole } from 'hocs/withAuth'

import { isRequestSuccess } from 'store/modules/api'
import { isAuthenticatedSelector, approvedSelector, waterUtilitySelector } from 'store/modules/auth'
import { USER_ROLE } from 'config/constants'

const PrivateRoute = props => {
  const { component: Component, auth, userRole, approved, waterUtility, profileSuccess, ...rest } = props

  const redirectLanding = useCallback(() => {
    if (userRole === USER_ROLE.Admin) {
      return false
    }
    if (waterUtility && approved) {
      return false
    }
    return profileSuccess
  }, [waterUtility, approved, userRole, profileSuccess])

  const getRenderComponent = () => props => {
    if (auth) {
      // Make sure we redirect to landing when current route is not landing and account is not approved
      if (rest.path !== '/landing' && redirectLanding()) {
        return <Redirect to="/landing" />
      } else {
        return <Component {...props} />
      }
    } else {
      return <Redirect to="/login" />
    }
  }

  return <Route {...rest} render={getRenderComponent()} />
}

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired
}

const selector = createStructuredSelector({
  auth: isAuthenticatedSelector,
  approved: approvedSelector,
  waterUtility: waterUtilitySelector,
  profileSuccess: isRequestSuccess('profile')
})

export default compose(withUserRole, connect(selector))(PrivateRoute)
