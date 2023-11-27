import React, { Component } from 'react'
// import { Collapsible, CollapsibleItem } from 'react-materialize';
import { HotTable } from '@handsontable/react'

class Violations extends Component {
  render() {
    const that = this
    return (
      <div className="violations">
        <div className="tab">
          <h5 className="lightblue">
            <b>VIOLATIONS</b>
          </h5>
        </div>
        <div className="content">
          {this.props.publicNotificationRule.length === 0 ? (
            ''
          ) : (
            <div className="vio-1">
              <p className="small-text">
                <b>PUBLIC NOTICE RULE LINKED TO VIOLATION</b> | 2/24/2014 - 6/14/2018 | 8/31/2017 - 7/5/2018
              </p>
              <p className="small-text">
                The Public Notification Rule helps to ensure that consumers will always know if there is a problem with
                their drinking water. These notices immediately alert consumers if there is a serious problem with their
                drinking water (e.g., a boil water emergency)
              </p>

              <div className="small-text" style={{ marginTop: '15px' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
                  data={that.props.publicNotificationRule}
                  columns={[{ readOnly: true }, { readOnly: true }, { readOnly: true }, { readOnly: true }]}
                  colWidths={[50, 50, 50, 100]}
                  stretchH="all"
                  autoRowSize="true"
                />
              </div>
            </div>
          )}

          {this.props.revisedTotalColiformRule.length === 0 ? (
            ''
          ) : (
            <div className="vio-1">
              <b>Revised Total Coliform Rule (RTCR)</b>
              <p className="small-text">
                The Revised Total Coliform Rule (RTCR) seeks to prevent waterborne diseases caused by E. coli. E. coli
                are bacteria whose presence indicates that the water may be contaminated with human or animal wastes.
                Human pathogens in these wastes can cause short-term effects, such as diarrhea, cramps, nausea,
                headaches, or other symptoms. They may pose a greater health risk for infants and young children.
              </p>
              <div className="small-text" style={{ marginTop: '15px' }}>
                <HotTable
                  licenseKey="non-commercial-and-evaluation"
                  colHeaders={['Violation Type', 'Violation Begin', 'Violation End', 'Violation Explanation']}
                  data={that.props.revisedTotalColiformRule}
                  columns={[{ readOnly: true }, { readOnly: true }, { readOnly: true }, { readOnly: true }]}
                  colWidths={[50, 50, 50, 100]}
                  stretchH="all"
                  autoRowSize="true"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Violations
