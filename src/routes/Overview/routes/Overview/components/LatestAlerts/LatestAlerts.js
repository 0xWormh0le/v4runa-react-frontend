import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import flatten from 'lodash/flatten'
import Typography from 'components/Typography'
import OverviewMap from '../OverviewMap'
import AlertLog from 'routes/Alerts/components/AlertLog'

import './LatestAlerts.scss'

const alertLogData = flatten(
  Array(10)
    .fill(0)
    .map(() => [
      {
        type: 'warning',
        city: 'San Marcos',
        date: '2019-12-08 09:03',
        content: 'Pump 39910-3 has shut down due to a storm-related outgage.'
      },
      {
        type: 'maintenance',
        city: 'Georgetown',
        date: '2019-12-08 09:03',
        content: 'Schduled maintenance carried out by Mark Twain'
      },
      {
        type: 'warning',
        city: 'San Marcos',
        date: '2019-12-08 09:03',
        content: 'Pump 39910-3 has shut down due to a storm-related outgage.',
        active: true
      }
    ])
)

function LatestAlerts(props) {
  return (
    <Card className="LatestAlerts">
      <Card.Body>
        <Typography variant="subtitle" uppercase gutterBottom>
          Latest Alerts
        </Typography>

        <Row className="LatestAlerts__row-spacer">
          <Col xl={6} className="LatestAlerts__col-spacer">
            <div className="LatestAlerts__map">
              <OverviewMap hideTitle mode="alert" />
            </div>
          </Col>

          <Col xl={6} className="LatestAlerts__col-spacer">
            <div className="border LatestAlerts__log">
              <AlertLog data={alertLogData} />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

LatestAlerts.propTypes = {}

export default LatestAlerts
