import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import fp from 'lodash/fp'

import { getSensorDataRecordsList } from 'store/modules/sensor'
import { alertsListSelector } from 'store/modules/alert'

import Button from 'react-bootstrap/Button'
import DropdownButton, { DropdownItem } from 'components/Dropdown'
import SensorRecordsChart from 'components/SensorRecordsChart'
import Typography from 'components/Typography'

import './WaterPollutionReport.scss'

export const getSensorsFromAlerts = fp.map(fp.get('sensor'))

const SensorRecordDataLoader = ({ sensor, getSensorDataRecordsList }) => {
  useEffect(() => {
    getSensorDataRecordsList({
      id: sensor.id
    })
  }, [sensor, getSensorDataRecordsList])
  return null
}

const WaterPollutionReport = props => {
  const {
    alerts: { results: alertsList },
    getSensorDataRecordsList
  } = props

  return (
    <div className="WaterPollutionReport flex-grow-1 h-100 d-flex flex-column position-relative">
      {alertsList.map(alert => (
        <SensorRecordDataLoader
          key={alert.id}
          sensor={alert.sensor}
          getSensorDataRecordsList={getSensorDataRecordsList}
        />
      ))}
      <div className="WaterPollutionReport__header">
        <Typography variant="subtitle" gutterBottom uppercase>
          Water Pollution Report
        </Typography>

        <div className="WaterPollutionReport__header-control-box mb-2">
          <DropdownButton title="AUSTIN POWER" className="WaterPollutionReport__dropdown">
            <DropdownItem>AUSTIN POWER</DropdownItem>
          </DropdownButton>

          <DropdownButton title="GPM" className="WaterPollutionReport__dropdown">
            <DropdownItem>GPM</DropdownItem>
          </DropdownButton>

          <Button size="sm" className="mb-2">
            <strong>CHARTS/TRENDS</strong>
          </Button>
        </div>
      </div>
      <SensorRecordsChart sensors={getSensorsFromAlerts(alertsList)} />
    </div>
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
