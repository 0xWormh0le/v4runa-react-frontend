import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from 'store/modules/auth'

class SignedInLinks extends Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <ul className="SignedInLinks navbar-nav ml-auto flex-nowra">
        <li className="nav-item">
          <Link className="dashboard nav-link" to="/legacy-iccr/dashboard">
            Dashboard
          </Link>
          {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Features</a> */}
          <Link className="contact nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Features</a> */}
          <div className="sign-out nav-link" onClick={this.onLogoutClick}>
            Sign Out
          </div>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

SignedInLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  { logout }
)(SignedInLinks)
