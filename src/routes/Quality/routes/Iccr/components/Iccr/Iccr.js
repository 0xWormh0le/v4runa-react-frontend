import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import get from 'lodash/get'
import Row from 'react-bootstrap/Row'

import ChlorineResidualReport from 'components/ChlorineResidualReport'
import Disinfectants from '../Disinfectants'
import IccrNavs from '../IccrNavs'
import InorganicContaminants from '../InorganicContaminants'
import LeadCopper from '../LeadCopper'
import MicrobialContaminants from '../MicrobialContaminants'
import OrganicChemicalContaminants from '../OrganicChemicalContaminants'
import RadioActiveContaminants from '../RadioActiveContaminants'
import OverallWaterQuality from '../OverallWaterQuality'
import Parameters from '../Parameters'
import PesticidesHerbicides from '../PesticidesHerbicides'
import { getReport, reportDetailsSelector } from 'store/modules/legacy-report'
import 'routes/LegacyReport/Report.scss'
import './Iccr.scss'

const DEMO_ID = 3

const ICCR = ({ getReport, reportDetails }) => {
  useEffect(() => {
    getReport({
      id: DEMO_ID
    })
  }, [getReport])
  const report = get(reportDetails, 'report_json')

  return (
    <div id="report" className="Iccr">
      <Row>
        <Col lg={4} className="Iccr__quality-and-parameter">
          <OverallWaterQuality quality={0.76} />
          <Card className="Iccr__grid mt-3">
            <Card.Body>
              <Parameters />
            </Card.Body>
          </Card>
          <Card className="Iccr__grid">
            <Card.Body>
              <IccrNavs />
            </Card.Body>
          </Card>
          {report && (
            <Card className="Iccr__grid Iccr__grid--last">
              <Card.Body>
                <ChlorineResidualReport disinfectantResidualReport={report.qualityTable.disinfectantResidualReport} />
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col lg={{ span: 8, offset: 4 }}>
          <InorganicContaminants className="Iccr__grid" />
          <Disinfectants className="Iccr__grid" />
          <OrganicChemicalContaminants className="Iccr__grid" />
          <PesticidesHerbicides className="Iccr__grid" />
          <LeadCopper className="Iccr__grid" />
          <RadioActiveContaminants className="Iccr__grid" />
          <MicrobialContaminants className="Iccr__grid mb-0" />
        </Col>
      </Row>
    </div>
  )
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

const actions = {
  getReport
}

export default connect(
  selector,
  actions
)(ICCR)
