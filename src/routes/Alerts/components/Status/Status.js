import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Typography from 'components/Typography'
import IconAlert from 'icons/IconErrorTriangle'

import { alertsSearchResultsSelector } from 'store/modules/alert'
import { sensorSelectedSelector } from 'store/modules/sensor'
import { ALERT_LEVEL } from 'config/constants'

import './Status.scss'

const getAlertStatus = alert_type => {
  switch (alert_type) {
    case ALERT_LEVEL.Serious:
      return 'warning'
    case ALERT_LEVEL.Critical:
      return 'alarm'
    case ALERT_LEVEL.Warning:
    default:
      return null
  }
}

function Status(props) {
  const { sensorId, alerts } = props

  const urgentAlerts = alerts
    .filter(({ alert_type, sensor }) => alert_type >= ALERT_LEVEL.Warning && sensor.id === sensorId)
    .map(alert => ({ ...alert, status: getAlertStatus(alert.alert_type) }))

  return (
    <Card className="Status">
      <Card.Body>
        <div className="d-flex">
          <Typography variant="subtitle">
            <strong>STATUS: </strong>
          </Typography>
          <Typography variant="subtitle" className="Status__urgent ml-2">
            <strong>URGENT</strong>
          </Typography>
        </div>

        <Typography className="mt-3">
          <ul className="Status__alert-list">
            {urgentAlerts.map(({ alert_type, message, status }, key) => (
              <li key={key} className={cn('mb-2', 'Status__alert', `Status__alert--${status}`)}>
                <IconAlert className="Status__alert-icon" />
                {status && <span className="Status__alert-status font-weight-bold text-capitalize">{status}</span>}
                {message}
              </li>
            ))}
          </ul>
        </Typography>

        <div className="d-flex mt-3 justify-content-end">
          <Button as={Link} to="/quality/iccr" className="mr-2">
            REPORT ISSUE
          </Button>
          <Button as={Link} to="/quality/iccr">
            ALLOCATE RESOURCES
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  alerts: alertsSearchResultsSelector,
  sensorId: sensorSelectedSelector
})

export default connect(selector)(Status)
