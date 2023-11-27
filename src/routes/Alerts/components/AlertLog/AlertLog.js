import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import cn from 'classnames'
import { FormattedDate, FormattedTime } from 'react-intl'

import Typography from 'components/Typography'

import IconAlert from 'icons/IconErrorTriangle'
import IconCog from 'icons/IconCog'

import { alertsSearchResultsSelector, searchAlerts } from 'store/modules/alert'
import { sensorSelectedSelector } from 'store/modules/sensor'
import { ALERT_LEVEL, ALERT_LEVELS } from 'config/constants'

import './AlertLog.scss'

function AlertLog(props) {
  const { className, alerts, sensorId, searchAlerts } = props

  useEffect(() => {
    searchAlerts()
  }, [searchAlerts])

  return (
    <div className={cn('AlertLog', className)}>
      {alerts.map(({ alert_type, city, reported_at, message, sensor }, key) => {
        const Icon = alert_type >= ALERT_LEVEL.Warning ? IconAlert : IconCog

        return (
          <div
            key={key}
            className={cn('AlertLog__item', `alert--${ALERT_LEVELS[alert_type]}`, {
              'AlertLog__item--active': sensor.id === sensorId
            })}>
            <Icon className="mr-1" />

            <Typography uppercase as="span" className="mr-1 AlertLog__item-title">
              <strong>{ALERT_LEVELS[alert_type]}: </strong>
            </Typography>

            <Typography as="span">
              <strong>{city}</strong>
            </Typography>

            <br />

            <Typography as="span">
              <strong>
                <FormattedDate value={reported_at} format="twoDigit" />
                &nbsp;|&nbsp;
                <FormattedTime value={reported_at} format="short" />
              </strong>
            </Typography>

            <Typography>{message}</Typography>
          </div>
        )
      })}
    </div>
  )
}

const selector = createStructuredSelector({
  alerts: alertsSearchResultsSelector,
  sensorId: sensorSelectedSelector
})

const actions = {
  searchAlerts
}

export default connect(
  selector,
  actions
)(AlertLog)
