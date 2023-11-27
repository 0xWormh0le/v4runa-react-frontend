import React from 'react'
import cn from 'classnames'
import { css } from 'emotion'
// First way to import
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 150px;
`

const Loader = ({ top, size, color, className }) => (
  <div className={cn('Loader text-center', className)} style={{ marginTop: `${top}%` }}>
    <BeatLoader className={override} sizeUnit={'px'} size={size || 30} color={color || '#437fad'} loading={true} />
  </div>
)

export default Loader
