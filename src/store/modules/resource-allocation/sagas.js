import { takeLatest, call } from 'redux-saga/effects'

import { apiCallSaga } from '../api'
import {
  GET_RESOURCE_ALLOCATIONS_LIST,
  SEARCH_RESOURCE_ALLOCATIONS,
  SELECT_RESOURCE_ALLOCATION,
  GET_RESOURCE_ALLOCATION_CALENDAR
} from './types'

const getResourceAllocationsList = apiCallSaga({
  type: GET_RESOURCE_ALLOCATIONS_LIST,
  method: 'get',
  allowedParamKeys: [],
  path: '/api/resource-allocations/',
  selectorKey: 'resourceAllocationsList'
})

const searchResourceAllocations = apiCallSaga({
  type: SEARCH_RESOURCE_ALLOCATIONS,
  method: 'get',
  allowedParamKeys: ['q'],
  path: '/api/resource-allocations/search/',
  selectorKey: 'resourceAllocationsSearchResults'
})

const getResourceAllocationCalendar = apiCallSaga({
  type: GET_RESOURCE_ALLOCATION_CALENDAR,
  method: 'get',
  allowedParamKeys: [],
  path: ({ payload }) => `/api/resource-allocations/${payload.id}/calendar/`,
  payloadOnSuccess: (data, action) => ({ data, id: action.payload.id }),
  selectorKey: 'resourceAllocationsCalendar'
})

const selectResourceAllocation = function* (action) {
  if (action.payload.turnActive) {
    yield call(getResourceAllocationCalendar, action)
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_RESOURCE_ALLOCATIONS_LIST, getResourceAllocationsList)
  yield takeLatest(SEARCH_RESOURCE_ALLOCATIONS, searchResourceAllocations)
  yield takeLatest(SELECT_RESOURCE_ALLOCATION, selectResourceAllocation)
}
