import React from 'react'

import IconBell from 'icons/IconBell'
import IconMail from 'icons/IconMail'
import IconQuestion from 'icons/IconQuestion'

import './HeaderNav.scss'

const HeaderNav = () => (
  <div className="HeaderNav d-none d-sm-block">
    <IconQuestion className="HeaderNav__question-icon" />
    <IconMail className="HeaderNav__mail-icon" />
    <IconBell className="HeaderNav__bell-icon" />
  </div>
)

export default HeaderNav
