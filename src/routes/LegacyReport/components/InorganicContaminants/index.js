import React, { Component } from 'react'
import get from 'lodash/get'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'
import inorganicIcon from 'icons/legacy/ScienceIcons_InorganicCont.png'
import SingleBarChart from 'components/SingleBarChart'
import './InorganicContaminants.scss'

class InorganicContaminants extends Component {
  state = {}

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
    const { inorganicContaminants } = this.props
    let count = 0
    for (var k in inorganicContaminants) {
      if (k !== '_id') {
        if (!this.isEmpty(inorganicContaminants[k])) {
          count++
        }
      }
    }
    let bootstrapGrid = ''
    if (count === 4) {
      bootstrapGrid = 'col-3'
    } else if (count === 3) {
      bootstrapGrid = 'col-4'
    } else if (count === 2) {
      bootstrapGrid = 'col-6'
    } else if (count === 1) {
      bootstrapGrid = 'col-12'
    }
    this.setState({ bootstrapGrid })
  }

  render() {
    const highestInorganic = this.props.inorganicHighest
    const { inorganicContaminants } = this.props

    return (
      <div className="inorganic-contaminants">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex">
              <div className="icon-box yellowbackground">
                <img alt="inorganicIcon" src={inorganicIcon} className='inorganic-contaminants__icon' />
              </div>
              <h5 className="yellow">
                <b>INORGANIC CONTAMINANTS</b>
              </h5>
            </div>

            <div className="pie-chart-and-text d-flex justify-content-center align-items-center">
              <ContaminantsDoughnut value={highestInorganic / 100} backColor="#e8bd68" foreColor="#e5a82d" />
            </div>
          </div>

          <div className="col-lg-9">
            <div className="chart">
              <div className="bar-graph">
                <div className=" bar-chart-row inorganic">
                  <div className="row">
                    <div className="col-md-2 col-3 corner-header">
                      <p className="small-text yellow">
                        <b>Maximum</b>
                      </p>
                      <p className="small-text yellow">
                        <b>Contaminant</b>
                      </p>
                      <p className="small-text yellow">
                        <b>Level(MCL)</b>
                      </p>
                    </div>
                    <div className="col-md-10 col-9 ">
                      <div className="column-header">
                        <div className="row">
                          {this.isEmpty(get(inorganicContaminants, 'barium')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              inorganicContaminants,
                              'barium.mcl'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(inorganicContaminants, 'fluoride')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              inorganicContaminants,
                              'fluoride.mcl'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(inorganicContaminants, 'nitrate')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              inorganicContaminants,
                              'nitrate.mcl'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(inorganicContaminants, 'sodium')) ? (
                            ''
                          ) : (
                            <div className={`${this.state.bootstrapGrid} header-item small-text`}>{`${get(
                              inorganicContaminants,
                              'sodium.mcl'
                            )}ppm`}</div>
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
                        {this.isEmpty(inorganicContaminants.barium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="50"
                              height2="40"
                              section="inorganic"
                              datesOfSampling={get(inorganicContaminants, 'barium.datesOfSampling')}
                              levelDetected={get(inorganicContaminants, 'barium.levelDetected')}
                            />
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.fluoride) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="30"
                              height2="60"
                              section="inorganic"
                              datesOfSampling={get(inorganicContaminants, 'fluoride.datesOfSampling')}
                              levelDetected={get(inorganicContaminants, 'fluoride.levelDetected')}
                            />
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.nitrate) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="70"
                              height2="60"
                              section="inorganic"
                              datesOfSampling={get(inorganicContaminants, 'nitrate.datesOfSampling')}
                              levelDetected={get(inorganicContaminants, 'nitrate.levelDetected')}
                            />
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.sodium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={this.state.bootstrapGrid}
                              chemical="BARIUM"
                              height1="50"
                              height2="60"
                              section="inorganic"
                              datesOfSampling={get(inorganicContaminants, 'sodium.datesOfSampling')}
                              levelDetected={get(inorganicContaminants, 'sodium.levelDetected')}
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
                        {this.isEmpty(inorganicContaminants.barium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>BARIUM</b>
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.fluoride) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>FLUORIDE</b>
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.nitrate) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>NITRATE (AS NITROGEN)</b>
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.sodium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} small-text contaminant`}>
                            <b>SODIUM</b>
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
                        {this.isEmpty(inorganicContaminants.barium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(inorganicContaminants, 'barium.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.fluoride) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(inorganicContaminants, 'fluoride.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.nitrate) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(inorganicContaminants, 'nitrate.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.sodium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            ({get(inorganicContaminants, 'sodium.datesOfSampling')})
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
                        {this.isEmpty(inorganicContaminants.barium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(inorganicContaminants, 'barium.rangeOfResults')}ppm
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.fluoride) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(inorganicContaminants, 'fluoride.rangeOfResults')}ppm
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.nitrate) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(inorganicContaminants, 'nitrate.rangeOfResults')}ppm
                          </div>
                        )}
                        {this.isEmpty(inorganicContaminants.sodium) ? (
                          ''
                        ) : (
                          <div className={`${this.state.bootstrapGrid} smaller-text number`}>
                            {get(inorganicContaminants, 'sodium.rangeOfResults')}ppm
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
      </div>
    )
  }
}

export default InorganicContaminants
