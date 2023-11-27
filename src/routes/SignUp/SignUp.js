import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import cn from 'classnames'

import axios from 'axios'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import AsyncPaginate from 'react-select-async-paginate'

import FormInput from 'components/FormInput'
import Loader from 'components/Loader'
import Typography from 'components/Typography'
import { formSubmit } from 'utils/form'
import { isNotAuthenticatedOrRedir } from 'hocs/withAuth'
import IconArrowLeft from 'icons/IconArrowLeft'
import IconLogo from 'icons/IconLogo.js'
import { registerUser } from 'store/modules/auth'
import { USER_ROLE } from 'config/constants'

import './SignUp.scss'

const phoneValidator = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should longer than 5'),
  passwordConfirm: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passsword does not match'),
  phoneNumber: Yup.string()
    .matches(phoneValidator, 'Invalid phone number')
    .required('Phone number is requried'),
  userType: Yup.string().required('Subscribe type is required'),
  waterUtility: Yup.number().required('Water utility is requried'),
  description: Yup.string().required('Description is required')
})

const signupInit = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phoneNumber: '',
  description: '',
  waterUtility: '',
  userType: USER_ROLE.Technician
}

const userTypes = [
  [USER_ROLE.GeneralManager, 'General Manager'],
  [USER_ROLE.OperationManager, 'Operation Manager'],
  [USER_ROLE.Customer, 'Customer'],
  [USER_ROLE.Technician, 'Technician']
]

const UserType = ({ className, field, form, label }) => (
  <Form.Group controlId={field.name} className={cn('FormInput', className)}>
    <Form.Label>{label}</Form.Label>
    <div className="border rounded px-3 py-2">
      {userTypes.map(([userType, label], key) => (
        <Form.Check
          key={key}
          type="radio"
          id={`usertype-${userType}`}
          value={userType}
          checked={parseInt(form.values[field.name]) === userType}
          name={field.name}
          onChange={field.onChange}
          disabled={form.isSubmitting}
          onBlur={field.onBlur}
          label={label}
        />
      ))}
    </div>
  </Form.Group>
)

function WaterUtilitySelect({ className, field, form, label }) {
  const [value, setValue] = useState('')
  const error = form.touched[field.name] && form.errors[field.name]

  const loadOptions = async (search, loadedOptions, { page }) => {
    const host = process.env.REACT_APP_API_HOST
    const response = await fetch(`${host}/api/utilities/autocomplete/?q=${search}&page=${page}`)
    const json = await response.json()

    return {
      options: json.results.map(({ id, name }) => ({ value: id, label: name })),
      hasMore: !!json.next,
      additional: {
        page: page + 1
      }
    }
  }

  const handleBlur = () => form.setFieldTouched(field.name, true)

  const handleChange = value => {
    setValue(value)
    form.setFieldValue(field.name, value.value)
  }

  return (
    <Form.Group controlId={field.name} className={cn('FormInput', className)}>
      <Form.Label>{label}</Form.Label>
      <AsyncPaginate
        value={value}
        loadOptions={loadOptions}
        debounceTimeout={500}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn('SignUp__utility-select', { 'is-invalid': !!error })}
        classNamePrefix="UtilitySelect"
        isDisabled={form.isSubmitting}
        additional={{
          page: 1
        }}
      />
      {error && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

const SignupForm = ({ handleSubmit, isSubmitting }) => {
  const validateEmail = email => {
    const host = process.env.REACT_APP_API_HOST
    if (!email) {
      return null
    }
    return axios
      .get(`${host}/api/auth/email/duplicate`, {
        params: { email }
      })
      .then(
        ({ data }) => data.duplicate && 'Email is already in use',
        () => {}
      )
  }

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} sm={6} className="pr-sm-4">
          <Field
            name="firstName"
            type="input"
            placeholder="John"
            component={FormInput}
            label="First Name"
            maxLength={32}
            autoFocus
          />
          <Field
            name="lastName"
            type="input"
            placeholder="Smith"
            component={FormInput}
            label="Last Name"
            maxLength={32}
          />
          <Field
            name="email"
            type="email"
            placeholder="john.smith@gmail.com"
            validate={validateEmail}
            component={FormInput}
            label="Email"
            maxLength={32}
          />
          <Field name="password" type="password" component={FormInput} label="Password" />
          <Field name="passwordConfirm" type="password" component={FormInput} label="Confirm Password" />
        </Col>
        <Col xs={12} sm={6} className="pl-sm-4">
          <Field
            name="phoneNumber"
            type="input"
            placeholder="275 582 7642"
            component={FormInput}
            label="Phone Number"
            maxLength={12}
          />
          <Field name="waterUtility" component={WaterUtilitySelect} label="Water Utility" />
          <Field name="userType" component={UserType} label="Subscribe Type" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Field
            name="description"
            type="input"
            multiline
            placeholder="What do you want to talk to Admin?"
            component={FormInput}
            maxLength={1024}
            label="Description"
          />
        </Col>
      </Row>

      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center">
          <IconArrowLeft className="Login__left-arrow mr-2" />
          <Typography>Go to home</Typography>
        </Link>
        {isSubmitting && <Loader size={10} />}
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          <Typography uppercase as="h6">
            Sign up
          </Typography>
        </Button>
      </div>
    </form>
  )
}

function SignUp({ registerUser, history }) {
  const [failed, setFailed] = useState(false)

  const handleSignupSubmit = (values, formActions) => {
    setFailed(false)
    formSubmit(
      registerUser,
      {
        data: {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          password: values.password,
          role: values.userType,
          profile: {
            phone_number: values.phoneNumber,
            subscribe_desc: values.description,
            water_utility: values.waterUtility
          }
        },
        success: () => {
          sessionStorage.setItem('signup', values.email)
          history.push('/login')
        },
        fail: () => setFailed(true)
      },
      formActions
    )
  }

  return (
    <div className="Login SignUp">
      <Card className="shadow Login__card">
        <Card.Body className="p-0 d-flex flex-column justify-content-center">
          <IconLogo className="Login__logo" />
          <Formik
            validateOnChange={false}
            component={SignupForm}
            onSubmit={handleSignupSubmit}
            validationSchema={signupValidationSchema}
            initialValues={signupInit}
          />
          {failed && <Typography className="text-danger text-center font-weight-bold mt-3">Signup failed</Typography>}
        </Card.Body>
      </Card>
    </div>
  )
}

const actions = {
  registerUser
}

export default compose(isNotAuthenticatedOrRedir, withRouter, connect(null, actions))(SignUp)
