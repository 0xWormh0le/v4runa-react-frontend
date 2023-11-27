import { dataSelector } from '../api'

export const waterUtilitySelector = id => dataSelector(`waterUtility/${id}`)
