import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Technician from '../TechnicianItem'
import Typography from 'components/Typography'

import './Technicians.scss'

function Technicians(props) {
  const { personnelLink } = props

  return (
    <Card className="Technicians">
      <Card.Body>
        <Typography variant="subtitle" gutterBottom>
          TECHNICIANS
        </Typography>

        <div className="Technicians__status-container">
          <Row>
            <Col xs={6} className="Technicians__col-status">
              <div className="Technicians__status-number">
                <Typography variant="figure-large">6</Typography>
              </div>
              <div className="Technicians__status-text">
                <Typography variant="body">Active on tasks</Typography>
              </div>
            </Col>
            <Col xs={6} className="Technicians__col-status">
              <div className="Technicians__status-number">
                <Typography variant="figure-large">2</Typography>
              </div>
              <div className="Technicians__status-text">
                <Typography variant="body">Available now</Typography>
              </div>
            </Col>
          </Row>
        </div>

        <div className="Technicians__technicians-container">
          <Technician name="Jorge Luis" type="Service Technician" status="AVAILABLE NOW" />
          <Technician name="Jorge Luis" type="Service Technician" status="AVAILABLE NOW" />
          <Technician name="Jorge Luis" type="Service Technician" status="AVAILABLE NOW" />
        </div>

        {personnelLink && (
          <Button as={Link} to={personnelLink} className="mt-2">
            PERSONNEL
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default Technicians
