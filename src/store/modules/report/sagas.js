import { takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import { GET_MONTHLY_REPORT_LIST, GET_MONTHLY_REPORT_FILE } from './types'

const getMonthlyReportList = apiCallSaga({
  type: GET_MONTHLY_REPORT_LIST,
  method: 'get',
  allowedParamKeys: [],
  path: '/api/reports/monthly-reports/',
  selectorKey: 'monthlyReportList'
})

const getMonthlyReportFile = apiCallSaga({
  type: GET_MONTHLY_REPORT_FILE,
  method: 'get',
  allowedParamKeys: ['view'],
  path: ({ payload }) => `/download/monthly-report/${payload.id}/`
})

export default function* rootSaga() {
  yield takeLatest(GET_MONTHLY_REPORT_LIST, getMonthlyReportList)
  yield takeLatest(GET_MONTHLY_REPORT_FILE, getMonthlyReportFile)
}
