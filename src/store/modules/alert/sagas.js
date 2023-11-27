import { takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import { GET_ALERTS_LIST, SEARCH_ALERTS } from './types'

const getAlertsList = apiCallSaga({
  type: GET_ALERTS_LIST,
  method: 'get',
  allowedParamKeys: [],
  path: '/api/alerts/',
  selectorKey: 'alertsList'
})

const searchAlerts = apiCallSaga({
  type: SEARCH_ALERTS,
  method: 'get',
  allowedParamKeys: ['q'],
  path: ({ payload }) => {
    if (payload && payload.sensorId) {
      return `/api/alerts/sensors/${payload.sensorId}/search/`
    } else {
      return `/api/alerts/search/`
    }
  },
  selectorKey: 'alertsSearchResults'
})

export default function* rootSaga() {
  yield takeLatest(GET_ALERTS_LIST, getAlertsList)
  yield takeLatest(SEARCH_ALERTS, searchAlerts)
}
