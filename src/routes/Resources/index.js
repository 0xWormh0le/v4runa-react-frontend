import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Assets from './routes/Assets'
import Finances from './routes/Finances'
import Personnel from './routes/Personnel'

const Resources = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/assets`} component={Assets} />
      <Route path={`${match.path}/finances`} component={Finances} />
      <Route path={`${match.path}/personnel`} component={Personnel} />
    </Switch>
  )
}

export default Resources
