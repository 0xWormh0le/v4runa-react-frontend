import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import cn from 'classnames'
import startCase from 'lodash/startCase'
import fp from 'lodash/fp'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OverviewMap from 'routes/Overview/routes/Overview/components/OverviewMap'
import TechnicianCalendar from '../TechnicianCalendar'
import TechnicianSlider from '../TechnicianSlider'
import {
  getResourceAllocationsList,
  selectResourceAllocation,
  resourceAllocationsListSelector,
  resourceAllocationsSeletedListSelector,
  resourceAllocationCalendarSelector
} from 'store/modules/resource-allocation'

import './Personnel.scss'

function Personnel(props) {
  const { selected, calendar, resourceAllocations, getResourceAllocationsList, selectResourceAllocation } = props

  const sliderData = resourceAllocations.map(item => ({
    id: item.id,
    title: 'Utiities Technician',
    checked: selected.includes(item.id),
    name: startCase(item.assignee.user.first_name + ' ' + item.assignee.user.last_name),
    role: 'Service Technician',
    availability: true,
    salary: item.salary,
    location: item.location.formatted_address,
    jobType: startCase(item.job_type),
    department: startCase(item.department),
    jobNumber: item.job_number,
    closingDate: item.closing_date
  }))

  useEffect(() => {
    getResourceAllocationsList()
  }, [getResourceAllocationsList])

  const handleTechnicianClick = id =>
    selectResourceAllocation({
      id,
      turnActive: !selected.includes(id)
    })

  return (
    <div className="Personnel">
      <Row className="Personnel__row-spacer">
        <Col xs={12} className={cn('Personnel__map', 'Personnel__col-spacer')}>
          <Card className="Personnel__first-row-card">
            <Card.Body>
              <OverviewMap />
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} className={cn('Personnel__calendar', 'Personnel__col-spacer')}>
          <div className="Personnel__first-row-card">
            <TechnicianCalendar days={calendar} />
          </div>
        </Col>
      </Row>

      <Row className="Personnel__row-bottom">
        <Col xs={12} className="Personnel__slider">
          <TechnicianSlider data={sliderData} onCardClick={handleTechnicianClick} />
        </Col>
      </Row>
    </div>
  )
}

Personnel.propTypes = {}

const selectors = createStructuredSelector({
  resourceAllocations: resourceAllocationsListSelector,
  selected: resourceAllocationsSeletedListSelector,
  calendar: fp.compose(
    fp.flatMap('data'),
    resourceAllocationCalendarSelector
  )
})

const actions = {
  getResourceAllocationsList,
  selectResourceAllocation
}

export default connect(
  selectors,
  actions
)(Personnel)
