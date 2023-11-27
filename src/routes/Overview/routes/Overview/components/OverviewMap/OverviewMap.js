import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import cn from 'classnames'
import findIndex from 'lodash/findIndex'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { sensorsSearchResultsSelector, sensorSelectedSelector, searchSensors, selectSensor } from 'store/modules/sensor'

import {
  resourceAllocationsSeletedListSelector as techniciansSelectedListSelector,
  resourceAllocationsSearchResultsSelector as techniciansSearchResultsSelector,
  searchResourceAllocations as searchTechnicians,
  selectResourceAllocation as selectTechnician
} from 'store/modules/resource-allocation'

import SearchInput from 'components/SearchInput'
import Typography from 'components/Typography'
import UtilityMap from 'components/UtilityMap'

import './OverviewMap.scss'

const convertAlertsToMarkers = (sensors, sensorId) => {
  return sensors.map(sensor => ({
    id: sensor.id,
    longitude: sensor.longitude,
    latitude: sensor.latitude,
    selected: sensor.id === sensorId,
    type: 'alert'
  }))
}

const convertSensorsToMarkers = sensors =>
  sensors.map(sensor => ({
    id: sensor.id,
    longitude: sensor.longitude,
    latitude: sensor.latitude,
    type: `sensor${sensor.has_issue ? 'Abnormal' : 'Normal'}`
  }))

const convertTechniciansToMarkers = (technicians, selected) =>
  technicians.map(technician => ({
    id: technician.id,
    longitude: technician.location.longitude,
    latitude: technician.location.latitude,
    selected: selected.includes(technician.id),
    type: 'technician'
  }))

const mapTypes = [
  {
    value: 'sensor',
    label: 'Sensors'
  },
  {
    value: 'alert',
    label: 'Alerts'
  },
  {
    value: 'technician',
    label: 'Technicians'
  }
]

const MapTypeOptions = ({ onChange, value }) => (
  <Form.Group
    as={Col}
    className={cn('MapTypeOptions', 'col-12 col-sm', 'text-sm-right text-center', 'mb-0 mt-2 mt-sm-0')}>
    {mapTypes.map(option => (
      <Form.Check
        key={option.value}
        inline
        label={option.label}
        type="radio"
        onChange={() => onChange(option.value)}
        value={value}
        className="MapTypeOptions__option"
        name="overview-map-option"
        checked={value === option.value}
        id={`overview-map-option-${option.value}`}
      />
    ))}
  </Form.Group>
)

const getMarkers = ({ sensors, sensorId, technicians, techniciansSelected }, mapType) => {
  switch (mapType) {
    case 'alert':
      const issueSensors = sensors.filter(s => s.has_issue)
      return convertAlertsToMarkers(issueSensors, sensorId)
    case 'sensor':
      return convertSensorsToMarkers(sensors)
    case 'technician':
      return convertTechniciansToMarkers(technicians, techniciansSelected)
    default:
      return []
  }
}

const getDefaultMapType = mode => {
  switch (mode) {
    case 'sensor':
      return mapTypes[0].value
    case 'alert':
      return mapTypes[1].value
    case 'technician':
      return mapTypes[2].value
    case 'multiple':
    default:
      return mapTypes[1].value
  }
}

function OverviewMap(props) {
  const {
    hideTitle,
    searchSensors,
    searchTechnicians,
    selectSensor,
    selectTechnician,
    sensorId,
    sensors,
    techniciansSelected
  } = props
  const mode = props.mode || 'multiple'

  const [filter, setFilter] = useState('')
  const [query, setQuery] = useState('')
  const [mapType, setMapType] = useState(getDefaultMapType(mode))
  const markers = getMarkers(props, mapType)

  useEffect(() => {
    const params = { q: query }

    if (mapType === 'technician') {
      searchTechnicians({ params })
    } else {
      searchSensors({ params })
    }
  }, [mapType, query, searchSensors, searchTechnicians])

  useEffect(() => {
    if (findIndex(sensors, { has_issue: true, id: sensorId }) < 0) {
      const i = findIndex(sensors, { has_issue: true })
      if (i >= 0) {
        selectSensor({ id: sensors[i].id })
      }
    }
  }, [selectSensor, sensors, sensorId])

  const handleMarkerClick = marker => {
    if (marker.type === 'technician') {
      selectTechnician({
        id: marker.id,
        turnActive: !techniciansSelected.includes(marker.id)
      })
    } else if (marker.type === 'alert') {
      selectSensor({ id: marker.id })
    }
  }

  const handleFilterChange = e => {
    setFilter(e.target.value)
    e.target.value.length === 0 && setQuery('')
  }

  const handleSubmit = e => {
    setQuery(filter)
    e.preventDefault()
  }

  const handleMapTypeChange = mapType => {
    setQuery(filter)
    setMapType(mapType)
  }

  return (
    <div className="OverviewMap">
      <Form className="OverviewMap__header" onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Form.Group as={Col} controlId="location" className={cn('d-flex align-items-center', 'mb-0 col-12 col-sm')}>
            {!hideTitle && (
              <Form.Label className="mb-0 mr-3">
                <Typography variant="subtitle" uppercase>
                  Location
                </Typography>
              </Form.Label>
            )}

            <SearchInput
              type="text"
              placeholder="Find a location..."
              autoComplete="off"
              className="OverviewMap__search"
              value={filter}
              onChange={handleFilterChange}
            />
          </Form.Group>

          {mode === 'multiple' && <MapTypeOptions onChange={handleMapTypeChange} value={mapType} />}
        </Form.Row>
      </Form>

      <UtilityMap className="OverviewMap__body" markers={markers} onMarkerClick={handleMarkerClick} />
    </div>
  )
}

const selector = createStructuredSelector({
  sensors: sensorsSearchResultsSelector,
  sensorId: sensorSelectedSelector,
  technicians: techniciansSearchResultsSelector,
  techniciansSelected: techniciansSelectedListSelector
})

const actions = {
  searchSensors,
  searchTechnicians,
  selectTechnician,
  selectSensor
}

export default connect(
  selector,
  actions
)(OverviewMap)
