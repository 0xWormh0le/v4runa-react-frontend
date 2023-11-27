import React from 'react'
import cn from 'classnames'
import ArrowLeftIcon from 'icons/IconArrowLeft'
import ArrowRightIcon from 'icons/IconArrowRight'
import './SliderArrow.scss'

function SliderArrow(props) {
  const { className, direction, size, onClick } = props

  return (
    <div onClick={onClick} className={cn(className, 'SliderArrow')}>
      <div
        className={cn(
          'SliderArrow__main',
          `SliderArrow__main--${size || 'xs'}`,
          direction ? 'SliderArrow__left' : 'SliderArrow__right'
        )}>
        {direction ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </div>
    </div>
  )
}

export default SliderArrow
