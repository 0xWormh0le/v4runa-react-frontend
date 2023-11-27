import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Typography from 'components/Typography'
import ChemicalChoice from 'routes/Quality/routes/QualityReport/components/ChemicalChoice'
import AlertInfo from 'routes/Alerts/components/AlertInfo'
import EnergyUsage from 'routes/Resources/routes/Assets/components/EnergyUsage'
import Measurements from 'routes/Alerts/components/Measurements'
import BudgetCost from 'routes/Resources/routes/Personnel/components/BudgetCost'
import SensorMap from '../SensorMap'

import energyUsageData from 'data/energy-usage.json'
import budgetCostData from 'data/budget-cost.json'

import './SensorStatus.scss'

const chemicalNames = [
  'Inorganic',
  'Chlorines & Chloramines',
  'Lead Copper',
  'Organic',
  'Pesticides Herbicides',
  'Radioactive',
  'Microbial'
]

function SensorStatus(props) {
  const [chemical, setChemical] = useState(1)

  return (
    <div className="SensorStatus">
      <Row className="SensorStatus__row-spacer">
        <Col className="SensorStatus__col-spacer" xs={12}>
          <Card>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <ChemicalChoice onChemicalSelect={setChemical} defaultValue={1} className="mx-auto ml-sm-0" />
              <Typography uppercase variant="subtitle" className="SensorStatus__chemical-name d-none d-sm-block">
                {chemicalNames[chemical]}
              </Typography>
            </Card.Body>
          </Card>
        </Col>

        <Col className="SensorStatus__col-spacer" xs={12} xl={4}>
          <SensorMap chemical={chemical} className="h-100" />
        </Col>

        <Col className="SensorStatus__col-spacer" xs={12} lg={6} xl={4}>
          <Row className="SensorStatus__row-spacer">
            <Col className="SensorStatus__col-spacer" xs={12}>
              <Card>
                <Card.Body className="SensorStatus__alert">
                  <AlertInfo />
                  <Measurements chemical={chemical} className="overflow-auto border p-2 mt-3" />
                </Card.Body>
              </Card>
            </Col>
            <Col className="SensorStatus__col-spacer" xs={12}>
              <BudgetCost title={'CLORINE RESIDUAL COST'} data={budgetCostData} />
            </Col>
          </Row>
        </Col>

        <Col className="SensorStatus__col-spacer d-flex flex-column" xs={12} lg={6} xl={4}>
          <EnergyUsage className="flex-grow-1" data={energyUsageData} minFlow={30} maxFlow={70} />
          <Card className="mt-3">
            <Card.Body className="d-flex justify-content-between">
              <Button className="SensorStatus__control-button mr-2" as={Link} to="insights/work-order">
                SERVICE
              </Button>
              <Button className="SensorStatus__control-button mr-2" as={Link} to="insights/work-order">
                FLUSH
              </Button>
              <Button className="SensorStatus__control-button" as={Link} to="insights/work-order">
                ADJUST
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SensorStatus
