import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Typography from 'components/Typography'
import { CHART_LEGEND_COLORS } from 'config/constants'

import './AssetLegend.scss'

const captions = [
  'Power Generation Equipment',
  'Pumping Equipment',
  'Water Treatments Equipment',
  'Distribution Reservoirs and Standpipes',
  'Distribution Lines',
  'Services',
  'Meters and meter Installations',
  'Hydrants'
]

function AssetLegend() {
  return (
    <Card className="AssetLegend">
      <Card.Body>
        <Typography uppercase variant="subtitle" className="mb-3">
          Assets
        </Typography>

        <Row>
          <Col sm={6} lg={12} xl={6}>
            {CHART_LEGEND_COLORS.filter((_, key) => key < CHART_LEGEND_COLORS.length / 2).map((color, key) => (
              <div className="d-flex align-items-center mb-1" key={key}>
                <span className="AssetLegend__legend-item" style={{ backgroundColor: color }}></span>
                <Typography>{captions[key]}</Typography>
              </div>
            ))}
          </Col>
          <Col sm={6} lg={12} xl={6}>
            {CHART_LEGEND_COLORS.filter((_, key) => key >= CHART_LEGEND_COLORS.length / 2).map((color, key) => (
              <div className="d-flex align-items-center mb-1" key={key}>
                <span className="AssetLegend__legend-item" style={{ backgroundColor: color }}></span>
                <Typography>{captions[key]}</Typography>
              </div>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

AssetLegend.propTypes = {}

export default AssetLegend
