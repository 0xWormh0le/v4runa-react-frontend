import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ContaminantRow from '../ContaminantRow'
import Typography from 'components/Typography'

import './ContaminantLevels.scss'

const ContaminantLevels = () => (
  <Card className="ContaminantLevels">
    <Card.Body>
      <div className="d-flex align-items-center mb-2">
        <Typography variant="subtitle">CONTAMINANT LEVELS</Typography>
        <div className="Technicians__header-divider mx-2">|</div>
        <Typography variant="body">
          <Link to="/iccr">
            <strong>Details</strong>
          </Link>
        </Typography>
      </div>
      <hr className="ContaminantLevels__divider" />
      <Row>
        <Col xs={5} className="ContaminantLevels__header-text">
          <Typography variant="body-small">Top Contaminants</Typography>
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={6} className="ContaminantLevels__header-text">
              <Typography variant="body-small">of EPA max</Typography>
            </Col>
            <Col xs={6} className="ContaminantLevels__header-text">
              <Typography variant="body-small">Trend</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="ContaminantLevels__divider" />
      <ContaminantRow contaminant="Lead" epa="69%" trend="0.9ppb" direction="up" />
      <ContaminantRow contaminant="Flouride" epa="75%" trend="3ppm" direction="down" />
      <ContaminantRow contaminant="Copper" epa="66%" trend="40ppb" direction="up" />
    </Card.Body>
  </Card>
)

export default ContaminantLevels
