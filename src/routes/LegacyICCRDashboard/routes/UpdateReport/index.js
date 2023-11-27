import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { HotTable } from '@handsontable/react'
import { getReport, updateReport, deleteReport, reportDetailsSelector } from 'store/modules/legacy-report'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import Loader from 'components/Loader'

import dataTypes from 'helpers/datatypes'
import conditionals from 'helpers/conditionals'

import './UpdateReport.scss'
import { authSelector } from 'store/modules/auth'

class UpdateReportFrom extends Component {
  constructor(props) {
    super(props)

    this.conditionals = conditionals

    this.inorganicContaminants = dataTypes.inorganicContaminants
    this.inorganicContaminantsColumns = dataTypes.inorganicContaminantsColumns
    this.disinfectants = dataTypes.disinfectants
    this.disinfectantsColumns = dataTypes.disinfectantsColumns
    this.leadAndCopper = dataTypes.leadAndCopper
    this.leadAndCopperColumns = dataTypes.leadAndCopperColumns
    this.disinfectantResidualReport = dataTypes.disinfectantResidualReport
    this.disinfectantResidualReportColumns = dataTypes.disinfectantResidualReportColumns

    this.state = null
  }

  handleDelete = () => {
    const { history } = this.props
    const userId = this.props.auth.user.id
    const reportId = this.state._id

    if (window.confirm('Are you sure you want to delete this report?')) {
      this.props.deleteReport({
        params: [reportId, userId],
        success: () => history.push('/legacy-iccr/dashboard')
      })
    }
  }

  handleViolations = violations => {
    if (violations.length !== 0) {
      let publicNotificationRuleData = []
      if (violations.publicNotificationRule.length !== 0) {
        let pNR = violations.publicNotificationRule
        for (var i = 0; i < pNR.length; i++) {
          publicNotificationRuleData.push([
            pNR[i].violationType,
            pNR[i].violationBegin,
            pNR[i].violationEnd,
            pNR[i].violationExplanation
          ])
        }
      } else {
        publicNotificationRuleData.push(['', '', '', ''], ['', '', '', ''])
      }
      let revisedTotalColiformRuleData = []
      if (violations.revisedTotalColiformRule.length !== 0) {
        const rTCR = violations.revisedTotalColiformRule
        for (var k = 0; k < rTCR.length; k++) {
          revisedTotalColiformRuleData.push([
            rTCR[k].violationType,
            rTCR[k].violationBegin,
            rTCR[k].violationEnd,
            rTCR[k].violationExplanation
          ])
        }
      } else {
        revisedTotalColiformRuleData.push(['', '', '', ''], ['', '', '', ''])
      }
      const result = {
        publicNotificationRule: publicNotificationRuleData,
        revisedTotalColiformRule: revisedTotalColiformRuleData
      }
      this.setState({ violations: result })
    } else {
      const result = {
        publicNotificationRule: [['', '', '', ''], ['', '', '', '']],
        revisedTotalColiformRule: [['', '', '', ''], ['', '', '', '']]
      }
      this.setState({ violations: result })
    }
  }

