import React from 'react'
import Logo from '../Logo'
import SideNavMenu from '../SideNavMenu'

import './MainSidebar.scss'

const MainSidebar = () => (
  <div className="MainSidebar d-none d-md-block">
    <Logo />
    <SideNavMenu />
  </div>
)

export default MainSidebar
