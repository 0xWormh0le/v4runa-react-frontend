import React, { useState, useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import cn from 'classnames'
import find from 'lodash/find'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import SearchInput from 'components/SearchInput'
import Typography from 'components/Typography'
import UtilityMap from 'components/UtilityMap'
import ChemicalChoice from '../ChemicalChoice'

import {
  sensorsChemicalSearchResultsSelector,
  sensorSelectedSelector,
  searchSensorsChemical,
  selectSensor
} from 'store/modules/sensor'

import { CHEMICAL_TYPES } from 'config/constants'

import './ChemicalLocation.scss'

const convertSensorsToMarkers = (sensors, sensorId) =>
  sensors.map(({ id, longitude, latitude, value }) => ({
    longitude,
    latitude,
    id,
    selected: id === sensorId,
    value: value.value,
    type: 'chemical'
  }))

function ChemicalLocation(props) {
  const { className, sensors, sensorId, searchSensorsChemical, selectSensor } = props
  const [filter, setFilter] = useState('')
  const [query, setQuery] = useState('')
  const [chemical, setChemical] = useState(1)
  const selectedSensor = find(sensors, { id: sensorId })

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

  return (
    <Card className={cn('ChemicalLocation', className)}>
      <Card.Body>
        <Typography uppercase variant="subtitle">
          Chemical By Location
        </Typography>

        <div className="text-center my-2">
          <ChemicalChoice onChemicalSelect={setChemical} defaultValue={1} />
        </div>

        <Form className="mb-2" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group
              as={Col}
              controlId="location"
              className={cn('d-flex align-items-center', 'mb-2 mb-sm-0', 'col-12 col-sm')}>
              <SearchInput
                placeholder="Find a location..."
                autoComplete="off"
                value={filter}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Form.Row>
        </Form>

        <UtilityMap
          className="ChemicalLocation__map"
          markers={convertSensorsToMarkers(sensors, sensorId)}
          onMarkerClick={handleMarkerClick}
        />

        <div className="d-flex mt-2">
          <Typography>
            <small>0ppm</small>
          </Typography>
          <div className="ChemicalLocation__color-bar mx-2"></div>
          <Typography>
            <small>4ppm</small>
          </Typography>
        </div>
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  sensors: sensorsChemicalSearchResultsSelector,
  sensorId: sensorSelectedSelector
})

const actions = {
  searchSensorsChemical,
  selectSensor
}

export default connect(
  selector,
  actions
)(ChemicalLocation)
