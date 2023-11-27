import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OverviewComponent from './routes/Overview'
import SensorStatus from './routes/SensorStatus'
import MonthlyReport from './routes/MonthlyReport'
import { USER_ROLE } from 'config/constants'
import { withUserRole } from 'hocs/withAuth'

const getOverviewComponent = userRole => {
  if (userRole === USER_ROLE.Admin) {
    return OverviewComponent
  } else {
    return SensorStatus
  }
}

const Overview = ({ match, userRole }) => {
  return (
    <Switch>
      <Route path={`${match.path}/monthly-reports`} component={MonthlyReport} />
      <Route path={`${match.path}/`} component={getOverviewComponent(userRole)} />
    </Switch>
  )
}

export default withUserRole(Overview)
