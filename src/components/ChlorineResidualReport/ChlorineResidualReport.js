import React from 'react'
import cn from 'classnames'
import Col from 'react-bootstrap/Col'
import get from 'lodash/get'
import Row from 'react-bootstrap/Row'

import SingleBarChart from 'components/SingleBarChart'
import './ChlorineResidualReport.scss'

const isEmpty = row => {
  let count = 0
  for (var k in row) {
    if (k !== 'id') {
      if (row[k] === '') count++
    }
  }
  return count === 7 ? true : false
}

const ChlorineResidualReport = ({ disinfectantResidualReport }) => {
  return (
    <div className="ChlorineResidualReport">
      <h5 className="blue">
        <b>CHLORINE RESIDUAL REPORT</b>
      </h5>
      <div className="ChlorineResidualReport__bar-graph">
        <div className="ChlorineResidualReport__disinfectants">
          <Row>
            <Col xs={4} md={4} className="ChlorineResidualReport__corner-header">
              <p className="small-text blue">
                <b>Maximum</b>
              </p>
              <p className="small-text blue">
                <b>Contaminant</b>
              </p>
              <p className="small-text blue">
                <b>Level(MCL)</b>
              </p>
            </Col>
            <Col xs={8} md={8}>
              <div className="ChlorineResidualReport__column-header">
                <Row>
                  {!isEmpty(get(disinfectantResidualReport, 'chlorine')) && (
                    <Col className={cn(
                      "small-text",
                      "ChlorineResidualReport__header-item"
                    )}>
                      {`${get(
                        disinfectantResidualReport,
                        'chlorine.mRDL'
                      )}Mg/L`}
                    </Col>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs={4} md={4} />
          <Col xs={8} md={8}>
            <div className="ChlorineResidualReport__chart-content">
              <Row className='h-100'>
                {!isEmpty(get(disinfectantResidualReport, 'chlorine')) && (
                  <Col xs={12} className="bars">
                    <SingleBarChart
                      chemical="BARIUM"
                      height1="100"
                      height2="90"
                      section="disinfectantsResidual"
                      levelDetected={get(disinfectantResidualReport, 'chlorine.averageLevel')}
                    />
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={4} md={3} />
          <Col xs={8} md={9}>
            <div className="ChlorineResidualReport__contaminant-name">
              <Row>
                {!isEmpty(get(disinfectantResidualReport, 'chlorine')) && (
                  <Col className={cn(
                    "small-text",
                    "ChlorineResidualReport__contaminant"
                  )}>
                    <b>CHLORINE</b>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>

        <div className="ChlorineResidualReport__table-row-1">
          <Row>
            <Col xs={4} md={3}>
              <p className="smaller-text ">
                <b>DATE OF TEST</b>
              </p>
            </Col>
            <Col xs={8} md={9}>
              <Row>
                {!isEmpty(get(disinfectantResidualReport, 'chlorine')) && (
                  <Col className={cn(
                    "smaller-text",
                    "ChlorineResidualReport__number"
                  )}>
                    ({get(disinfectantResidualReport, 'chlorine.year')})
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </div>

        <div className="ChlorineResidualReport__table-row-2">
          <Row>
            <Col xs={4} md={3}>
              <p className="smaller-text ">
                <b>RANGE OF SAMPLES</b>
              </p>
            </Col>
            <Col xs={8} md={9}>
              <Row>
                {!isEmpty(get(disinfectantResidualReport, 'chlorine')) && (
                  <Col className={cn(
                    "smaller-text",
                    "ChlorineResidualReport__number"
                  )}>
                    {get(disinfectantResidualReport, 'chlorine.rangeOfLevelsDetected')}Mg/L
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ChlorineResidualReport
