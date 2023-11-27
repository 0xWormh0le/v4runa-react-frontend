import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import { alertsListSelector } from 'store/modules/alert'
import OverviewAlertItem from '../OverviewAlertItem'
import Typography from 'components/Typography'
import './OverviewAlerts.scss'

const ALERTS_TO_SHOW = 3

const OverviewAlerts = ({ alerts }) => {
  const { results: alertsList } = alerts
  const slicedAlerts = alertsList.slice(0, ALERTS_TO_SHOW)
  const moreAlertsCount = alertsList.length - ALERTS_TO_SHOW
  return (
    <Card className="OverviewAlerts">
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <Typography variant="subtitle">ALERTS</Typography>
          <div className="Technicians__header-divider mx-2">|</div>
          <Typography variant="body">
            <Link to="/operations/alerts">
              <strong>Resolve ({moreAlertsCount} more)</strong>
            </Link>
          </Typography>
        </div>
        {slicedAlerts.map(alert => (
          <OverviewAlertItem key={alert.id} type={alert.alert_type} date={alert.reported_at} text={alert.message} />
        ))}
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  alerts: alertsListSelector
})

export default connect(selector)(OverviewAlerts)
