import React from 'react'
import Form from 'react-bootstrap/Form'
import cn from 'classnames'

import './SearchInput.scss'

export default ({ className, ...other }) => (
  <Form.Control type="text" className={cn('SearchInput', className)} {...other} />
)
