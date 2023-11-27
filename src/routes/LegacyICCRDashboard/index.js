import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import { profileSelector } from 'store/modules/auth'
import { getReportsList, reportsListSelector, reportsListLoadingSelector } from 'store/modules/legacy-report'
import UserReports from './components/UserReports'
import Loader from 'components/Loader'
import './Dashboard.scss'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getReportsList()
  }

  render() {
    const { reports, reportsListLoading, user } = this.props

    return (
      <div style={{ minHeight: '95vh', height: '100%', background: '#f4f4f4' }}>
        <div className="container" id="dashboard">
          <div className="row pt-3 pb-3">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 text-right">
              <Button variant="primary" as={Link} type={null} to="/legacy-iccr/dashboard/add-report">
                Add Report
                <i className="material-icons ml-2">add_circle</i>
              </Button>
            </div>
          </div>

          {reportsListLoading && <Loader top={30} />}
          {reports && reports.length > 0 && !reportsListLoading && <UserReports reports={reports} user={user} />}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getReportsList: PropTypes.func.isRequired,
  reports: PropTypes.array.isRequired,
  reportsListLoading: PropTypes.bool,
  user: PropTypes.object
}

const selector = createStructuredSelector({
  reports: reportsListSelector,
  reportsLoading: reportsListLoadingSelector,
  user: profileSelector
})

const actions = {
  getReportsList
}

export default connect(
  selector,
  actions
)(Dashboard)
