import React from 'react'
import './Logo.scss'
import IconLogo from './Icons/Varuna_logo_Final.svg'

import { Link } from 'react-router-dom'

const Logo = () => (
  <div className="SidebarLogo">
    <Link to="/landing">
      <img alt="IconLogo" src={IconLogo} />
    </Link>
  </div>
)

export default Logo
