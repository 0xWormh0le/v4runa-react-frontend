import React from 'react'
import MainHeader from 'components/MainHeader'
import MainSidebar from 'components/MainSidebar'
import MobileFooter from 'components/MobileFooter'

import './MainLayout.scss'

const MainLayout = ({ children }) => (
  <div className="MainLayout">
    <MainSidebar />
    <div className="MainLayout__body">
      <MainHeader />
      <div className="MainLayout__content">{children}</div>
      <MobileFooter />
    </div>
  </div>
)

export default MainLayout
