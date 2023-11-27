import { handleActions } from 'redux-actions'
import fp from 'lodash/fp'
import { REQUEST_SUCCESS } from '../api'
import { SELECT_RESOURCE_ALLOCATION } from './types'

const init = {
  calendar: []
}

export default handleActions({
  [SELECT_RESOURCE_ALLOCATION]: (state, { payload }) => {
    const { id, turnActive } = payload

    if (turnActive) {
      return state
    }

    const calendar = fp.compose(
      fp.remove({ id }),
      fp.get('calendar')
    )(state)

    return fp.set('calendar', calendar)(state)
  },

  [REQUEST_SUCCESS]: (state, { payload }) => {
    const { selectorKey } = payload

    switch (selectorKey) {
      case 'resourceAllocationsCalendar':
        const { data, id } = payload.data
        const calendar = data.map(item => item.date)
        const index = fp.findIndex({ id })(state)
        
        if (index < 0) {
          const calendarList = fp.compose(
            fp.concat({ id, data: calendar }),
            fp.get('calendar')
          )(state)
          return fp.set('calendar', calendarList, state)
        } else {
          return fp.set(`calendar[${id}]`, calendar)(state)
        }

      default:
        return state
    }
  }
}, init)
