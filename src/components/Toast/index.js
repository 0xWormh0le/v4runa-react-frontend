import React from 'react'
import cn from 'classnames'
import Toast from 'react-bootstrap/Toast'
import Typography from 'components/Typography'
import './Toast.scss'

export default ({ className, title, children, icon: Icon, ...other }) => (
  <Toast className={cn('Toast', className)} {...other}>
    <Toast.Body className="d-flex">
      {Icon && (
        <div className="mr-3">
          <Icon className="display-4" />
        </div>
      )}
      <div>
        <Typography as={'h5'} gutterBottom>
          <strong>{title}</strong>
        </Typography>
        <Typography>{children}</Typography>
      </div>
    </Toast.Body>
  </Toast>
)
