import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserReports extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const reports = this.props.reports.map((item, i) => {
      const report = item.report_json
      return (
        <div className="card white" key={i} style={{ padding: '15px' }}>
          <div className="card-content " style={{ minHeight: '150px' }}>
            <div className="" style={{ marginBottom: '0px' }}>
              <span style={{ color: '#437fad' }} className="card-title">
                <b>{report.title.toUpperCase()}</b>
              </span>
              <Link
                style={{ color: '#437fad', position: 'absolute', top: '15px', right: '15px' }}
                to={`/legacy-iccr/dashboard/update-report/${item.id}`}>
                <i className="material-icons right">edit</i>
              </Link>
            </div>
            <div style={{ display: 'flex' }}>
              <h6>
                <b>{report.nameOfUtility.toUpperCase()}</b>
              </h6>
              <h6 style={{ marginLeft: '10px', marginRight: '10px' }}>
                <b>|</b>
              </h6>
              <h6>
                <b>{report.nameOfReport.toUpperCase()}</b>
              </h6>
            </div>

            <p>{report.overallWaterQualityText}</p>
          </div>
          <div className="card-action">
            <Link style={{ color: '#437fad' }} href="#" to={`/report/${item.id}`}>
              View Report
            </Link>
          </div>
        </div>
      )
    })

    return (
      <div className="row">
        <div className="col s12">{reports}</div>
      </div>
    )
  }
}

export default UserReports
