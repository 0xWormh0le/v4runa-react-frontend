import React, { Component } from 'react'
import logo from '../../icons/legacy/varuna-logo.png'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Container from 'react-bootstrap/Container'
import Loader from 'components/Loader'

import { getReport, reportDetailsSelector } from 'store/modules/legacy-report'
import Violations from './components/Violations'
import ReportNotes from './components/ReportNotes'
import DefinitionsAndAbbreviations from './components/DefinitionsAndAbbreviations'
import TitleAndContactInfo from './components/TitleAndContactInfo'
import WaterSources from './components/WaterSources'
import OverallWaterQuality from './components/OverallWaterQuality'
import AllContaminants from './components/AllContaminants'
import HealthRisksAndLead from './components/HealthRisksAndLead'
import InorganicContaminants from './components/InorganicContaminants'
import DisinfectantsAndByProducts from './components/DisinfectantsAndByProducts'
import LeadAndCopper from './components/LeadAndCopper'
import DisinfectantResidualReport from './components/DisinfectantResidualReport'
import AdditionalContaminants from './components/AdditionalContaminants'
import SystemSusceptibilitySummary from './components/SystemSusceptibilitySummary'

import {
  checkWaterSource,
  checkInorganicContaminants,
  checkDisinfectantResidualReport,
  checkDisinfectants,
  checkLeadAndCopper,
  calculateHighestLevelDetected
} from './helpers/ReportHelpers'

import './Report.scss'

class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      publicNotificationRule: '',
      revisedTotalColiformRule: ''
    }
  }

  organizeTable = violations => {
    const publicNotificationRule = violations.publicNotificationRule
    const revisedTotalColiformRule = violations.revisedTotalColiformRule
    let pNRArr = []
    let rTCRArr = []
    for (var i = 0; i < publicNotificationRule.length; i++) {
      let row = [
        publicNotificationRule[i].violationType,
        publicNotificationRule[i].violationBegin,
        publicNotificationRule[i].violationEnd,
        publicNotificationRule[i].violationExplanation
      ]
      pNRArr.push(row)
    }
    for (var j = 0; j < revisedTotalColiformRule.length; j++) {
      let row = [
        revisedTotalColiformRule[j].violationType,
        revisedTotalColiformRule[j].violationBegin,
        revisedTotalColiformRule[j].violationEnd,
        revisedTotalColiformRule[j].violationExplanation
      ]
      rTCRArr.push(row)
    }
    this.setState({ publicNotificationRule: pNRArr, revisedTotalColiformRule: rTCRArr })
  }

  componentDidMount() {
    const { getReport, match } = this.props
    window.scrollTo(0, 0)
    getReport({
      id: match.params.id,
      success: () => {
        const { reportDetails } = this.props
        const report = reportDetails.report_json
        this.setState({ inorganicHighest: calculateHighestLevelDetected(report.qualityTable) })
        if (report.violations) {
          if (
            report.violations.publicNotificationRule.length !== 0 ||
            report.violations.revisedTotalColiformRule.length !== 0
          ) {
            this.organizeTable(report.violations)
          }
        }
      }
    })
  }

  render() {
    const { reportDetails } = this.props
    if (reportDetails) {
      const report = reportDetails.report_json
      const inorganicContaminants = report.qualityTable.inorganicContaminants
      const disinfectants = report.qualityTable.disinfectantsAndDisinfectionByProducts
      const leadAndCopper = report.qualityTable.leadAndCopper
      const disinfectantResidualReport = report.qualityTable.disinfectantResidualReport
      return (
        <div className="white report-main" id="report">
          <Container>
            <TitleAndContactInfo
              contactInformation={report.contactInformation}
              nameOfUtility={report.nameOfUtility}
              nameOfReport={report.nameOfReport}
              title={report.title}
            />

            <hr />

            {checkWaterSource(report) ? <WaterSources sourcesOfWater={report.sourcesOfWater} /> : ''}
            {checkWaterSource(report) ? <hr /> : ''}

            {report.overallWaterQuality === undefined ? (
              ''
            ) : (
              <OverallWaterQuality
                overallWaterQuality={report.overallWaterQuality}
                text={report.overallWaterQualityText}
              />
            )}

            {report.overallWaterQuality === undefined ? '' : <hr className="divider" />}

            <AllContaminants />

            <hr />

            <HealthRisksAndLead />

            <hr className="divider" />

            {checkInorganicContaminants(report) ? (
              <InorganicContaminants
                inorganicContaminants={inorganicContaminants}
                inorganicHighest={this.state.inorganicHighest}
              />
            ) : (
              ''
            )}

            {checkInorganicContaminants(report) ? <hr className="divider" /> : ''}

            {checkDisinfectants(report) ? (
              <DisinfectantsAndByProducts disinfectantsAndDisinfectionByProducts={disinfectants} />
            ) : (
              ''
            )}

            {checkDisinfectants(report) ? <hr /> : ''}

            {checkLeadAndCopper(report) ? <LeadAndCopper leadAndCopper={leadAndCopper} /> : ''}

            {checkLeadAndCopper(report) ? <hr className="divider" /> : ''}

            {checkDisinfectantResidualReport(report) ? (
              <DisinfectantResidualReport disinfectantResidualReport={disinfectantResidualReport} />
            ) : (
              ''
            )}
            {checkDisinfectantResidualReport(report) ? <hr /> : ''}

            <AdditionalContaminants report={report} />

            <hr className="divider" />

            {report.systemSusceptibility === undefined || report.systemSusceptibility.length === 0 ? (
              ''
            ) : (
              <SystemSusceptibilitySummary systemSusceptibility={report.systemSusceptibility} />
            )}

            {this.state.publicNotificationRule === '' && this.state.revisedTotalColiformRule === '' ? (
              ''
            ) : (
              <Violations
                publicNotificationRule={this.state.publicNotificationRule}
                revisedTotalColiformRule={this.state.revisedTotalColiformRule}
              />
            )}

            {this.state.publicNotificationRule === '' && this.state.revisedTotalColiformRule === '' ? '' : <hr />}

            <ReportNotes />

            <hr className="divider" />

            <DefinitionsAndAbbreviations />

            <div className="copyright">
              <div className="small-text logo-text">
                <p>Powered by </p>
                <a href="https://www.varunaiot.com/iccr" target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt="logo" />{' '}
                </a>
              </div>
              <p className="small-text">Copyright © Varuna Tech Inc, 2019</p>
            </div>
          </Container>
        </div>
      )
    } else {
      return (
        <div id="report" style={{ height: '89vh' }} className="white report-main">
          <Loader top={30} />
        </div>
      )
    }
  }
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
)(Report)
