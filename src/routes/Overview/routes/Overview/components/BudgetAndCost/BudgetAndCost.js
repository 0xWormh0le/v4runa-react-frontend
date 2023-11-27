import React from 'react'
import './BudgetAndCost.scss'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Dropdown from 'react-bootstrap/Dropdown'
import Typography from 'components/Typography'

const BudgetAndCost = () => (
  <Card className="BudgetAndCost">
    <Card.Body>
      <div className="d-flex align-items-center mb-2">
        <Typography variant="subtitle">BUDGET AND COST</Typography>
        <div className="Technicians__header-divider mx-2">|</div>
        <Typography variant="body">
          <Link to="/operations/financial-viability">
            <strong>Details</strong>
          </Link>
        </Typography>
      </div>

      <div className="BudgetAndCost__dropdown-container mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" className="BudgetAndCost__dropdown">
            THIS MONTH
          </Dropdown.Toggle>

          <Dropdown.Menu alignRight={true}>
            <Dropdown.Item>Add options here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="BudgetAndCost__table">
        <Row className="BudgetAndCost__first-row">
          <Col xs={7} className="BudgetAndCost__col">
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">Projected</Typography>
            </div>
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">Unscheduled repairs</Typography>
            </div>
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">This period</Typography>
            </div>
          </Col>
          <Col xs={5}>
            <div className="BudgetAndCost__value">
              <Typography variant="figure-large">$23,501</Typography>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={7} className="BudgetAndCost__col">
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">Scheduled repairs</Typography>
            </div>
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">This period</Typography>
            </div>
          </Col>
          <Col xs={5}>
            <div className="BudgetAndCost__value">
              <Typography variant="figure-large">$67,391</Typography>
            </div>
          </Col>
        </Row>

        <hr className="BudgetAndCost__divider" />

        <Row>
          <Col xs={7} className="BudgetAndCost__col">
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">Alocated Budget</Typography>
            </div>
          </Col>
          <br />
          <Col xs={5} className="BudgetAndCost__col">
            <div className="BudgetAndCost__value">
              <Typography variant="figure-large">$100,000</Typography>
            </div>
          </Col>
        </Row>

        <hr className="BudgetAndCost__divider" />

        <Row>
          <Col xs={4} className="BudgetAndCost__col">
            <div className="BudgetAndCost__text">
              <Typography variant="body-small">Tracking Total</Typography>
            </div>
          </Col>
          <Col xs={{ span: 3, offset: 1 }}>
            <div className="BudgetAndCost__total">
              <Typography variant="figure-large">22%</Typography>
            </div>
          </Col>
          <Col xs={4}>
            <div className="BudgetAndCost__total">
              <Typography variant="figure-large">$8,208</Typography>
            </div>
          </Col>
        </Row>
      </div>
    </Card.Body>
  </Card>
)

export default BudgetAndCost
