import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Dropdown from 'react-bootstrap/Dropdown'
import IconProfile from 'icons/IconProfile'
import { withUserRole } from 'hocs/withAuth'
import { USER_ROLE } from 'config/constants'

import './FooterUserActions.scss'

function FooterUserActions(props) {
  const { className, logout, role } = props

  return (
    <div className={cn('FooterUserActions', className)}>
      <Dropdown drop="up">
        <Dropdown.Toggle as="div" className="FooterUserActions__arrow">
          <IconProfile className="FooterUserActions__icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu alignRight={true}>
          {role === USER_ROLE.Admin && (
            <Dropdown.Item as={Link} to="/legacy-iccr/dashboard">
              Legacy Dashboard
            </Dropdown.Item>
          )}
          <Dropdown.Item as={Link} to="/change-password">
            Change Password
          </Dropdown.Item>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default withUserRole(FooterUserActions)