  handleTableData = qualityTable => {
    var classChem = {}
    for (var k in qualityTable) {
      if (k !== 'id') {
        classChem[k] = qualityTable[k]
      }
    }

    let inorganicContaminantsArr = [
      ['Barium (ppm)'],
      ['Fluoride (ppm)'],
      ['Nitrate (as Nitrogen) (ppm)'],
      ['Sodium (ppm)']
    ]
    let disinfectantsAndDisinfectionByProductsArr = [
      ['Chlorine and Chloramines (ppm)'],
      ['Haloacetic Acids (five) (HAA5) (ppb)'],
      ['TTHM [Total trihalomethanes] (ppm)']
    ]
    let leadAndCopperArr = [['Copper (tap water) (ppm)'], ['Lead (tap water) (ppb)']]
    let disinfectantResidualReportArr = []

    for (var l in classChem.inorganicContaminants) {
      if (l !== '_id') {
        for (var j in classChem.inorganicContaminants[l]) {
          if (j !== '_id') {
            if (l === 'barium') {
              inorganicContaminantsArr[0].push(classChem.inorganicContaminants[l][j])
            }
            if (l === 'fluoride') {
              inorganicContaminantsArr[1].push(classChem.inorganicContaminants[l][j])
            }
            if (l === 'nitrate') {
              inorganicContaminantsArr[2].push(classChem.inorganicContaminants[l][j])
            }
            if (l === 'sodium') {
              inorganicContaminantsArr[3].push(classChem.inorganicContaminants[l][j])
            }
          }
        }
      }
    }
    for (var m in classChem.disinfectantsAndDisinfectionByProducts) {
      if (m !== '_id') {
        for (var o in classChem.disinfectantsAndDisinfectionByProducts[m]) {
          if (o !== '_id') {
            if (m === 'chlorineAndChloramines') {
              disinfectantsAndDisinfectionByProductsArr[0].push(classChem.disinfectantsAndDisinfectionByProducts[m][o])
            }
            if (m === 'haloaceticAcids') {
              disinfectantsAndDisinfectionByProductsArr[1].push(classChem.disinfectantsAndDisinfectionByProducts[m][o])
            }
            if (m === 'tthm') {
              disinfectantsAndDisinfectionByProductsArr[2].push(classChem.disinfectantsAndDisinfectionByProducts[m][o])
            }
          }
        }
      }
    }
    for (var n in classChem.leadAndCopper) {
      if (n !== '_id') {
        for (var p in classChem.leadAndCopper[n]) {
          if (p !== '_id') {
            if (n === 'lead') {
              leadAndCopperArr[1].push(classChem.leadAndCopper[n][p])
            }
            if (n === 'copper') {
              leadAndCopperArr[0].push(classChem.leadAndCopper[n][p])
            }
          }
        }
      }
    }

    //Check if disinfectant residual report exists. Older reports do not have this property
    if (classChem.disinfectantResidualReport !== undefined) {
      let chlorine = classChem.disinfectantResidualReport.chlorine
      if (chlorine === undefined) {
        disinfectantResidualReportArr[0] = ['Chlorine', '', '', '', '', '', '', '', '']

        classChem.disinfectantResidualReport.chlorine = {
          year: '',
          averageLevel: '',
          rangeOfLevelsDetected: '',
          mRDL: '',
          mRDLG: '',
          unitOfMeasure: '',
          violation: '',
          sourceInDrinkingWater: ''
        }
      } else {
        disinfectantResidualReportArr[0] = [
          'Chlorine',
          chlorine.year,
          chlorine.averageLevel,
          chlorine.rangeOfLevelsDetected,
          chlorine.mRDL,
          chlorine.mRDLG,
          chlorine.unitOfMeasure,
          chlorine.violation,
          chlorine.sourceInDrinkingWater
        ]
      }
    } else {
      disinfectantResidualReportArr[0] = ['Chlorine', '', '', '', '', '', '', '', '']
    }

    this.setState({
      inorganicContaminantsArr,
      disinfectantsAndDisinfectionByProductsArr,
      leadAndCopperArr,
      disinfectantResidualReportArr,
      qualityTable: classChem
    })
  }

  handleSourcesOfWater = sourcesOfWater => {
    let state = { ...this.state }
    let sourceOfWaterArr = []
    if (sourcesOfWater) {
      for (var k in sourcesOfWater) {
        if (k !== '_id') {
          sourceOfWaterArr.push([
            sourcesOfWater[k][0].sourceWaterName,
            sourcesOfWater[k][0].sourceType,
            sourcesOfWater[k][0].activity,
            sourcesOfWater[k][0].status
          ])
        }
      }
    } else {
      sourceOfWaterArr = [['', '', '', ''], ['', '', '', '']]
    }
    state.sourceOfWaterArr = sourceOfWaterArr
    this.setState(state)
  }

  componentDidMount() {
    const { getReport, match } = this.props
    getReport({
      id: match.params.id
    })
  }

