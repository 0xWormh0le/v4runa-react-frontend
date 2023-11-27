import React, { useState } from 'react'
import cn from 'classnames'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import find from 'lodash/find'

import DatePicker from 'components/DatePicker'
import DropdownButton, { DropdownItem } from 'components/Dropdown'
import Typography from 'components/Typography'
import { langs } from 'config/constants'

import './Parameter.scss'

function Parameter(props) {
  const { onRunReportClick, className } = props

  const [areaCode, setAreaCode] = useState('')
  const [lang, setLang] = useState('en')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const handleAreaCodeChange = e => setAreaCode(e.target.value)

  const handleRunReportClick = () => {
    const start = startDate ? new Date(startDate).toISOString().slice(0, 10) : ''
    const end = endDate ? new Date(endDate).toISOString().slice(0, 10) : ''
    onRunReportClick(areaCode, lang, start, end)
  }

  return (
    <Card className={cn('Parameter', className)}>
      <Card.Body className="d-flex align-items-center justify-content-between flex-wrap">
        <Typography uppercase gutterBottom variant="subtitle">
          Parameters
        </Typography>

        <div className="d-flex flex-wrap">
          <Form.Control
            type="text"
            placeholder="Area Code..."
            autoComplete="off"
            className="Parameter__control"
            value={areaCode}
            onChange={handleAreaCodeChange}
          />

          <DropdownButton title={find(langs, { value: lang }).caption} className="Parameter__control">
            {langs.map(({ value, caption }) => (
              <DropdownItem onClick={() => setLang(value)} key={value}>
                {caption}
              </DropdownItem>
            ))}
          </DropdownButton>

          <DatePicker
            className="Parameter__control"
            selected={startDate}
            onChange={value => setStartDate(value)}
            emptyText="Start Date"
          />

          <DatePicker
            className="Parameter__control"
            selected={endDate}
            onChange={value => setEndDate(value)}
            emptyText="End Date"
          />

          <Button onClick={handleRunReportClick} className="Parameter__control justify-content-center">
            RUN REPORT
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

Parameter.propTypes = {}

export default Parameter
