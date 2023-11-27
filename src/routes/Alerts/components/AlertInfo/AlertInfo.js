import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'
import Typography from 'components/Typography'
import { sensorDataRecordsSelector } from 'store/modules/sensor'

import './AlertInfo.scss'

function AlertInfo(props) {
  const { title, sensorDataRecords } = props
  const dataScore = 4.27

  const measurements = sensorDataRecords && sensorDataRecords.count
  const startDate = sensorDataRecords && sensorDataRecords.results.start_date
  const endDate = sensorDataRecords && sensorDataRecords.results.end_date

  return (
    <div className="AlertInfo">
      {title && (
        <Typography variant="title" gutterBottom className="AlertInfo__title">
          {title}
        </Typography>
      )}

      <div className="AlertInfo__field mt-0">
        <Typography>Data Score</Typography>
        <Typography variant="body-xlarge" className="AlertInfo__field-value">
          <strong>{dataScore}</strong>
        </Typography>
      </div>

      <div className="AlertInfo__field">
        <Typography>Measurements</Typography>
        <Typography variant="body-xlarge" className="AlertInfo__field-value">
          {measurements}
        </Typography>
      </div>

      <div className="AlertInfo__field">
        <Typography>Start Date</Typography>
        <Typography variant="body-xlarge" className="AlertInfo__field-value">
          {startDate && <FormattedDate value={startDate} format="twoDigit" />}
        </Typography>
      </div>

      <div className="AlertInfo__field">
        <Typography>End Date</Typography>
        <Typography variant="body-xlarge" className="AlertInfo__field-value">
          {endDate && <FormattedDate value={endDate} format="twoDigit" />}
        </Typography>
      </div>
    </div>
  )
}

AlertInfo.propTypes = {
  title: PropTypes.string
}

const selector = createStructuredSelector({
  sensorDataRecords: sensorDataRecordsSelector
})

export default connect(selector)(AlertInfo)