  componentDidUpdate(prevProps) {
    const { reportDetails } = this.props
    const report = reportDetails.report_json
    if (reportDetails && reportDetails !== prevProps.reportDetails) {
      // TEMPORARY SOLUTION
      if (report.systemSusceptibility[0] === undefined || report.systemSusceptibility[0].asbestos === undefined) {
        //
        //console.log(report)
        report.systemSusceptibility = {
          asbestos: '----',
          cyanide: '----',
          metals: '----',
          microbial: '----',
          minerals: '----',
          radiochemical: '----',
          syntheticOrganicChemicals: '----',
          disinfectionByproduct: '----',
          volatileOrganicChemicals: '----',
          drinkingWaterContaminant: '----',
          other: ''
        }
      } else {
        report.systemSusceptibility = report.systemSusceptibility[0]
      }
      // TEMPORARY SOLUTION
      if (report.overallWaterQuality === undefined) {
        report.overallWaterQuality = 'excellent'
        report.overallWaterQualityText = ''
      }

      this.setState(report)
      this.handleTableData(report.qualityTable)
      this.handleViolations(report.violations)
      this.handleSourcesOfWater(report.sourcesOfWater[0])
    }
  }

  onSubmit = e => {
    const { history, match } = this.props
    e.preventDefault()

    this.props.updateReport({
      id: match.params.id,
      data: {
        report_json: this.state
      },
      success: () => {
        history.push('/legacy-iccr/dashboard')
      }
    })
    this.setState(null)
  }

  handleSelect = (e, chem) => {
    let systemSusceptibility = { ...this.state.systemSusceptibility }
    systemSusceptibility[chem] = e.target.value
    this.setState({ systemSusceptibility })
  }

  handleContactInfoChange = fieldName => e => {
    this.setState({
      ...this.state,
      contactInformation: {
        ...this.state.contactInformation,
        [fieldName]: e.target.value
      }
    })
  }

  render() {
    var that = this
    if (this.state === null) {
      return <Loader top={20} />
    } else {
      return (
        <div style={{ paddingTop: '15px', marginBottom: '50px' }} id="update-report">
          <div className="container">
            <h4 className="lightblue">
              <b>UPDATE REPORT</b>
            </h4>
            <form style={{ width: '100%' }}>
              <div className="section">
                <h5 className="lightblue">
                  <b>REPORT INFO</b>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name Of Utility</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.nameOfUtility}
                        onChange={e => this.setState({ nameOfUtility: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name of Report</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.nameOfReport}
                        onChange={e => this.setState({ nameOfReport: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h5 className="lightblue">
                  <b>CONTACT AND DESCRIPTION INFORMATION</b>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Report From Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.reportFromDate}
                        onChange={this.handleContactInfoChange('reportFromDate')}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Report To Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.reportToDate}
                        onChange={this.handleContactInfoChange('reportToDate')}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact Title</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.contactTitle}
                        onChange={this.handleContactInfoChange('contactTitle')}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Office Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.officePhone}
                        onChange={this.handleContactInfoChange('officePhone')}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Operator Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.operatorPhone}
                        onChange={this.handleContactInfoChange('operatorPhone')}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact Website</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.contactWebsite}
                        onChange={this.handleContactInfoChange('contactWebsite')}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Contact Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    value={this.state.contactInformation.contactDescription}
                    onChange={this.handleContactInfoChange('contactDescription')}></textarea>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Description English</label>
                      <textarea
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.descriptionEnglish}
                        onChange={this.handleContactInfoChange('descriptionEnglish')}></textarea>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Description Spanishh</label>
                      <textarea
                        type="text"
                        className="form-control"
                        value={this.state.contactInformation.descriptionSpanish}
                        onChange={this.handleContactInfoChange('descriptionSpanish')}></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h5 className="lightblue">
                  <b>OVERALL WATER QUALITY</b>
                </h5>
                <div className="dropdown">
                  <select
                    className="btn btn-secondary dropdown-toggle"
                    stye={{ height: '20px' }}
                    onChange={e => this.setState({ overallWaterQuality: e.target.value })}
                    value={this.state.overallWaterQuality}>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="bad">Bad</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Over Water Quality Information</label>

                  <textarea
                    type="text"
                    className="form-control"
                    value={this.state.overallWaterQualityText}
                    onChange={e => {
                      this.setState({ overallWaterQualityText: e.target.value })
                    }}
                  />
                </div>
              </div>

