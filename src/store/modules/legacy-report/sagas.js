import { takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import { CREATE_REPORT, DELETE_REPORT, GET_REPORT, GET_REPORTS_LIST, UPDATE_REPORT } from './types'

const getReportsList = apiCallSaga({
  type: GET_REPORTS_LIST,
  method: 'get',
  allowedParamKeys: [],
  path: '/api/legacy-reports/',
  selectorKey: 'reportsList'
})

const getReport = apiCallSaga({
  type: GET_REPORT,
  method: 'get',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/legacy-reports/${payload.id}/`,
  selectorKey: 'reportDetails'
})

const createReport = apiCallSaga({
  type: CREATE_REPORT,
  method: 'post',
  allowedParamKeys: [],
  path: ({ payload }) => '/api/legacy-reports/',
  selectorKey: 'reportDetails'
})

const updateReport = apiCallSaga({
  type: UPDATE_REPORT,
  method: 'patch',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/legacy-reports/${payload.id}/`,
  selectorKey: 'reportDetails'
})

const deleteReport = apiCallSaga({
  type: DELETE_REPORT,
  method: 'delete',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/legacy-reports/${payload.id}/`,
  selectorKey: 'reportDetails'
})

export default function* rootSaga() {
  yield takeLatest(CREATE_REPORT, createReport)
  yield takeLatest(GET_REPORT, getReport)
  yield takeLatest(GET_REPORTS_LIST, getReportsList)
  yield takeLatest(UPDATE_REPORT, updateReport)
  yield takeLatest(DELETE_REPORT, deleteReport)
}
