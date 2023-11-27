import fp from 'lodash/fp'
import { dataSelector, isRequestPending } from '../api'

const subSelector = (subname, defaultValue = null) =>
  fp.compose(
    fp.defaultTo(defaultValue),
    fp.get(subname),
    fp.get('sensor')
  )

export const sensorsListSelector = dataSelector('sensorsList', [])

export const sensorsListLoadingSelector = isRequestPending('sensorsList', 'get')

export const sensorsSearchResultsSelector = dataSelector('sensorsSearchResults', [])

export const sensorsChemicalSearchResultsSelector = dataSelector('sensorsChemicalSearchResults', [])

export const sensorChemicalLatestSelector = dataSelector('senorChemicalRecordLatest')

export const sensorDataRecordsSelector = subSelector('sensorDataRecords')

export const sensorDataRecordTrendSelector = subSelector('sensorDataRecordTrend')

export const sensorSelectedSelector = subSelector('selectedSensor')
