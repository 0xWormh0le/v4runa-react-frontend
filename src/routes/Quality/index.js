import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Iccr from './routes/Iccr'
import QualityReport from './routes/QualityReport'

const Quality = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/iccr`} component={Iccr} />
      <Route path={`${match.path}/`} component={QualityReport} />
    </Switch>
  )
}

export default Quality
