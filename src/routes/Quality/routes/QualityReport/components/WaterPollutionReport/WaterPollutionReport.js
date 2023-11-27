import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import cn from 'classnames'
import fp from 'lodash/fp'
import Card from 'react-bootstrap/Card'

import { getSensorDataRecordsList } from 'store/modules/sensor'
import { alertsListSelector } from 'store/modules/alert'
import SensorRecordsChart from 'components/SensorRecordsChart'
import Typography from 'components/Typography'

export const getSensorsFromAlerts = fp.map(fp.get('sensor'))

const SensorRecordDataLoader = ({ sensor, getSensorDataRecordsList }) => {
  useEffect(() => {
    getSensorDataRecordsList({
      params: { page: 1 },
      id: sensor.id,
      chemical: 'chlorine',
      interval: '1M'
    })
  }, [sensor, getSensorDataRecordsList])
  return null
}

const WaterPollutionReport = props => {
  const {
    alerts: { results: alertsList },
    getSensorDataRecordsList,
    className
  } = props

  return (
    <Card className={cn('WaterPollutionReport', className)}>
      <Card.Body className={cn('flex-grow-1', 'h-100', 'd-flex', 'flex-column', 'position-relative')}>
        {alertsList.map(alert => (
          <SensorRecordDataLoader
            key={alert.id}
            sensor={alert.sensor}
            getSensorDataRecordsList={getSensorDataRecordsList}
          />
        ))}
        <Typography variant="subtitle" gutterBottom uppercase className="mb-3">
          Water Pollution Report
        </Typography>
        <SensorRecordsChart sensors={getSensorsFromAlerts(alertsList)} />
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  alerts: alertsListSelector
})

const actions = {
  getSensorDataRecordsList
}

export default connect(
  selector,
  actions
)(WaterPollutionReport)
