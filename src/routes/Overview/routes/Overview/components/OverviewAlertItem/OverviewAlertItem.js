import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { ALERT_TYPE } from 'config/constants'
import IconInfo from 'icons/IconInfo'
import IconThreeDots from 'icons/IconThreeDots'
import IconCog from 'icons/IconCog'
import IconErrorTriangle from 'icons/IconErrorTriangle'
import Typography from 'components/Typography'
import './OverviewAlertItem.scss'

const renderIcon = ({ type }) => {
  if (type === ALERT_TYPE.CRITICAL) return <IconInfo className="OverviewAlertItem__header-icon-info" />
  if (type === ALERT_TYPE.INFO) return <IconErrorTriangle className="OverviewAlertItem__header-icon-error" />
  if (type === ALERT_TYPE.WARNING) return <IconCog className="OverviewAlertItem__header-icon-cog" />
  return null
}

const OverviewAlertItem = ({ type, text, date }) => (
  <div className="OverviewAlertItem">
    <div className="OverviewAlertItem__header d-flex align-items-center">
      {renderIcon({ type })}
      <div className="OverviewAlertItem__header-date">
        <Typography variant="caption" uppercase>
          {moment(date).calendar()}
        </Typography>
      </div>
      <Link to="#" className="OverviewAlertItem__header-menu">
        <IconThreeDots />
      </Link>
    </div>
    <div className="OverviewAlertItem__text">
      <Typography variant="body-small">{text}</Typography>
    </div>
  </div>
)

export default OverviewAlertItem
