import React, { useState, useCallback } from 'react'
import cn from 'classnames'
import moment from 'moment'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'
import Card from 'react-bootstrap/Card'

import Typography from 'components/Typography'
import SliderArrow from 'components/SliderArrow'
import { WEEKDAYS as weekDays } from 'config/constants'

import './TechnicianCalendar.scss'

function TechnicianCalendar(props) {
  const { className } = props
  const days = props.days
    ? props.days.map(day => (day instanceof Date ? moment(day) : moment(day, moment.defaultFormat)))
    : []
  const [date, setDate] = useState(new Date())
  const year = date.getFullYear()
  const month = date.getMonth()

  const getNextMonth = useCallback(() => new Date(year, month + 2, 0), [year, month])

  const getThisMonth = useCallback(() => new Date(year, month + 1, 0), [year, month])

  const getPrevMonth = useCallback(() => new Date(year, month, 0), [year, month])

  const thisMonth = new Date(year, month, 1)
  const thisMonthFirstDay = thisMonth.getDay()
  const daysInPrevMonth = getPrevMonth().getDate()
  const daysInThisMonth = getThisMonth().getDate()

  const prevMonthDays = new Array(thisMonthFirstDay)
    .fill(0)
    .map((day, i) => daysInPrevMonth - thisMonthFirstDay + i + 1)
  const thisMonthDays = new Array(daysInThisMonth).fill(0).map((day, i) => i + 1)
  const nextMonthDays = new Array(6 - ((thisMonthFirstDay + daysInThisMonth - 1) % 7)).fill(0).map((day, i) => i + 1)

  const handlePrevMonthClick = () => setDate(getPrevMonth())

  const handleNextMonthClick = () => setDate(getNextMonth())

  return (
    <Card className={cn('TechnicianCalendar h-100', className)}>
      <Card.Body className="d-flex flex-column">
        <div className="TechnicianCalendar__header">
          <SliderArrow direction={true} onClick={handlePrevMonthClick} size="sm" />

          <Typography variant="subtitle" className="TechnicianCalendar__caption" uppercase>
            <FormattedDate value={date} format="monthAndYear" />
          </Typography>

          <SliderArrow direction={false} onClick={handleNextMonthClick} size="sm" />
        </div>

        <div className="TechnicianCalendar__body">
          {weekDays.map(day => (
            <div className="TechnicianCalendar__cell" key={'week-' + day}>
              <Typography uppercase>{day}</Typography>
            </div>
          ))}
          {prevMonthDays.map(day => (
            <div className="TechnicianCalendar__cell" key={'prev-' + day}>
              <Typography className="TechnicianCalendar__day--out-of-month">{day}</Typography>
            </div>
          ))}
          {thisMonthDays.map(day => (
            <div className="TechnicianCalendar__cell" key={'this-' + day}>
              <Typography
                className={
                  days.filter(d => d.year() === year && d.month() === month && d.date() === day).length
                    ? 'TechnicianCalendar__day--highlight'
                    : 'TechnicianCalendar__day'
                }>
                {day}
              </Typography>
            </div>
          ))}
          {nextMonthDays.map(day => (
            <div className="TechnicianCalendar__cell" key={'next-' + day}>
              <Typography className="TechnicianCalendar__day--out-of-month">{day}</Typography>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}

TechnicianCalendar.propTypes = {
  days: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]))
}

export default TechnicianCalendar
