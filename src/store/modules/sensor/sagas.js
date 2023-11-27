import { takeLatest, takeEvery } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import {
  GET_SENSORS_LIST,
  SEARCH_SENSORS,
  SEARCH_SENSORS_CHEMICAL,
  GET_SENSOR_DATA_RECORDS_LIST,
  GET_SENSOR_DATA_RECORD_TREND,
  GET_LATEST_SENSOR_CHEMICAL
} from './types'

const getSensorsList = apiCallSaga({
  type: GET_SENSORS_LIST,
  method: 'get',
  allowedParamKeys: [],
  path: '/api/sensors/',
  selectorKey: 'sensorsList'
})

const searchSensors = apiCallSaga({
  type: SEARCH_SENSORS,
  method: 'get',
  allowedParamKeys: ['q'],
  path: '/api/sensors/search/',
  selectorKey: 'sensorsSearchResults'
})

const searchSensorsChemical = apiCallSaga({
  type: SEARCH_SENSORS_CHEMICAL,
  method: 'get',
  allowedParamKeys: ['q'],
  path: ({ payload }) => `/api/sensors/${payload.chemical}/search/`,
  selectorKey: 'sensorsChemicalSearchResults'
})

const getSensorDataRecordsList = apiCallSaga({
  type: GET_SENSOR_DATA_RECORDS_LIST,
  method: 'get',
  allowedParamKeys: ['from', 'to', 'page'],
  path: ({ payload }) => {
    if (payload.interval) {
      return `/api/sensors/${payload.id}/records/${payload.chemical}/${payload.interval}`
    } else {
      return `/api/sensors/${payload.id}/records/${payload.chemical}/`
    }
  },
  payloadOnSuccess: (res, action) => ({ res, page: action.payload.params.page }),
  selectorKey: 'sensorDataRecords'
})

const getSensorDataRecordTrend = apiCallSaga({
  type: GET_SENSOR_DATA_RECORD_TREND,
  method: 'get',
  allowedParamKeys: ['page'],
  path: ({ payload }) => {
    if (payload.interval) {
      return `/api/sensors/${payload.id}/records/${payload.chemical}/${payload.interval}`
    } else {
      return `/api/sensors/${payload.id}/records/${payload.chemical}/`
    }
  },
  payloadOnSuccess: (res, action) => ({ res, chemical: action.payload.chemical }),
  selectorKey: 'sensorDataRecordTrend'
})

const getLatestSensorChemical = apiCallSaga({
  type: GET_LATEST_SENSOR_CHEMICAL,
  method: 'get',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/sensors/${payload.id}/records/${payload.chemical}/latest/`,
  selectorKey: 'senorChemicalRecordLatest'
})

export default function* rootSaga() {
  yield takeLatest(GET_SENSORS_LIST, getSensorsList)
  yield takeLatest(SEARCH_SENSORS, searchSensors)
  yield takeLatest(SEARCH_SENSORS_CHEMICAL, searchSensorsChemical)
  yield takeLatest(GET_LATEST_SENSOR_CHEMICAL, getLatestSensorChemical)
  yield takeEvery(GET_SENSOR_DATA_RECORDS_LIST, getSensorDataRecordsList)
  yield takeEvery(GET_SENSOR_DATA_RECORD_TREND, getSensorDataRecordTrend)
}
