import React, { Component } from 'react'
import get from 'lodash/get'
import SingleBarChart from 'components/SingleBarChart'
import leadCooperIcon from 'icons/legacy/ScienceIcons_LeadCopper.png'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'

class LeadAndCopper extends Component {
  isEmpty = row => {
    let count = 0
    for (var k in row) {
      if (k !== 'id') {
        if (row[k] === '') count++
      }
    }
    return count === 7 ? true : false
  }

  componentWillMount() {
    const { leadAndCopper } = this.props
    let count = 0
    for (var k in leadAndCopper) {
      if (k !== 'id') {
        if (!this.isEmpty(leadAndCopper[k])) {
          count++
        }
      }
    }
    let bootstrapGrid = ''
    if (count === 2) {
      bootstrapGrid = 'col-6'
    } else if (count === 1) {
      bootstrapGrid = 'col-12'
    }
    this.setState({ bootstrapGrid })
  }

  render() {
    const { leadAndCopper } = this.props
    return (
      <div className="inorganic-contaminants">
        <div className="row">
          <div className="col-lg-4">
            <div className='d-flex'>
              <div className="icon-box redbackground d-flex">
                <img alt="disinfectantsIcon" className='m-auto' src={leadCooperIcon} />
              </div>
              <h5 className="red w-75">
                <b>LEAD AND COPPER</b>
              </h5>
            </div>
            <div className="small-text mt-3">
              Lead in drinking water is primarily from materials and components associated with service lines and home
              plumbing.
            </div>

            <div className="pie-chart-and-text">
              <div className="row">
                <div className="col-6">
                  <ContaminantsDoughnut value={0} backColor="#9e573d" foreColor="#d6a28f" />
                </div>
                <div className="col-6">
                  <p className="small-text my-3">
                    0% of the maximum allowable lead and copper were found in the water during the last testing cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="chart">
              <div className="bar-graph">
                <div className=" bar-chart-row lead-and-copper">
                  <div className="row">
                    <div className="col-md-2 col-3 corner-header">
                      <p className="small-text red">
                        <b>Maximum</b>
                      </p>
                      <p className="small-text red">
                        <b>Contaminant</b>
                      </p>
                      <p className="small-text red">
                        <b>Level(MCL)</b>
                      </p>
                    </div>
                    <div className="col-md-10 col-9 ">
                      <div className="column-header">
                        <div className="row">
                          {this.isEmpty(get(leadAndCopper, 'copper')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              leadAndCopper,
                              'copper.mclg'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(leadAndCopper, 'lead')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              leadAndCopper,
                              'lead.mclg'
                            )}ppb`}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2 col-3"></div>
                  <div className="col-md-10 col-9">
                    <div className="chart-content">
                      <div className="row h-100">
                        {this.isEmpty(get(leadAndCopper, 'copper')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="50"
                              height2="40"
                              section="lead-and-copper"
                              datesOfSampling={get(leadAndCopper, 'copper.datesOfSampling')}
                              levelDetected={get(leadAndCopper, 'copper.ninetiethPercentileResult')}
                            />
                          </div>
                        )}
                        {this.isEmpty(get(leadAndCopper, 'lead')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="30"
                              height2="60"
                              section="lead-and-copper"
                              datesOfSampling={get(leadAndCopper, 'lead.datesOfSampling')}
                              levelDetected={get(leadAndCopper, 'lead.ninetiethPercentileResult')}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2 col-3"></div>
                  <div className="col-md-10 col-9">
                    <div className="contaminant-name">
                      <div className="row">
                        {this.isEmpty(get(leadAndCopper, 'copper')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>COPPER</b>
                          </div>
                        )}
                        {this.isEmpty(get(leadAndCopper, 'lead')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>LEAD</b>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-row-1">
                  <div className="row">
                    <div className="col-md-2 col-3">
                      <p className="smaller-text ">
                        <b>DATE OF TEST</b>
                      </p>
                    </div>
                    <div className="col-md-10 col-9">
                      <div className="row">
                        {this.isEmpty(get(leadAndCopper, 'copper')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(leadAndCopper, 'copper.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(get(leadAndCopper, 'lead')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(leadAndCopper, 'lead.datesOfSampling')})
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-row-2">
                  <div className="row">
                    <div className="col-md-2 col-3">
                      <p className="smaller-text ">
                        <b>RANGE OF SAMPLES</b>
                      </p>
                    </div>
                    <div className="col-md-10 col-9">
                      <div className="row">
                        {this.isEmpty(get(leadAndCopper, 'copper')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(leadAndCopper, 'copper.exceedingTheAl')}ppm
                          </div>
                        )}
                        {this.isEmpty(get(leadAndCopper, 'lead')) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(leadAndCopper, 'lead.exceedingTheAl')}ppb
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="likely-source">
          <h5 className="lightblue">
            <b>LIKELY SOURCE OF CONTAMINATION</b>
          </h5>
          <div className="row">
            <div className="col-sm-6">
              {this.isEmpty(leadAndCopper.copper) ? (
                ''
              ) : (
                <div>
                  <b className="small-text">COPPER</b>
                  <p className="small-text">{get(leadAndCopper, 'copper.likelySourceOfContamination')}</p>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              {this.isEmpty(leadAndCopper.lead) ? (
                ''
              ) : (
                <div>
                  <b className="small-text">LEAD</b>
                  <p className="small-text">{get(leadAndCopper, 'lead.likelySourceOfContamination')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeadAndCopper
