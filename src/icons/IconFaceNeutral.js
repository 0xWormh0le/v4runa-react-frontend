import React from 'react'
import SvgIcon from 'components/SvgIcon'

const a = {
  fill: 'none',
  strokeMiterlimit: 10,
  strokeWidth: '3px',
  stroke: 'currentColor'
}

const b = {
  stroke: 'currentColor',
  fill: 'currentColor'
}

const c = {
  fill: 'none',
  strokeMiterlimit: 10,
  strokeWidth: '3px',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

const IconFaceNeutral = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 48.8 48.8" {...props}>
    <g transform="translate(1.5 1.5)">
      <ellipse style={a} cx="22.75" cy="22.75" rx="22.75" ry="22.75" transform="translate(0)" />
      <g transform="translate(13.264 13.788)">
        <ellipse style={b} cx="2.057" cy="2.057" rx="2.057" ry="2.057" />
        <ellipse style={b} cx="2.057" cy="2.057" rx="2.057" ry="2.057" transform="translate(14.859)" />
      </g>
      <line style={c} x2="15.266" transform="translate(15.414 31.994)" />
    </g>
  </SvgIcon>
)

export default IconFaceNeutral
