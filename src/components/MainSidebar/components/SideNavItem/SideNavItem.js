import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import './SideNavItem.scss'

const SideNavItem = ({ icon, text, path, selfNav, subMenuItems }) => {
  const Icon = icon
  const [open, setOpen] = useState(false)
  const handleClick = event => {
    if (!selfNav && subMenuItems) {
      event.preventDefault()
      event.stopPropagation()
    }
    setOpen(!open)
  }

  return (
    <div className="SideNavItem">
      <NavLink to={path} className="SideNavItem__link" activeClassName="selected" onClick={handleClick}>
        <Icon className="SideNavItem__icon" />
        <div className="SideNavItem__text">{text}</div>
      </NavLink>
      {subMenuItems && subMenuItems.length > 0 && (
        <div className={cn('SideNavItem__sub-menu', { open })}>
          {subMenuItems.map((item, index) => (
            <NavLink key={index} to={`${path}${item.path}`} activeClassName="SideNavMenu__active">
              <div className="SideNavItem__sub-menu-item">{item.text}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default SideNavItem
