import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import AssetServiceLife from '../AssetServiceLife'
import AssetLegend from '../AssetLegend'
import EnergyUsage from '../EnergyUsage'
import Parameter from '../Parameter'

import BudgetChart from '../../../Finances/components/BudgetChart'
import BudgetCost from '../../../Personnel/components/BudgetCost'

import totalBudgetData from 'data/total-budget.json'
import moneySpentOnAssetsData from 'data/money-spent-on-assets.json'
import assetServiceLifeData from 'data/asset-service-life.json'
import energyUsageData from 'data/energy-usage.json'
import budgetCostData from 'data/budget-cost.json'

import './Assets.scss'

function Assets() {
  const handleRunReportClick = (areaCode, lang, startDate, endDate) => {}

  return (
    <Row className="Assets Assets__row-spacer">
      <Col xs={12} className="Assets__col-spacer">
        <Parameter onRunReportClick={handleRunReportClick} />
      </Col>

      <Col lg={6} xl={8} className="Assets__col-spacer">
        <Row className="Assets__row-spacer">
          <Col xs={12} sm={6} lg={12} xl={8} className="Assets__col-spacer">
            <BudgetChart caption="Total Budget" data={totalBudgetData} financeLink="/resources/finances" />
          </Col>
          <Col xs={12} sm={6} lg={12} xl={4} className="Assets__col-spacer">
            <BudgetCost data={budgetCostData} />
          </Col>
          <Col xs={12} className="Assets__col-spacer">
            <AssetServiceLife data={assetServiceLifeData} />
          </Col>
        </Row>
      </Col>

      <Col lg={6} xl={4} className="Assets__col-spacer">
        <Row className="Assets__row-spacer">
          <Col xs={12} className="Assets__col-spacer">
            <AssetLegend />
          </Col>
          <Col xs={12} className="Assets__col-spacer">
            <BudgetChart caption="MONEY SPENT ON ASSETS" data={moneySpentOnAssetsData.last_year} />
          </Col>
          <Col xs={12} className="Assets__col-spacer">
            <EnergyUsage data={energyUsageData} minFlow={30} maxFlow={70} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

Assets.propTypes = {}

export default Assets
