import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Status from 'routes/Alerts/components/Status'
import ContaminantLevel from 'routes/Alerts/components/ContaminantLevel'
import BudgetCost from 'routes/Resources/routes/Personnel/components/BudgetCost'
import ContaminantLevelChart from '../ContaminantLevelChart'

import contaminantLevelData from 'data/contaminent-level.json'
import budgetCostData from 'data/budget-cost.json'

import './SubPrognosisSecond.scss'

function SubPrognosisSecond() {
  return (
    <Row className="SubPrognosisSecond SubPrognosisSecond__row-spacer">
      <Col xs={12} className="SubPrognosisSecond__col-spacer">
        <Status />
      </Col>

      <Col xs={12} sm={12} xl={6} className="SubPrognosisSecond__col-spacer">
        <Row className="SubPrognosisSecond__row-spacer">
          <Col xs={12} sm={6} xl={12} className="SubPrognosisSecond__col-spacer">
            <ContaminantLevel data={contaminantLevelData} detailLink />
          </Col>
          <Col xs={12} sm={6} xl={12} className="SubPrognosisSecond__col-spacer">
            <BudgetCost data={budgetCostData} />
          </Col>
        </Row>
      </Col>

      <Col xs={12} xl={6} className="SubPrognosisSecond__col-spacer">
        <ContaminantLevelChart />
      </Col>
    </Row>
  )
}

export default SubPrognosisSecond
