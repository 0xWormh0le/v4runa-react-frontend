import React from 'react'
import moment from 'moment'
import './CurrentTime.scss'

const CurrentTime = () => (
  <div className="CurrentTime">
    {moment()
      .subtract(10, 'days')
      .calendar()}{' '}
    | {moment().format('LT')}
  </div>
)

export default CurrentTime
