import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import DatePicker from 'react-datepicker'
import DropdownButton from 'components/Dropdown'

import { YEARS as years, MONTHS as months } from 'config/constants'

import './Datepicker.scss'

function calendarHeader(setDate, calendar) {
  return props => {
    const { date, changeYear, changeMonth } = props

    const handleDateClear = () => {
      setDate(null)
      calendar && calendar.setOpen(false)
    }

    return (
      <div className="Datepicker__calendar-header">
        <button onClick={handleDateClear}>Clear</button>
        <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)}>
          {years.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={months[date.getMonth()]}
          onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}>
          {months.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

class DatePickerButton extends React.Component {
  render() {
    const { value, onClick, emptyText } = this.props
    return <DropdownButton title={value ? value : emptyText} onClick={onClick} />
  }
}

function Datepicker(props) {
  const { className, selected, onChange, emptyText, ...other } = props
  const [calendarRefLoaded, setCalendarRefLoaded] = useState(undefined)
  const calendarRef = useRef(null)

  useEffect(() => {
    calendarRef && setCalendarRefLoaded(true)
  }, [calendarRef])

  return (
    <div className={cn('Datepicker', className)}>
      <DatePicker
        {...other}
        selected={selected}
        onChange={onChange}
        renderCustomHeader={calendarRefLoaded && calendarHeader(onChange, calendarRef.current)}
        customInput={<DatePickerButton emptyText={emptyText} />}
        popperPlacement="bottom-end"
        ref={calendarRef}
      />
    </div>
  )
}

export default Datepicker
