import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import debounce from 'lodash/debounce'

import Navbar from 'react-bootstrap/Navbar'
import IconHouse from 'icons/IconHouse'
import IconQuestion from 'icons/IconQuestion'
import IconMail from 'icons/IconMail'
import IconBell from 'icons/IconBell'
import FooterUserActions from 'components/FooterUserActions'
import { logout } from 'store/modules/auth'

import './MobileFooter.scss'

function MobileFooter({ logout }) {
  const [shadow, setShadow] = useState(false)
  const handleScroll = debounce(() => {
    setShadow(window.innerHeight + window.scrollY < document.body.offsetHeight)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <Navbar
      fixed="bottom"
      className={cn('MobileFooter', { 'MobileFooter--shadow': shadow }, 'justify-content-between', 'd-md-none')}>
      <IconHouse className="MobileFooter__icon" />
      <IconQuestion className="MobileFooter__icon" />
      <IconMail className="MobileFooter__icon" />
      <IconBell className="MobileFooter__icon" />
      <FooterUserActions className="MobileFooter__icon" logout={logout} />
    </Navbar>
  )
}

const actions = {
  logout
}

export default connect(
  null,
  actions
)(MobileFooter)