              <div className="section">
                <div className="">
                  <h5 className="lightblue">
                    <b>INORGANIC CONTAMINANTS</b>
                  </h5>
                  <div style={{ overflowX: 'auto', height: 'auto' }}>
                    <HotTable
                      licenseKey="non-commercial-and-evaluation"
                      data={this.state.qualityTable ? this.state.inorganicContaminantsArr : this.inorganicContaminants}
                      columns={this.inorganicContaminantsColumns}
                      colHeaders={[
                        'Contaminant and Unit of Measurement',
                        'Date of samples\n (mo./yr.)',
                        'MCL Violation\n Y/N',
                        'Level\n Detected',
                        'Range of\n Results',
                        'MCLG',
                        'MCL',
                        'Likely Source\n of Contamination'
                      ]}
                      stretchH="all"
                      beforeChange={function(changes, source) {
                        let row = changes[0][0]
                        let column = changes[0][1]
                        let change = changes[0][3]
                        var state = JSON.parse(JSON.stringify(that.state))
                        state = that.conditionals.inorganicContaminantsConditional(state, row, column, change)
                        that.setState(state)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <h5 className="lightblue">
                    <b>DISINFECTANTS AND DISINFECTION BYPRODUCTS</b>
                  </h5>
                  <div style={{ overflowX: 'auto', height: 'auto' }}>
                    <HotTable
                      licenseKey="non-commercial-and-evaluation"
                      data={
                        this.state.qualityTable
                          ? this.state.disinfectantsAndDisinfectionByProductsArr
                          : this.disinfectants
                      }
                      colHeaders={[
                        'Disinfectant or Contaminant\n and Unit of Measurement',
                        'Date of samples\n (mo./yr.)',
                        'MCL Violation\n Y/N',
                        'Level\n Detected',
                        'Range of\n Results',
                        'MCLG',
                        'MCL',
                        'Likely Source\n of Contamination'
                      ]}
                      columns={this.disinfectantsColumns}
                      stretchH="all"
                      beforeChange={function(changes, source) {
                        let row = changes[0][0]
                        let column = changes[0][1]
                        let change = changes[0][3]
                        var state = JSON.parse(JSON.stringify(that.state))
                        state = that.conditionals.disinfectantsConditional(state, row, column, change)
                        that.setState(state)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <h5 className="lightblue">
                    <b>LEAD AND COPPER</b>
                  </h5>
                  <div style={{ overflowX: 'auto', height: 'auto' }}>
                    <HotTable
                      licenseKey="non-commercial-and-evaluation"
                      data={this.state.qualityTable ? this.state.leadAndCopperArr : this.leadAndCopper}
                      colHeaders={[
                        'Contaminant and Unit\n of Measurement',
                        'Date of samples\n (mo./yr.)',
                        'AL\n Exceeded',
                        '90th Percentile\n Result',
                        'Exceeding\n the AL',
                        'MCLG',
                        'AL\n (Action Level)',
                        'Likely Source\n of Contamination'
                      ]}
                      columns={this.leadAndCopperColumns}
                      stretchH="all"
                      beforeChange={function(changes, source) {
                        let row = changes[0][0]
                        let column = changes[0][1]
                        let change = changes[0][3]
                        var state = JSON.parse(JSON.stringify(that.state))
                        state = that.conditionals.leadAndCopperConditional(state, row, column, change)
                        that.setState(state)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <h5 className="lightblue">
                    <b>DISINFECTANT RESIDUAL REPORT</b>
                  </h5>
                  <div style={{ overflowX: 'auto', height: 'auto' }}>
                    <HotTable
                      licenseKey="non-commercial-and-evaluation"
                      data={
                        this.state.qualityTable
                          ? this.state.disinfectantResidualReportArr
                          : this.disinfectantResidualReport
                      }
                      colHeaders={[
                        'Contaminant',
                        'Year',
                        'Average\n Level',
                        'Range of\n Levels Detected',
                        'MRDL',
                        'MRDLG',
                        'Unit of\n measure',
                        'Violation',
                        'Source In\n Drinking Water'
                      ]}
                      columns={this.disinfectantResidualReportColumns}
                      stretchH="all"
                      beforeChange={function(changes, source) {
                        let row = changes[0][0]
                        let column = changes[0][1]
                        let change = changes[0][3]
                        var state = JSON.parse(JSON.stringify(that.state))
                        if (!state.qualityTable.disinfectantResidualReport) {
                          state.qualityTable.disinfectantResidualReport = {
                            chlorine: {
                              year: '',
                              averageLevel: '',
                              rangeOfLevelsDetected: '',
                              mRDL: '',
                              mRDLG: '',
                              unitOfMeasure: '',
                              violation: '',
                              sourceInDrinkingWater: ''
                            }
                          }
                        }
                        state = that.conditionals.disinfectantResidualReportConditional(state, row, column, change)
                        that.setState(state)
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="section">
                <h5 className="lightblue">
                  <b>CONTAMINANT INFORMATION</b>
                </h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Microbial Contaminants</label>
                      <textarea
                        type="text"
                        className="form-control"
                        onChange={e => this.setState({ microbialContaminants: e.target.value })}
                        value={this.state.microbialContaminants}></textarea>
                    </div>
                    <div className="form-group">
                      <label>Pesticides And Herbicides</label>
                      <textarea
                        type="text"
                        className="form-control"
                        onChange={e => this.setState({ pesticidesContaminants: e.target.value })}
                        value={this.state.pesticidesContaminants}></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Radioactive Contaminants</label>
                      <textarea
                        type="text"
                        className="form-control"
                        onChange={e => this.setState({ radioactiveContaminants: e.target.value })}
                        value={this.state.radioactiveContaminants}></textarea>
                    </div>
                    <div className="form-group">
                      <label>Organic Chemical Contaminants</label>
                      <textarea
                        type="text"
                        className="form-control"
                        onChange={e => this.setState({ organicContaminants: e.target.value })}
                        value={this.state.organicContaminants}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="section">
              <h5 className="lightblue">
                <b>SOURCES OF WATER</b>
              </h5>
              <div style={{ overflowX: 'auto', height: 'auto' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  colHeaders={['Source Water Name', 'Type', 'Activity', 'Status']}
                  data={this.state.sourceOfWaterArr}
                  colWidths={[150, 150, 150, 300]}
                  stretchH="last"
                  beforeChange={function(changes, source) {
                    let row = changes[0][0]
                    let column = changes[0][1]
                    let change = changes[0][3]
                    var state = JSON.parse(JSON.stringify(that.state))
                    // state.sourcesOfWaterArr[row][column] = change
                    console.log([row, column, change])
                    that.setState(state)
                  }}
                />
              </div>
            </div>

            <div className="section">
              <h5 className="lightblue">
                <b>SYSTEM SUSCEPTIBILITY AND ENTRY POINT SUMMARY</b>
              </h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>ASBESTOS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.asbestos}
                      onChange={e => {
                        this.handleSelect(e, 'asbestos')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>CYANIDE: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.cyanide}
                      onChange={e => {
                        this.handleSelect(e, 'cyanide')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>METALS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.metals}
                      onChange={e => {
                        this.handleSelect(e, 'metals')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>MICROBIAL: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.microbial}
                      onChange={e => {
                        this.handleSelect(e, 'microbial')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>MINERALS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.minerals}
                      onChange={e => {
                        this.handleSelect(e, 'minerals')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>RADIOCHEMICAL: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.radiochemical}
                      onChange={e => {
                        this.handleSelect(e, 'radiochemical')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>SYNTHETIC ORGANIC CHEMICALS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.syntheticOrganicChemical}
                      onChange={e => {
                        this.handleSelect(e, 'syntheticOrganicChemical')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>DISINFECTANT BYPRODUCTS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.disinfectionByproduct}
                      onChange={e => {
                        this.handleSelect(e, 'disinfectionByproduct')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>VOLATILE ORGANIC CHEMICALS: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.volatileOrganicChemicals}
                      onChange={e => {
                        this.handleSelect(e, 'volatileOrganicChemicals')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>DRINKING WATER CONTAMINANT: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.drinkingWaterContaminant}
                      onChange={e => {
                        this.handleSelect(e, 'drinkingWaterContaminant')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                  <div className="form-dropdown system-section">
                    <p className="small-text">
                      <b>OTHER: </b>
                    </p>
                    <select
                      className="form-control"
                      value={this.state.systemSusceptibility.other}
                      onChange={e => {
                        this.handleSelect(e, 'other')
                      }}>
                      <option value="----" key={0} className="dropdown-item" href="#">
                        ----
                      </option>
                      <option value="High" key={1} className="dropdown-item" href="#">
                        High
                      </option>
                      <option value="Medium" key={2} className="dropdown-item" href="#">
                        Medium
                      </option>
                      <option value="Low" key={3} className="dropdown-item" href="#">
                        Low
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="section">
              <h5 className="lightblue">
                <b>VIOLATIONS</b>
              </h5>
              <div>
                <p>
                  <b>Public Notification Rule</b>
                </p>
                <p className="small-text">
                  The Public Notification Rule helps to ensure that consumers will always know if there is a problem
                  with their drinking water. These notices immediately alert consumers if there is a serious probelm
                  with their drinking water (e.g., a boil water emergency)
                </p>
              </div>
              <div className="small-text">(Right click table cell to add another violation/row)</div>
              <div style={{ overflowX: 'auto', height: 'auto' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
                  data={this.state.violations.publicNotificationRule}
                  contextMenu={['row_below', '---------', 'undo', 'redo']}
                  allowInsertColumn={false}
                  allowRemoveColumn={false}
                  colWidths={[150, 150, 150, 300]}
                  stretchH="last"
                  beforeChange={function(changes, source) {
                    let row = changes[0][0]
                    let column = changes[0][1]
                    let change = changes[0][3]
                    var state = JSON.parse(JSON.stringify(that.state))
                    if (row > 0) {
                      if (state.violations.publicNotificationRule[row] === undefined) {
                        state.violations.publicNotificationRule.push(['', '', '', ''])
                      }
                      if (state.violations.publicNotificationRule[row]) {
                        state.violations.publicNotificationRule[row][column] = change
                      }
                    } else if (row === 0) {
                      if (state.violations.publicNotificationRule[row] === undefined) {
                        state.violations.publicNotificationRule.push(['', '', '', ''])
                      }
                      state.violations.publicNotificationRule[row][column] = change
                    }
                    that.setState(state)
                  }}
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <b>Revised Total Coliform Rule (RTCR)</b>
                <p className="small-text">
                  The Revised Total Coliform Rule (RTCR) seeks to prevent waterborne deseases caused by E. coli. E. coli
                  are bacteria whose presence indicates that the water may be contaminated with human or animal wastes.
                  Human pathogens in these wastes can cause short-term effects, such as diarrhea, cramps, nausea,
                  headaches, or other symptoms. They may pose a greater health risk for infants and young children.
                </p>
              </div>
              <div className="small-text">(Right click table cell to add another violation/row)</div>
              <div style={{ overflowX: 'auto', height: 'auto' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
                  data={this.state.violations.revisedTotalColiformRule}
                  contextMenu={['row_below', '---------', 'undo', 'redo']}
                  allowInsertColumn={false}
                  allowRemoveColumn={false}
                  colWidths={[150, 150, 150, 300]}
                  stretchH="last"
                  beforeChange={function(changes, source) {
                    let row = changes[0][0]
                    let column = changes[0][1]
                    let change = changes[0][3]
                    var state = JSON.parse(JSON.stringify(that.state))
                    if (row > 0) {
                      if (state.violations.revisedTotalColiformRule[row] === undefined) {
                        state.violations.revisedTotalColiformRule.push(['', '', '', ''])
                      }
                      if (state.violations.revisedTotalColiformRule[row]) {
                        state.violations.revisedTotalColiformRule[row][column] = change
                      }
                    } else if (row === 0) {
                      state.violations.revisedTotalColiformRule[row][column] = change
                    }
                    that.setState(state)
                  }}
                />
              </div>
            </div>

            <Row className="mt-3">
              <Col xs={6}>
                <Button
                  to="/legacy-iccr/dashboard"
                  as={Link}
                  type={null}
                  variant="danger"
                  onClick={this.handleDelete}
                  className="btn">
                  Delete
                </Button>
              </Col>
              <Col xs={6} className="text-right">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={e => {
                    this.onSubmit(e)
                  }}>
                  Update Report
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      )
    }
  }
}

UpdateReportFrom.propTypes = {
  getReport: PropTypes.func.isRequired,
  updateReport: PropTypes.func.isRequired,
  deleteReport: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  reportDetails: PropTypes.object
}

const selector = createStructuredSelector({
  auth: authSelector,
  reportDetails: reportDetailsSelector
})

const actions = {
  getReport,
  updateReport,
  deleteReport
}

export default connect(
  selector,
  actions
)(UpdateReportFrom)
