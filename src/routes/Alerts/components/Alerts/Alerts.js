import React from 'react'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OverviewMap from 'routes/Overview/routes/Overview/components/OverviewMap'
import AlertInfo from '../AlertInfo'
import AlertLog from '../AlertLog'
import Measurements from '../Measurements'
import Status from '../Status'
import ContaminantLevel from '../ContaminantLevel'

import contaminantLevelData from 'data/contaminent-level.json'

import './Alerts.scss'

function Alerts(props) {
  return (
    <div className="Alerts">
      <Row className="h-100">
        <Col xl={4} className="Alerts__left-pane">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column h-100">
              <div className="Alerts__map">
                <OverviewMap mode="alert" />
              </div>
              <div className="Alerts__log border overflow-auto mt-3">
                <AlertLog />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={8} className="mt-3 mt-xl-0">
          <div className="Alerts__right-pane">
            <Row className="h-100">
              <Col xs={12} lg={7} className="h-100">
                <Card className="h-100">
                  <Card.Body className="Alerts__measurement">
                    <AlertInfo
                      title="San Marcos, TX"
                      dataScore={4.27}
                      measurements={40}
                      startDate="2010-04-28T00:00:00"
                      endDate="2019-03-19T00:00:00"
                    />
                    <div>
                      <hr />
                    </div>
                    <Measurements className="overflow-auto" chemical={1} />
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} lg={5} className="mt-3 mt-lg-0">
                <Row>
                  <Col xs={12} sm={6} lg={12}>
                    <ContaminantLevel data={contaminantLevelData} />
                  </Col>
                  <Col xs={12} sm={6} lg={12} className="mt-3 mt-sm-0 mt-lg-3">
                    <Status />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Alerts.propTypes = {}

export default Alerts
