import React from 'react'
import cn from 'classnames'

import './Typography.scss'

const getDefaultTagName = ({ variant }) => {
  switch (variant) {
    case 'title':
      return 'h2'
    case 'subtitle':
      return 'h4'
    case 'caption':
    case 'caption-small':
    case 'figure-large':
      return 'span'
    case 'body':
    case 'body-xlarge':
    case 'body-large':
    case 'body-small':
    case 'body-xsmall':
    case 'body-xxsmall':
      return 'p'
    default:
      return 'div'
  }
}

const Typography = props => {
  const { uppercase, gutterBottom, shrinkWhenBlank, as: renderAs, children, variant, className, ...otherProps } = props
  const Tag = renderAs || getDefaultTagName(props)

  return (
    <Tag
      className={cn('Typography', `Typography--${variant}`, className, {
        'Typography--uppercase': uppercase || (variant === 'title' && !uppercase),
        'Typography--mb': gutterBottom
      })}
      {...otherProps}>
      {children || (!shrinkWhenBlank && <>&nbsp;</>)}
    </Tag>
  )
}

export default Typography
