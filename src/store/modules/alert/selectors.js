import { dataSelector, isRequestPending } from '../api'
import { EMPTY_PAGINATED_LIST } from 'config/constants'
import fp from 'lodash/fp'

export const alertsListSelector = dataSelector('alertsList', EMPTY_PAGINATED_LIST)

export const alertsListLoadingSelector = isRequestPending('alertsList', 'get')

export const alertsSearchResultsSelector = dataSelector('alertsSearchResults', [])

export const sensorsFromAlertsSelector = fp.compose(
  fp.map(fp.get('sensor')),
  fp.get('results'),
  alertsListSelector
)
