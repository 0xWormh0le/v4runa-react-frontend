import React, { useRef } from 'react'
import cn from 'classnames'
import { fitBounds } from 'google-map-react/utils'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

import { getBoundsForMarkers } from 'utils/geo'
import { GOOGLE_MAP_KEY } from 'config/constants'
import { MarkerType } from 'utils/propTypes'
import Marker from 'components/Marker'

import './UtilityMap.scss'

const MAP_SPACING = 30

const UtilityMap = ({ markers, className, onMarkerClick }) => {
  const bounds = getBoundsForMarkers(markers)
  const wrapperEl = useRef(null)
  const size = wrapperEl.current
    ? {
        width: wrapperEl.current.offsetWidth - MAP_SPACING,
        height: wrapperEl.current.offsetHeight - MAP_SPACING
      }
    : {
        width: window.innerWidth - MAP_SPACING,
        height: window.innerHeight - MAP_SPACING
      }
  const { center, zoom } = fitBounds(bounds, size)

  return (
    <div className={cn(className, 'UtilityMap')} ref={wrapperEl}>
      <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }} center={center} zoom={zoom || 0.5}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.latitude}
            lng={marker.longitude}
            type={marker.type}
            value={marker.value}
            onClick={() => onMarkerClick(marker)}
            className={cn('UtilityMap__marker', `UtilityMap__marker--${marker.type}`, {
              [`UtilityMap__marker--${marker.type}-selected`]: marker.selected
            })}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

UtilityMap.propTypes = {
  markers: PropTypes.arrayOf(MarkerType).isRequired,
  className: PropTypes.string
}

export default UtilityMap
