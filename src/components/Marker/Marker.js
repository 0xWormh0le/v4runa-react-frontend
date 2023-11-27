import React from 'react'
import cn from 'classnames'
import IconErrorTriangle from 'icons/IconErrorTriangle'
import IconAlert from 'icons/IconErrorTriangle'
import IconSensorNormal from 'icons/IconBatteryCharged'
import IconSensorAbnormal from 'icons/IconBatteryWarning'
import IconTechnician from 'icons/IconProfile'

const markerIcons = {
  alert: IconAlert,
  sensorNormal: IconSensorNormal,
  sensorAbnormal: IconSensorAbnormal,
  technician: IconTechnician
}

const maxContaminant = 40
const maxRadius = 40
const minRadius = 15

const Marker = ({ className, type, value, onClick }) => {
  if (type === 'chemical') {
    const color = '#1d87b5'
    const r = (value * (maxRadius - minRadius)) / maxContaminant + minRadius
    const opacity = Math.round((value * 255) / maxContaminant)
    const opacityHex = opacity.toString(16)
    const twoDigitOpacityHex = opacityHex.length === 1 ? `0${opacityHex}` : opacityHex
    const outerStyle = {
      border: `solid 2px ${color}`,
      width: `${r}px`,
      height: `${r}px`,
      backgroundColor: 'white'
    }
    const innerStyle = {
      backgroundColor: `${color}${twoDigitOpacityHex}`
    }

    return (
      <div style={outerStyle} className={cn('Marker', 'rounded-circle', className)} onClick={onClick}>
        <div className="w-100 h-100 rounded-circle" style={innerStyle}></div>
      </div>
    )
  } else {
    const Icon = markerIcons[type] || IconErrorTriangle
    return <Icon className={cn('Marker', className)} onClick={onClick} />
  }
}

export default Marker
