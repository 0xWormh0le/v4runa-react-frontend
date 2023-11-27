import { handleActions } from 'redux-actions'
import fp from 'lodash/fp'
import { REQUEST_SUCCESS } from '../api'
import { SELECT_SENSOR } from './types'
import { CHEMICAL_TYPES } from 'config/constants'

const sensorDataRecordTrend = {}

CHEMICAL_TYPES.forEach(type => (sensorDataRecordTrend[type] = []))

const init = {
  selectedSensor: null,
  sensorDataRecordTrend
}

export default handleActions(
  {
    [SELECT_SENSOR]: (state, { payload }) => {
      const { id } = payload
      return fp.set('selectedSensor', id)(state)
    },

    [REQUEST_SUCCESS]: (state, { payload }) => {
      const {
        selectorKey,
        data: { res, page, chemical }
      } = payload

      switch (selectorKey) {
        case 'sensorDataRecords':
          const records =
            page === 1
              ? []
              : fp.compose(
                  fp.defaultTo([]),
                  fp.get('sensorDataRecords.results.records')
                )(state)

          return fp.compose(
            fp.set('sensorDataRecords.results.records', records.concat(res.results.records)),
            fp.set('sensorDataRecords.results.end_date', res.results.end_date),
            fp.set('sensorDataRecords.results.start_date', res.results.start_date),
            fp.set('sensorDataRecords.count', res.count),
            fp.set('sensorDataRecords.links', res.links)
          )(state)

        case 'sensorDataRecordTrend':
          return fp.compose(fp.set(`sensorDataRecordTrend.${chemical}`, res.results.records))(state)

        default:
          return state
      }
    }
  },
  init
)
