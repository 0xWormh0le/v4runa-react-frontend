import { createAction } from 'redux-actions'

import * as types from './types'

export const getAlertsList = createAction(types.GET_ALERTS_LIST)
export const searchAlerts = createAction(types.SEARCH_ALERTS)
