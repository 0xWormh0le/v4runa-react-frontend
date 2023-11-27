import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import BudgetChart from 'routes/Resources/routes/Finances/components/BudgetChart'
import Technicians from 'routes/Overview/routes/Overview/components/Technicians'
import AssetsList from '../AssetsList'
import Summary from '../Summary'
import totalBudgetData from 'data/total-budget.json'

import './SubRecommendationSecond.scss'

function SubRecommendationSecond(props) {
  const { history, time, cost, satisfaction } = props

  const handleSubmitClick = () => history.push('/insights/work-order')

  return (
    <Row className="SubRecommendationSecond SubRecommendationSecond__row-spacer">
      <Col xs={12} className="SubRecommendationSecond__col-spacer">
        <Summary time={time} cost={cost} satisfaction={satisfaction} />
      </Col>

      <Col xs={12} className="SubRecommendationSecond__col-spacer">
        <BudgetChart caption="Expenses" data={totalBudgetData} size={200} />
      </Col>

      <Col xs={12} xl={6} className="SubRecommendationSecond__col-spacer">
        <Technicians />
      </Col>

      <Col xs={12} xl={6} className="SubRecommendationSecond__col-spacer">
        <AssetsList />
      </Col>

      <Col xs={12} className="SubRecommendationSecond__col-spacer text-right">
        <Button onClick={handleSubmitClick} className="SubRecommendationSecond__submit">
          SUBMIT
        </Button>
      </Col>
    </Row>
  )
}

export default withRouter(SubRecommendationSecond)
