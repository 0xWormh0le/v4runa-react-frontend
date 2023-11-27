import { createAction } from 'redux-actions'

import * as types from './types'

export const getMonthlyReportList = createAction(types.GET_MONTHLY_REPORT_LIST)
export const getMonthlyReportFile = createAction(types.GET_MONTHLY_REPORT_FILE)
