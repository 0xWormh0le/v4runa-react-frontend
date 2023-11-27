import React from 'react'

import IconHouse from 'icons/IconHouse'
import IconAlert from 'icons/IconErrorTriangle'
import IconDesktop from 'icons/IconDesktop'
import IconData from 'icons/IconData'
import IconQuestion from 'icons/IconQuestionAlt'
import SideNavItem from '../SideNavItem'
import { withUserRole } from 'hocs/withAuth'
import { USER_ROLE } from 'config/constants'
import './SideNavMenu.scss'

const overview = [
  {
    text: 'Reports',
    path: '/monthly-reports'
  }
]

const resources = [
  {
    text: 'Assets',
    path: '/assets'
  },
  {
    text: 'Personnel',
    path: '/personnel'
  },
  {
    text: 'Finances',
    path: '/finances'
  }
]

const insights = [
  {
    text: 'Prognosis',
    path: '/prognosis'
  },
  {
    text: 'Recommendations',
    path: '/recommendations'
  }
]

const quality = [
  {
    text: 'iCCR',
    path: '/iccr'
  }
]

function SideNavMenu({ userRole }) {
  return (
    <div className="SideNavMenu">
      <SideNavItem
        text="OVERVIEW"
        path="/overview"
        icon={IconHouse}
        subMenuItems={userRole !== USER_ROLE.Admin && overview}
        selfNav
      />

      <SideNavItem text="ALERTS" path="/alerts" icon={IconAlert} />

      {userRole === USER_ROLE.Admin && (
        <SideNavItem text="QUALITY" path="/quality" icon={IconData} subMenuItems={quality} selfNav />
      )}

      {userRole === USER_ROLE.Admin && (
        <>
          <SideNavItem text="RESOURCES" path="/resources" icon={IconDesktop} subMenuItems={resources} />

          <SideNavItem text="INSIGHTS" path="/insights" icon={IconQuestion} subMenuItems={insights} />
        </>
      )}
    </div>
  )
}

export default withUserRole(SideNavMenu)
