import React, { useCallback } from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Typography from 'components/Typography'
import Toast from 'components/Toast'
import { withUserProfile } from 'hocs/withAuth'

import IconHouse from 'icons/IconHouse'
import IconAlert from 'icons/IconErrorTriangle'
import IconDesktop from 'icons/IconDesktop'
import IconData from 'icons/IconData'
import IconQuestion from 'icons/IconQuestionAlt'
import { USER_ROLE } from 'config/constants'

import { isRequestSuccess } from 'store/modules/api'
import { approvedSelector, waterUtilitySelector } from 'store/modules/auth'

import './Landing.scss'

const adminCards = [
  [IconHouse, 'Overview', 'View a summary of alerts, quality, insights and resources', '/overview'],
  [],
  [IconAlert, 'Alerts', 'View and take action on current alerts and generate necessary reports', '/alerts'],
  [
    IconData,
    'Quality',
    'View and take action on current state of quality and generate interactive consumer confidence reports',
    '/quality'
  ],
  [
    IconDesktop,
    'Resources',
    'View and allocate the necessary resources to address all operational issues and alerts',
    '/resources/assets'
  ],
  [
    IconQuestion,
    'Insights',
    'Get recommendations on the optimal actions for alerts/issues, view prognosis and trends and create plans for system management',
    '/insights/prognosis'
  ]
]

const userCards = [
  [],
  [],
  [IconHouse, 'Overview', 'View a summary of alerts, quality, insights and resources', '/overview'],
  [IconAlert, 'Alerts', 'View and take action on current alerts and generate necessary reports', '/alerts'],
  [
    IconData,
    'Quality',
    'View and take action on current state of quality and generate interactive consumer confidence reports',
    '/quality'
  ]
]

const toasts = {
  approval: [
    'Please wait for our approval',
    'Your signup request has been sent to Varuna. Please be patient till we will review your request and let you know.'
  ],
  noWaterUtility: ['You are not assigned water utility', 'Please contact admin for this matter. seyi@varunaiot.com']
}

function Landing(props) {
  const { approved, waterUtility, profileSuccess, profile } = props

  const getCards = useCallback(() => {
    if (!profile) {
      return []
    }
    if (profile.role === USER_ROLE.Admin) {
      return adminCards
    }
    return userCards
  }, [profile])

  const getDisabled = useCallback(() => {
    if (!profile) {
      return true
    }
    if (profile.role === USER_ROLE.Admin) {
      return false
    }
    if (waterUtility && approved) {
      return false
    }
    return true
  }, [waterUtility, approved, profile])

  const getToast = useCallback(() => {
    if (!profile) {
      return null
    }
    if (profile.role === USER_ROLE.Admin) {
      return null
    }
    if (!approved && profileSuccess) {
      return toasts['approval']
    }
    if (!approved && profile && !profileSuccess) {
      return toasts['approval']
    }
    if (!waterUtility && profileSuccess) {
      return toasts['noWaterUtility']
    }
    if (!waterUtility && profile && !profileSuccess) {
      return toasts['noWaterUtility']
    }
    return null
  }, [approved, waterUtility, profileSuccess, profile])

  const cards = getCards()

  const disabled = getDisabled()

  const toast = getToast()

  return (
    <Container fluid className="Landing">
      <div className="Landing__body">
        <div className="Landing__tile Landing__welcome">
          <Typography uppercase className="Landing__title-welcome">
            Welcome
          </Typography>
          <Typography uppercase className="Landing__title-begin">
            Where would you like to begin?
          </Typography>
        </div>

        {cards.map(([Icon, title, desc, link], key) => (
          <div className={cn('Landing__tile', { 'p-0': !Icon })} key={key}>
            {Icon && (
              <Card key={key} className="Landing__card">
                <Card.Body className="Landing__card-body text-center">
                  <div>
                    <Icon className="Landing__card-icon" />
                    <Typography uppercase className="Landing__card-title">
                      {title}
                    </Typography>
                  </div>

                  <Typography className="Landing__card-desc">{desc}</Typography>

                  <div>
                    <Button as={Link} to={link} className={cn('Landing__card-button', { disabled })}>
                      {title}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )}
          </div>
        ))}
      </div>

      {toast && (
        <Toast icon={IconAlert} show={true} title={toast[0]}>
          <Typography>{toast[1]}</Typography>
        </Toast>
      )}
    </Container>
  )
}

const selector = createStructuredSelector({
  approved: approvedSelector,
  waterUtility: waterUtilitySelector,
  profileSuccess: isRequestSuccess('profile')
})

export default compose(withUserProfile, connect(selector))(Landing)
