import React, { useState } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import * as Yup from 'yup'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Loader from 'components/Loader'

import Typography from 'components/Typography'
import FormInput from 'components/FormInput'
import { Field, Formik } from 'formik'
import { formSubmit } from 'utils/form'
import { changePassword } from 'store/modules/auth'

import './ChangePassword.scss'

const validationSchema = Yup.object().shape({
  current_password: Yup.string().required('Current password is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should longer than 5'),
  passwordConfirm: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passsword does not match')
})

const initValues = {
  current_password: '',
  password: '',
  passwordConfirm: ''
}

const MESSAGE = {
  Success: [true, 'Password has been updated.'],
  NeworkError: [false, 'Network Error'],
  Incorrect: [false, 'Current password is incorrect'],
  Other: [false, 'Failed to update password. Please try again later.']
}

const PasswordForm = ({ handleSubmit, isSubmitting }) => (
  <form className="PasswordForm" onSubmit={handleSubmit}>
    <Row>
      <Col>
        <Field
          name="current_password"
          type="password"
          placeholder="Current Password"
          component={FormInput}
          label="Current Password"
          autoFocus
        />
        <Field name="password" type="password" placeholder="New Password" component={FormInput} />
        <Field name="passwordConfirm" type="password" placeholder="Comfirm your password" component={FormInput} />
      </Col>
    </Row>

    <Row>
      <Col className="text-center">
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Change Password
        </Button>
        {isSubmitting && <Loader size={10} className="mt-3" />}
      </Col>
    </Row>
  </form>
)

function ChangePassword({ changePassword }) {
  const [message, setMessage] = useState(null)

  const handleSubmit = (values, formActions) => {
    setMessage(null)
    formSubmit(
      changePassword,
      {
        data: values,
        success: () => {
          formActions.setValues(initValues, false)
          setMessage(MESSAGE.Success)
        },
        fail: ({ status }) => {
          // MESSAGE.Other
          if (status === 400) {
            setMessage(MESSAGE.Incorrect)
          } else {
            setMessage(MESSAGE.NeworkError)
          }
        }
      },
      formActions
    )
  }

  return (
    <Card className="ChangePassword">
      <Card.Body>
        <Typography variant="subtitle" className="mb-3">
          Change Password
        </Typography>
        <Formik
          component={PasswordForm}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initValues}
        />
        {message && (
          <Typography className={cn('text-center font-weight-bold mt-3', message[0] ? 'text-success' : 'text-danger')}>
            {message[1]}
          </Typography>
        )}
      </Card.Body>
    </Card>
  )
}

const actions = {
  changePassword
}

export default connect(null, actions)(ChangePassword)
