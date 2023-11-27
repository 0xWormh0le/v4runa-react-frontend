import React, { useState, useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import cn from 'classnames'
import find from 'lodash/find'
import capitalize from 'lodash/capitalize'
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import SearchInput from 'components/SearchInput'
import Typography from 'components/Typography'
import UtilityMap from 'components/UtilityMap'
import DropdownButton, { DropdownItem } from 'components/Dropdown'

import {
  sensorsChemicalSearchResultsSelector,
  sensorChemicalLatestSelector,
  sensorSelectedSelector,
  getLatestSensorChemical,
  searchSensorsChemical,
  selectSensor
} from 'store/modules/sensor'
import { waterUtilitySelector } from 'store/modules/auth'
import { CHEMICAL_TYPES } from 'config/constants'

import './SensorMap.scss'

const convertSensorsToMarkers = (sensors, sensorId) =>
  sensors.map(({ id, longitude, latitude, value }) => ({
    longitude,
    latitude,
    id,
    selected: id === sensorId,
    value: value.value,
    type: 'chemical'
  }))

function SensorMap(props) {
  const {
    // from parent
    chemical,
    className,
    // from selectors
    sensors, // sensor list
    sensorId, // sensor pk of selected one ( not device_id )
    latestSensorValue,
    waterUtility,
    // from action
    getLatestSensorChemical,
    searchSensorsChemical,
    selectSensor
  } = props
  const [filter, setFilter] = useState('')
  const [query, setQuery] = useState('')
  const [now, setNow] = useState(Date.now())
  const selectedSensor = find(sensors, { id: sensorId })

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    sensorId && getLatestSensorChemical({ id: sensorId, chemical: CHEMICAL_TYPES[chemical] })
  }, [getLatestSensorChemical, sensorId, chemical])

  useEffect(() => {
    if (!selectedSensor) {
      const id = sensors.length ? sensors[0].id : null
      selectSensor({ id })
    }
  }, [sensors, selectedSensor, selectSensor])

  useEffect(() => {
    const params = { q: query }
    searchSensorsChemical({ params, chemical: CHEMICAL_TYPES[chemical] })
  }, [query, chemical, searchSensorsChemical])

  const handleFilterChange = e => {
    setFilter(e.target.value)
    e.target.value.length === 0 && setQuery('')
  }

  const handleSubmit = e => {
    setQuery(filter)
    e.preventDefault()
  }

  const handleMarkerClick = ({ id }) => selectSensor({ id })

  const getSensorCaption = () => {
    if (sensorId === null || !selectedSensor) {
      return 'No sensor'
    } else {
      return selectedSensor.device_id
    }
  }

  const getUtilityLocation = () =>
    waterUtility &&
    waterUtility.location &&
    capitalize(waterUtility.location.city) + ', ' + waterUtility.location.state.toUpperCase()

  return (
    <Card className={cn('SensorMap', className)}>
      <Card.Body className="d-flex flex-column">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} className="mb-0">
              <SearchInput
                placeholder="Search sensor..."
                autoComplete="off"
                value={filter}
                onChange={handleFilterChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-0">
              <DropdownButton title={getSensorCaption()}>
                {sensors.map(({ id, device_id }, key) => (
                  <DropdownItem key={key} onClick={() => selectSensor({ id })}>
                    {device_id}
                  </DropdownItem>
                ))}
              </DropdownButton>
            </Form.Group>
          </Form.Row>
        </Form>

        <div className="d-flex justify-content-between my-3">
          <Typography variant="subtitle" className="SensorMap__location">
            {getUtilityLocation()}
          </Typography>
          <Typography className="SensorMap__sensor">{waterUtility && capitalize(waterUtility.name)}</Typography>
        </div>

        <div className="SensorMap__chemical mb-3">
          <Typography uppercase className="SensorMap__chemical-name">
            <strong>Chlorine Residual</strong>
          </Typography>
          <Typography variant="body-xlarge" className="SensorMap__chemical-value">
            {latestSensorValue && latestSensorValue.value && (
              <>
                <FormattedNumber value={latestSensorValue.value} format="sensorValue" />
                &nbsp;{latestSensorValue.unit}
              </>
            )}
          </Typography>
        </div>

        <UtilityMap
          className="SensorMap__map"
          markers={convertSensorsToMarkers(sensors, sensorId)}
          onMarkerClick={handleMarkerClick}
        />

        <div className="d-flex mt-2">
          <Typography>
            <small>0 ppm</small>
          </Typography>
          <div className="SensorMap__color-bar mx-2"></div>
          <Typography>
            <small>4 ppm</small>
          </Typography>
        </div>

        <Typography className="mt-3">
          <FormattedDate value={now} format="dayMonthAndYear" />
          &nbsp;|&nbsp;
          <FormattedTime value={now} format="long" />
        </Typography>
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  sensors: sensorsChemicalSearchResultsSelector,
  waterUtility: waterUtilitySelector,
  sensorId: sensorSelectedSelector,
  latestSensorValue: sensorChemicalLatestSelector
})

const actions = {
  getLatestSensorChemical,
  searchSensorsChemical,
  selectSensor
}

export default connect(selector, actions)(SensorMap)
