import fp from 'lodash/fp'
import { dataSelector, isRequestPending } from '../api'

const subSelector = (subname, defaultValue = null) =>
  fp.compose(
    fp.defaultTo(defaultValue),
    fp.get(subname),
    fp.get('resourceAllocation')
  )

export const resourceAllocationsListSelector = dataSelector('resourceAllocationsList', [])

export const resourceAllocationsListLoadingSelector = isRequestPending('resourceAllocationsList', 'get')

export const resourceAllocationsSearchResultsSelector = dataSelector('resourceAllocationsSearchResults', [])

export const resourceAllocationsSearchResultsLoadingSelector = isRequestPending(
  'resourceAllocationsSearchResults',
  'get'
)

export const resourceAllocationCalendarSelector = subSelector('calendar', [])

export const resourceAllocationsSeletedListSelector = fp.compose(
  fp.map('id'),
  subSelector('calendar', [])
)
