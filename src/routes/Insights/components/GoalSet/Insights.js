import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ContaminantsChart from '../ContaminantsChart'
import DisinfectionCostChart from '../DisinfectionCostChart'
import DeprRateVsAvgServiceLifeChart from '../DeprRateVsAvgServiceLifeChart'
import AvgServiceLifeChart from '../AvgServiceLifeChart'
import Typography from 'components/Typography'
import './Insights.scss'

export const Insights = () => (
  <div className="Insights">
    <Row>
      <Col sm={6} className="mb-3">
        <Card className="Insights__chart-card">
          <Card.Body className="d-flex flex-column">
            <Typography variant="subtitle" gutterBottom className="mb-4">
              Depr. Rate Applied ( E ) vs. Average Service Life in Years ( C )
            </Typography>
            <DeprRateVsAvgServiceLifeChart />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="mb-3">
        <Card className="Insights__chart-card">
          <Card.Body className="d-flex flex-column">
            <Typography variant="subtitle" gutterBottom className="mb-4">
              'Average Service Life in Years ( C )' by 'County'
            </Typography>
            <AvgServiceLifeChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm={6} className="mb-3 mb-md-0">
        <Card className="Insights__chart-card">
          <Card.Body className="d-flex flex-column">
            <Typography variant="subtitle" gutterBottom className="mb-4">
              Disinfection Cost
            </Typography>
            <DisinfectionCostChart />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="mb-3 mb-md-0">
        <Card className="Insights__chart-card">
          <Card.Body className="d-flex flex-column">
            <Typography variant="subtitle" gutterBottom className="mb-4">
              Contaminants
            </Typography>
            <ContaminantsChart />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Insights
