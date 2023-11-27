import { takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import { GET_WATER_UTILITY } from './types'

const getWaterUtility = apiCallSaga({
  type: GET_WATER_UTILITY,
  method: 'get',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/utilities/${payload.id}/`,
  selectorKey: ({ payload }) => `waterUtility/${payload.id}`
})

export default function* rootSaga() {
  yield takeLatest(GET_WATER_UTILITY, getWaterUtility)
}
