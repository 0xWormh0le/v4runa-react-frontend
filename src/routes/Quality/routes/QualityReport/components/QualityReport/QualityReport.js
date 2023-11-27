import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Parameter from 'routes/Resources/routes/Assets/components/Parameter'
import WaterPollutionReport from '../WaterPollutionReport'
import ChemicalLocation from '../ChemicalLocation'
import Disinfectants from '../../../Iccr/components/Disinfectants'
import InorganicContaminants from '../../../Iccr/components/InorganicContaminants'
import LeadCopper from '../../../Iccr/components/LeadCopper'
import MicrobialContaminants from '../../../Iccr/components/MicrobialContaminants'
import OrganicChemicalContaminants from '../../../Iccr/components/OrganicChemicalContaminants'
import RadioActiveContaminants from '../../../Iccr/components/RadioActiveContaminants'
import OverallWaterQuality from '../../../Iccr/components/OverallWaterQuality'
import PesticidesHerbicides from '../../../Iccr/components/PesticidesHerbicides'
import { getReport } from 'store/modules/legacy-report'

import 'routes/LegacyReport/Report.scss'
import './QualityReport.scss'

const DEMO_ID = 3

const QualityReport = ({ history, getReport }) => {
  useEffect(() => {
    getReport({
      id: DEMO_ID
    })
  }, [getReport])

  const handleRunReportClick = (areaCode, lang, startDate, endDate) => {
    history.push(`quality/iccr?areacode=${areaCode}&lang=${lang}&start=${startDate}&end=${endDate}`)
  }

  return (
    <div id="report" className="QualityReport">
      <Row>
        <Col lg={4} className="QualityReport__quality-and-parameter">
          <Row>
            <Col xs={12}>
              <OverallWaterQuality quality={0.76} className="h-100" />
            </Col>
            <Col xs={12}>
              <ChemicalLocation className="mt-3" />
            </Col>
          </Row>
        </Col>

        <Col lg={{ span: 8, offset: 4 }}>
          <div className="QualityReport__right-pane">
            <Parameter className="QualityReport__grid mt-3 mt-lg-0" onRunReportClick={handleRunReportClick} />
            <WaterPollutionReport className="QualityReport__grid" />
            <InorganicContaminants className="QualityReport__grid" />
            <Disinfectants className="QualityReport__grid" />
            <OrganicChemicalContaminants className="QualityReport__grid" />
            <PesticidesHerbicides className="QualityReport__grid" />
            <LeadCopper className="QualityReport__grid" />
            <RadioActiveContaminants className="QualityReport__grid" />
            <MicrobialContaminants className="QualityReport__grid mb-0" />
          </div>
        </Col>
      </Row>
    </div>
  )
}

const actions = {
  getReport
}

export default compose(
  withRouter,
  connect(
    null,
    actions
  )
)(QualityReport)
