import { createAction } from 'redux-actions'

import * as types from './types'

export const getReportsList = createAction(types.GET_REPORTS_LIST)

export const getReport = createAction(types.GET_REPORT)

export const createReport = createAction(types.CREATE_REPORT)

export const updateReport = createAction(types.UPDATE_REPORT)

export const deleteReport = createAction(types.DELETE_REPORT)
