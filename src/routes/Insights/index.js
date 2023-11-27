import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Prognosis from './routes/Prognosis'
import WorkOrder from './routes/WorkOrder'
import Recommendations from './routes/Recommendations'

const Insights = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/prognosis`} component={Prognosis} />
      <Route path={`${match.path}/work-order`} component={WorkOrder} />
      <Route path={`${match.path}/recommendations`} component={Recommendations} />
    </Switch>
  )
}

export default Insights
