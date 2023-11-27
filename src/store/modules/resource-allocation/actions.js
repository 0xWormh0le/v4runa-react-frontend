import { createAction } from 'redux-actions'

import * as types from './types'

export const getResourceAllocationsList = createAction(types.GET_RESOURCE_ALLOCATIONS_LIST)
export const searchResourceAllocations = createAction(types.SEARCH_RESOURCE_ALLOCATIONS)
export const selectResourceAllocation = createAction(types.SELECT_RESOURCE_ALLOCATION)
export const getResourceAllocationCalendar = createAction(types.GET_RESOURCE_ALLOCATION_CALENDAR)
