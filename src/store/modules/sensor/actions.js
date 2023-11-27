import { createAction } from 'redux-actions'

import * as types from './types'

export const getSensorsList = createAction(types.GET_SENSORS_LIST)
export const getSensorDataRecordsList = createAction(types.GET_SENSOR_DATA_RECORDS_LIST)
export const getSensorDataRecordTrend = createAction(types.GET_SENSOR_DATA_RECORD_TREND)
export const getLatestSensorChemical = createAction(types.GET_LATEST_SENSOR_CHEMICAL)
export const searchSensors = createAction(types.SEARCH_SENSORS)
export const searchSensorsChemical = createAction(types.SEARCH_SENSORS_CHEMICAL)
export const selectSensor = createAction(types.SELECT_SENSOR)
