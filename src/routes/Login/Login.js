import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Field, Formik } from 'formik'
import * as Yup from 'yup'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import FormInput from 'components/FormInput'
import Loader from 'components/Loader'
import Typography from 'components/Typography'
import Toast from 'components/Toast'

import { login } from 'store/modules/auth'
import { formSubmit } from 'utils/form'
import { isNotAuthenticatedOrRedir } from 'hocs/withAuth'

import IconArrowLeft from 'icons/IconArrowLeft'
import IconLogo from 'icons/IconLogo'
import IconCheck from 'icons/IconCheckAlt'

import './Login.scss'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
})

const loginInit = {
  email: '',
  password: ''
}

const LoginForm = ({ handleSubmit, isSubmitting }) => (
  <form className="LoginForm" onSubmit={handleSubmit}>
    <Field name="email" type="email" placeholder="Email" component={FormInput} autoFocus />
    <Field name="password" type="password" placeholder="Password" component={FormInput} />

    <div className="d-flex justify-content-between">
      <Field name="rememberme" type="checkbox" label="Remember me" component={FormInput} />
      <Link to="/forgot-password">
        <Typography className="text-right">
          <small>Forgot your password?</small>
        </Typography>
      </Link>
    </div>

    <div className="d-flex justify-content-between flex-wrap">
      <Link to="/" className="d-flex align-items-center mt-2">
        <IconArrowLeft className="Login__left-arrow mr-2" />
        <Typography>Go to home</Typography>
      </Link>
      <div className="d-flex justify-content-end flex-grow-1 mt-2">
        <Link to="/signup" className="d-flex">
          <Typography className="m-auto">Sign up</Typography>
        </Link>
        <Button variant="primary" type="submit" className="ml-3" disabled={isSubmitting}>
          <Typography uppercase as="h6">
            Login
          </Typography>
        </Button>
      </div>
    </div>
    {isSubmitting && <Loader size={10} top={5} className="Login__loader" />}
  </form>
)

function Login({ login }) {
  const [message, setMessage] = useState()

  const signupEmail = sessionStorage.getItem('signup')
  const initValues = signupEmail ? { ...loginInit, email: signupEmail } : loginInit
  sessionStorage.clear()

  const handleLoginSubmit = (values, formActions) => {
    setMessage(null)
    formSubmit(
      login,
      {
        data: values,
        fail: ({ status }) => setMessage(status === 401 ? 'Oops! Credential is incorrect.' : 'Network error')
      },
      formActions
    )
  }

  return (
    <div className="Login">
      <Card className="shadow Login__card">
        <Card.Body className="p-0 d-flex flex-column justify-content-center">
          <IconLogo className="Login__logo" />
          <Formik
            component={LoginForm}
            onSubmit={handleLoginSubmit}
            validationSchema={loginValidationSchema}
            initialValues={initValues}
          />
          {message && <Typography className="text-danger text-center font-weight-bold mt-3">{message}</Typography>}
        </Card.Body>
      </Card>

      {signupEmail && (
        <Toast icon={IconCheck} show={true} title="Signup Success">
          <Typography>
            Your signup request has been sent to Varuna.
            <br />
            Please be patient till we will review your request and let you know.
          </Typography>
        </Toast>
      )}
    </div>
  )
}

const actions = {
  login
}

export default compose(isNotAuthenticatedOrRedir, connect(null, actions))(Login)
