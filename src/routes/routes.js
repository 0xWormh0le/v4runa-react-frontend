import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from 'store'

import LegacyLayout from 'components/LegacyLayout'
import MainLayout from 'components/MainLayout'
import PrivateRoute from 'components/PrivateRoute'

import Insights from 'routes/Insights'
import Login from 'routes/Login'
import SignUp from 'routes/SignUp'
import HomeCL from 'routes/Home/HomeCL'
import Resources from 'routes/Resources'
import Quality from 'routes/Quality'
import Overview from 'routes/Overview'
import Landing from 'routes/Landing'
import Alerts from 'routes/Alerts'
import ChangePassword from 'routes/User/ChangePassword'
import WorkOrder from 'routes/Insights/routes/WorkOrder'

import LegacyAddReport from 'routes/LegacyICCRDashboard/routes/AddReport'
import LegacyContact from 'routes/LegacyContact'
import LegacyICCRDashboard from 'routes/LegacyICCRDashboard'
import LegacyLanding from 'routes/Home/LegacyLanding'
import LegacyReport from 'routes/LegacyReport'
import LegacyUpdateReport from 'routes/LegacyICCRDashboard/routes/UpdateReport'

import { withUserRole } from 'hocs/withAuth'
import { USER_ROLE } from 'config/constants'

const withLegacyLayout = Component => props => (
  <LegacyLayout>
    <Component {...props} />
  </LegacyLayout>
)

const homePage = () => {
  if (process.env.REACT_APP_DEPLOY_HOST === 'varunaview') {
    return withLegacyLayout(LegacyLanding)
  } else {
    return HomeCL
  }
}

const CommonProtectedRoutes = () => (
  <>
    <Route exact path="/alerts" component={Alerts} />
    <Route path="/quality" component={Quality} />
    <Route path="/change-password" component={ChangePassword} />
  </>
)

const AdminProtectedRoutes = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/overview" component={Overview} />
      <Route path="/resources" component={Resources} />
      <Route path="/insights" component={Insights} />
      <CommonProtectedRoutes />
    </Switch>
  </MainLayout>
)

const UserProtectedRoutes = () => (
  <MainLayout>
    <Switch>
      <Route path="/overview" component={Overview} />
      <Route path="/insights/work-order" component={WorkOrder} />
      <CommonProtectedRoutes />
    </Switch>
  </MainLayout>
)

function Routes({ userRole }) {
  const getProtectedRoutes = () => {
    if (userRole) {
      if (userRole === USER_ROLE.Admin) {
        return AdminProtectedRoutes
      } else {
        return UserProtectedRoutes
      }
    } else {
      return () => <></>
    }
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={homePage()} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/contact" component={withLegacyLayout(LegacyContact)} />
        <Route exact path="/report/:id" component={withLegacyLayout(LegacyReport)} />
        <PrivateRoute exact path="/legacy-iccr/dashboard" component={withLegacyLayout(LegacyICCRDashboard)} />
        <PrivateRoute path="/legacy-iccr/dashboard/add-report" component={withLegacyLayout(LegacyAddReport)} />
        <PrivateRoute
          path="/legacy-iccr/dashboard/update-report/:id"
          component={withLegacyLayout(LegacyUpdateReport)}
        />
        <PrivateRoute path="/landing" component={Landing} />
        <PrivateRoute path="/" component={getProtectedRoutes()} />
      </Switch>
    </Router>
  )
}

export default withUserRole(Routes)
