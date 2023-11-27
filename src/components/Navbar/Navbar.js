import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { logout, authSelector } from 'store/modules/auth'
// import { Navbar as NavbarComp, NavItem } from 'react-materialize';
import LogoSimple from 'icons/legacy/varuna-logo.png'
import SignedInLinks from 'components/SignedInLinks'
import SignedOutLinks from 'components/SignedOutLinks'

import './Navbar.scss'

class Navbar extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isAuth: this.props.auth.isAuthenticated
  //   }
  // }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logout()
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props !== nextProps){
  //     this.setState({ isAuth: nextProps.auth.isAuthenticated })
  //   }
  // }

  render() {
    return (
      <nav className="legacy-navbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            to="/"
            style={{
              fontSize: '20px'
            }}
            className="">
            <img alt="LogoSimple" src={LogoSimple} style={{ height: '50px', position: 'absolute', top: '6px' }} />
          </Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarNav">
            {this.props.auth.isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  auth: authSelector
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
