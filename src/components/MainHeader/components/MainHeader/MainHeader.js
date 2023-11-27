import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import debounce from 'lodash/debounce'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PropTypes from 'prop-types'

import CurrentTime from '../CurrentTime/index'
import HeaderNav from '../HeaderNav/index'
import UserActions from '../UserActions/index'
import Logo from '../Logo/index'
import MobileNavMenu from '../MobileNavMenu/index'

import { logout } from 'store/modules/auth'
import './MainHeader.scss'

const MainHeader = ({ logout }) => {
  const [shadow, setShadow] = useState(false)

  const handleScroll = debounce(() => setShadow(window.scrollY > 0), 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <Navbar collapseOnSelect fixed="top" expand="md" className={cn('MainHeader', { 'MainHeader--shadow': shadow })}>
      <Navbar.Brand href="/landing" className="d-md-none">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="d-none d-md-flex">
          <CurrentTime />
        </Navbar.Text>
        <Navbar.Text className="d-none d-md-flex p-0">
          <HeaderNav />
        </Navbar.Text>
        <Nav className="d-none d-md-flex">
          <UserActions logout={logout} />
        </Nav>

        <MobileNavMenu className="d-block d-md-none" />
      </Navbar.Collapse>
    </Navbar>
  )
}

MainHeader.propTypes = {
  logout: PropTypes.func.isRequired
}

const actions = {
  logout
}

export default connect(
  null,
  actions
)(MainHeader)
