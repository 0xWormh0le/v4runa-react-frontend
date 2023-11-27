import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import TechnicianCalendar from 'routes/Resources/routes/Personnel/components/TechnicianCalendar'
import BudgetCost from 'routes/Resources/routes/Personnel/components/BudgetCost'
import Technicians from 'routes/Overview/routes/Overview/components/Technicians'
import budgetCostData from 'data/budget-cost.json'

import './ResourceOptimizationFirst.scss'

const days = ['2019-12-04', '2019-12-07', '2019-12-11', '2019-12-12', '2019-12-27']

function ResourceOptimizationFirst(props) {
  return (
    <Row className="ResourceOptimizationFirst ResourceOptimizationFirst__row-spacer">
      <Col xs={12} className="ResourceOptimizationFirst__col-spacer">
        <TechnicianCalendar days={days} className="ResourceOptimizationFirst__calendar" />
      </Col>

      <Col sm={6} lg={12} xl={6} className="ResourceOptimizationFirst__col-spacer">
        <Technicians personnelLink="/resources/personnel" />
      </Col>

      <Col sm={6} lg={12} xl={6} className="ResourceOptimizationFirst__col-spacer">
        <BudgetCost data={budgetCostData} />
      </Col>
    </Row>
  )
}

export default ResourceOptimizationFirst
