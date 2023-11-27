import { dataSelector, isRequestPending } from '../api'

export const reportsListSelector = dataSelector('reportsList', [])

export const reportsListLoadingSelector = isRequestPending('reportsList', 'get')

export const reportDetailsSelector = dataSelector('reportDetails')

export const reportDetailsLoadingSelector = isRequestPending('reportDetails', 'get')
