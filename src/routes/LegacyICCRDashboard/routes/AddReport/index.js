import React, { Component } from 'react'
import { profileSelector } from 'store/modules/auth'
import { connect } from 'react-redux'
import { createReport } from 'store/modules/legacy-report'
import { HotTable } from '@handsontable/react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import dataTypes from 'helpers/datatypes'
import conditionals from 'helpers/conditionals'

import './AddReport.scss'
import { createStructuredSelector } from 'reselect'

class AddReport extends Component {
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
    this.systemSusceptibilityColumns1 = dataTypes.systemSusceptibilityColumns1
    this.systemSusceptibilityColumns2 = dataTypes.systemSusceptibilityColumns2

    this.state = dataTypes.default

    this.pnViolationData = [['', '', '', ''], ['', '', '', '']]
    this.revisedTotalColiformRuleData = [['', '', '', ''], ['', '', '', '']]
    this.sourcesOfWaterData = [['', '', '', ''], ['', '', '', '']]
    this.systemSusceptibilityData = [['', '', '', '', '', '', '', '', '', '', '']]
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onSubmit = e => {
    const { history, user } = this.props
    e.preventDefault()
    this.props.createReport({
      data: {
        report_json: {
          ...this.state,
          userId: user.id,
          userName: `${user.first_name} ${user.last_name}`
        }
      },
      success: () => history.push('/legacy-iccr/dashboard')
    })
  }

  handleSelect = (e, chem) => {
    let systemSusceptibility = { ...this.state.systemSusceptibility }
    systemSusceptibility[chem] = e.target.value
    this.setState({ systemSusceptibility })
  }

  render() {
    var that = this
    return (
      <div style={{ height: '75vh' }} className="container" id="add-report">
        <h4 className="lightblue align-center">
          <b>ADD REPORT</b>
        </h4>
        <form style={{ width: '100%', marginTop: '20px' }}>
          <div className="section">
            <h5 className="lightblue">
              <b>REPORT INFO</b>
            </h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({ title: e.target.value })}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name of Utility</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({ nameOfUtility: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name of Report</label>

                  <input
                    type="text"
                    className="form-control"
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
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.reportFromDate = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Report To Date</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.reportToDate = e.target.value
                      this.setState({ contactInformation })
                    }}
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
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.contactTitle = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Office Phone</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.officePhone = e.target.value
                      this.setState({ contactInformation })
                    }}
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
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.operatorPhone = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Contact Website</label>

                  <input
                    type="text"
                    className="form-control"
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.contactWebsite = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Contact Description</label>

              <textarea
                type="text"
                className="form-control"
                onChange={e => {
                  let contactInformation = { ...this.state.contactInformation }
                  contactInformation.contactDescription = e.target.value
                  this.setState({ contactInformation })
                }}
              />
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Description English</label>

                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.descriptionEnglish = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Description Spanish</label>

                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => {
                      let contactInformation = { ...this.state.contactInformation }
                      contactInformation.descriptionSpanish = e.target.value
                      this.setState({ contactInformation })
                    }}
                  />
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
              <label htmlFor="exampleInputEmail1">Overall Water Quality Information</label>

              <textarea
                type="text"
                className="form-control"
                onChange={e => {
                  this.setState({ overallWaterQualityText: e.target.value })
                }}
              />
            </div>
          </div>

          <div className="section">
            <div>
              <h5 className="lightblue">
                <b>INORGANIC CONTAMINANTS</b>
              </h5>
              <div style={{ overflowX: 'auto', height: 'auto' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  data={this.inorganicContaminants}
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
                  data={this.disinfectants}
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
                  data={this.leadAndCopper}
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
                  data={this.disinfectantResidualReport}
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Pesticides And Herbicides</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({ pesticidesContaminants: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Radioactive Contaminants</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({ radioactiveContaminants: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Organic Chemical Contaminants</label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={e => this.setState({ organicContaminants: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="section">
          <h5 className="lightblue">
            <b>SOURCES OF WATER</b>
          </h5>
          <div>
            <div style={{ overflowX: 'auto', height: 'auto' }}>
              <HotTable
                licenseKey="non-commercial-and-evaluation"
                colHeaders={['Source Water Name', 'Type', 'Activity', 'Status']}
                data={this.sourcesOfWaterData}
                colWidths={[150, 150, 150, 300]}
                stretchH="all"
                beforeChange={function(changes, source) {
                  let row = changes[0][0]
                  let column = changes[0][1]
                  let change = changes[0][3]
                  var state = JSON.parse(JSON.stringify(that.state))
                  state = that.conditionals.sourcesOfWater(state, row, column, change)
                  that.setState(state)
                }}
              />
            </div>
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
              The Public Notification Rule helps to ensure that consumers will always know if there is a problem with
              their drinking water. These notices immediately alert consumers if there is a serious probelm with their
              drinking water (e.g., a boil water emergency)
            </p>
          </div>
          <div className="small-text">(Right click table cell to add another violation/row)</div>
          <div style={{ overflowX: 'auto', height: 'auto' }}>
            <HotTable
              licenseKey="non-commercial-and-evaluation"
              colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
              data={this.pnViolationData}
              contextMenu={['row_below', '---------', 'undo', 'redo']}
              allowInsertColumn={false}
              allowRemoveColumn={false}
              colWidths={[150, 150, 150, 300]}
              stretchH="all"
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
                  state.violations.publicNotificationRule[row][column] = change
                }
                that.setState(state)
              }}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <b>Revised Total Coliform Rule (RTCR)</b>
            <p className="small-text">
              The Revised Total Coliform Rule (RTCR) seeks to prevent waterborne deseases caused by E. coli. E. coli are
              bacteria whose presence indicates that the water may be contaminated with human or animal wastes. Human
              pathogens in these wastes can cause short-term effects, such as diarrhea, cramps, nausea, headaches, or
              other symptoms. They may pose a greater health risk for infants and young children.
            </p>
          </div>
          <div className="small-text">(Right click table cell to add another violation/row)</div>
          <div style={{ overflowX: 'auto', height: 'auto' }}>
            <HotTable
              licenseKey="non-commercial-and-evaluation"
              colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
              data={this.revisedTotalColiformRuleData}
              contextMenu={['row_below', '---------', 'undo', 'redo']}
              allowInsertColumn={false}
              allowRemoveColumn={false}
              colWidths={[150, 150, 150, 300]}
              stretchH="all"
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
        <div className="text-right mt-3 mb-3">
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Submit Report
          </Button>
        </div>
      </div>
    )
  }
}

AddReport.propTypes = {
  createReport: PropTypes.func.isRequired,
  user: PropTypes.object
}

const selector = createStructuredSelector({
  user: profileSelector
})

const actions = {
  createReport
}

export default connect(
  selector,
  actions
)(AddReport)
