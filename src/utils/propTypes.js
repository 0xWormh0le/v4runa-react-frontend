import PropTypes from 'prop-types'

export const PaginatedListType = PropTypes.shape({
  results: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string
})

export const MarkerType = PropTypes.shape({
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  value: PropTypes.any,
  type: PropTypes.oneOf(['alert', 'sensorNormal', 'sensorAbnormal', 'technician', 'chemical'])
})
