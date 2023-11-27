import React, { Component } from 'react'
import get from 'lodash/get'
import SingleBarChart from 'components/SingleBarChart'
import disinfectantsIcon from 'icons/legacy/ScienceIcons_disinfectants.png'

class DisinfectantsAndByProducts extends Component {
  isEmpty = row => {
    let count = 0
    for (var k in row) {
      if (k !== 'id') {
        if (row[k] === '') count++
      }
    }
    return count === 7 ? true : false
  }

  render() {
    const { disinfectantsAndDisinfectionByProducts } = this.props
    let count = 0
    for (var k in disinfectantsAndDisinfectionByProducts) {
      if (k !== '_id') {
        if (!this.isEmpty(disinfectantsAndDisinfectionByProducts[k])) {
          count++
        }
      }
    }
    let bootstrapGrid = ''
    if (count === 3) {
      bootstrapGrid = 'col-4'
    } else if (count === 2) {
      bootstrapGrid = 'col-6'
    } else if (count === 1) {
      bootstrapGrid = 'col-12'
    }
    // const dataDisinfectants = {
    //   labels: ['blah', 'blah'],
    //   datasets: [
    //     {
    //       data: [37.7, 62.3],
    //       backgroundColor: ['#7ecaea', '#219ace']
    //     }
    //   ],
    //   num: '62.3%',
    //   text: ''
    // }
    return (
      <div className="disinfectants pagebreak">
        <div className="row">
          <div className="col-lg-4" style={{ marginBottom: '15px' }}>
            <div className='d-flex'>
              <div className="icon-box bluebackground d-flex">
                <img alt="disinfectantsIcon" src={disinfectantsIcon} className='m-auto' />
              </div>
              <h5 className="blue" style={{ maxWidth: '70%' }}>
                <b>DISINFECTANTS AND DISINFECTION BY-PRODUCTS</b>
              </h5>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="chart">
              <div className="bar-graph">
                <div className="bar-chart-row disinfectants">
                  <div className="row">
                    <div className="col-md-3 col-3 corner-header">
                      <p className="small-text blue">
                        <b>Maximum</b>
                      </p>
                      <p className="small-text blue">
                        <b>Contaminant</b>
                      </p>
                      <p className="small-text blue">
                        <b>Level(MCL)</b>
                      </p>
                    </div>
                    <div className="col-md-9 col-9 ">
                      <div className="column-header">
                        <div className="row">
                          {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines')) ? (
                            ''
                          ) : (
                            <div className={`${bootstrapGrid} header-item small-text`}>{`${get(
                              disinfectantsAndDisinfectionByProducts,
                              'chlorineAndChloramines.mclOrMrdl'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids')) ? (
                            ''
                          ) : (
                            <div className={`${bootstrapGrid} header-item small-text`}>{`${get(
                              disinfectantsAndDisinfectionByProducts,
                              'haloaceticAcids.mclOrMrdl'
                            )}ppm`}</div>
                          )}
                          {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'tthm')) ? (
                            ''
                          ) : (
                            <div className={`${bootstrapGrid} header-item small-text`}>{`${get(
                              disinfectantsAndDisinfectionByProducts,
                              'tthm.mclOrMrdl'
                            )}ppm`}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-3"></div>
                  <div className="col-md-9 col-9">
                    <div className="chart-content">
                      <div className="row" style={{ height: '100%' }}>
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={bootstrapGrid}
                              chemical="BARIUM"
                              height1="50"
                              height2="40"
                              section="disinfectants"
                              datesOfSampling={get(
                                disinfectantsAndDisinfectionByProducts,
                                'chlorineAndChloramines.datesOfSampling'
                              )}
                              levelDetected={get(
                                disinfectantsAndDisinfectionByProducts,
                                'chlorineAndChloramines.levelDetected'
                              )}
                            />
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={bootstrapGrid}
                              chemical="BARIUM"
                              height1="30"
                              height2="60"
                              section="disinfectants"
                              datesOfSampling={get(
                                disinfectantsAndDisinfectionByProducts,
                                'haloaceticAcids.datesOfSampling'
                              )}
                              levelDetected={get(
                                disinfectantsAndDisinfectionByProducts,
                                'haloaceticAcids.levelDetected'
                              )}
                            />
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'tthm')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} bars`}>
                            <SingleBarChart
                              bootstrapGrid={bootstrapGrid}
                              chemical="BARIUM"
                              height1="80"
                              height2="70"
                              section="disinfectants"
                              datesOfSampling={get(disinfectantsAndDisinfectionByProducts, 'tthm.datesOfSampling')}
                              levelDetected={get(disinfectantsAndDisinfectionByProducts, 'tthm.levelDetected')}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-3"></div>
                  <div className="col-md-9 col-9">
                    <div className="contaminant-name">
                      <div className="row">
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} small-text contaminant`}>
                            <b>CHLORINE & CHLORAMINES</b>
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} small-text contaminant`}>
                            <b>HAA5</b>
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'tthm')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} small-text contaminant`}>
                            <b>TTHM</b>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-row-1">
                  <div className="row">
                    <div className="col-md-3 col-3">
                      <p className="smaller-text ">
                        <b>DATE OF TEST</b>
                      </p>
                    </div>
                    <div className="col-md-9 col-9">
                      <div className="row">
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            ({get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            ({get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids.datesOfSampling')})
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'tthm')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            ({get(disinfectantsAndDisinfectionByProducts, 'tthm.datesOfSampling')})
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-row-2">
                  <div className="row">
                    <div className="col-md-3 col-3">
                      <p className="smaller-text ">
                        <b>RANGE OF SAMPLES</b>
                      </p>
                    </div>
                    <div className="col-md-9 col-9">
                      <div className="row">
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            {get(disinfectantsAndDisinfectionByProducts, 'chlorineAndChloramines.rangeOfResults')}
                            ppm
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            {get(disinfectantsAndDisinfectionByProducts, 'haloaceticAcids.rangeOfResults')}ppm
                          </div>
                        )}
                        {this.isEmpty(get(disinfectantsAndDisinfectionByProducts, 'tthm')) ? (
                          ''
                        ) : (
                          <div className={`${bootstrapGrid} smaller-text number`}>
                            {get(disinfectantsAndDisinfectionByProducts, 'tthm.rangeOfResults')}ppm
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

export default DisinfectantsAndByProducts
