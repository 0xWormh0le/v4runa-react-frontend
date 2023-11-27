import React, { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Typography from 'components/Typography'
import IconHouse from 'icons/IconHouse'
import IconAlert from 'icons/IconErrorTriangle'
import IconData from 'icons/IconData'
import IconDesktop from 'icons/IconDesktop'
import IconQuestion from 'icons/IconQuestionAlt'
import { withUserRole } from 'hocs/withAuth'
import { USER_ROLE } from 'config/constants'

import './MobileNavMenu.scss'

const overview = [
  {
    text: 'Reports',
    link: '/monthly-reports'
  }
]

const quality = [
  {
    text: 'iCCR',
    link: '/iccr'
  }
]

const resources = [
  {
    text: 'Assets',
    link: '/assets'
  },
  {
    text: 'Personnel',
    link: '/personnel'
  },
  {
    text: 'Finances',
    link: '/finances'
  }
]

const insights = [
  {
    text: 'Prognosis',
    link: '/prognosis'
  },
  {
    text: 'Recommendations',
    link: '/recommendations'
  }
]

function NavMenuItem({ path, icon: Icon, text, subMenuItems, selfNav }) {
  const [expand, setExpand] = useState(false)

  const handleMenuClick = e => {
    if (!selfNav) {
      e.preventDefault()
    }
    setExpand(expand => !expand)
  }

  return (
    <div className="MobileNavMenu__tab">
      {subMenuItems && <input type="checkbox" id={text} checked={expand} className="d-none" readOnly />}

      <Link to={path} onClick={handleMenuClick}>
        <div className="MobileNavMenu__tab-highlight">
          <Icon className="MobileNavMenu__icon" />
          <div className="MobileNavMenu__text">
            <Typography variant="subtitle">{text}</Typography>
          </div>
        </div>
      </Link>

      {subMenuItems && (
        <div className="submenu">
          {subMenuItems.map(({ text, link }, key) => (
            <Link to={path + link} key={key}>
              <div className="submenu__item">
                <Typography variant="caption">{text}</Typography>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavMenu({ className, userRole }) {
  return (
    <Nav className={cn('MobileNavMenu', className)}>
      <NavMenuItem
        path="/overview"
        text="OVERVIEW"
        icon={IconHouse}
        subMenuItems={userRole !== USER_ROLE.Admin && overview}
        selfNav
      />

      <NavMenuItem path="/alerts" text="ALERTS" icon={IconAlert} />

      <NavMenuItem path="/quality" icon={IconData} subMenuItems={quality} text="QUALITY" selfNav />

      {userRole === USER_ROLE.Admin && (
        <>
          <NavMenuItem path="/resources" icon={IconDesktop} subMenuItems={resources} text="RESOURCES" />

          <NavMenuItem path="/insights" icon={IconQuestion} subMenuItems={insights} text="INSIGHTS" />
        </>
      )}
    </Nav>
  )
}

export default withUserRole(MobileNavMenu)
