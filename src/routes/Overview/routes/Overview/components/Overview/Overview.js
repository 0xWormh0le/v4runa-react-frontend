import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Technicians from '../Technicians'
import LatestAlerts from '../LatestAlerts'
import ContaminantLevel from 'routes/Alerts/components/ContaminantLevel'
import BudgetChart from 'routes/Resources/routes/Finances/components/BudgetChart'
import AssetServiceLife from 'routes/Resources/routes/Assets/components/AssetServiceLife'
import OverallWaterQuality from 'routes/Quality/routes/Iccr/components/OverallWaterQuality'

import { getAlertsList } from 'store/modules/alert'
import { getResourceAllocationsList } from 'store/modules/resource-allocation'
import { PaginatedListType } from 'utils/propTypes'

import totalBudgetData from 'data/total-budget.json'
import contaminantLevelData from 'data/contaminent-level.json'
import assetServiceLifeData from 'data/asset-service-life.json'

import './Overview.scss'

const Overview = ({ getAlertsList, getResourceAllocationsList }) => {
  useEffect(() => {
    getAlertsList()
    getResourceAllocationsList()
  }, [getAlertsList, getResourceAllocationsList])

  return (
    <div className="Overview">
      <Row className="Overview__row-spacer">
        <Col lg={5} className="Overview__col-spacer">
          <Row className="Overview__row-spacer">
            <Col xs={12} className="Overview__col-spacer">
              <OverallWaterQuality quality={0.9} />
            </Col>
            <Col sm={6} lg={12} className="Overview__col-spacer Overview__contaminant-levels">
              <ContaminantLevel data={contaminantLevelData} waterQualityLink="/quality" />
            </Col>
            <Col sm={6} lg={12} className="Overview__col-spacer Overview__technicians">
              <Technicians personnelLink="/resources/personnel" />
            </Col>
            <Col xs={12} className="Overview__col-spacer">
              <BudgetChart caption="Expenses" data={totalBudgetData} financeLink="/resources/finances" />
            </Col>
          </Row>
        </Col>

        <Col lg={7} className="Overview__col-spacer">
          <Row className="Overview__row-spacer">
            <Col xs={12} className="Overview__col-spacer">
              <LatestAlerts />
            </Col>
            <Col xs={12} className="Overview__col-spacer">
              <AssetServiceLife data={assetServiceLifeData} assetsLink="/resources/assets" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

Overview.propTypes = {
  alerts: PaginatedListType
}

const actions = {
  getAlertsList,
  getResourceAllocationsList
}

export default connect(
  null,
  actions
)(Overview)
