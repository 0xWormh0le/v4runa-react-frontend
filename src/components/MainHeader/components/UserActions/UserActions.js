import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { withUserProfile } from 'hocs/withAuth'
import { USER_ROLE } from 'config/constants'
import './UserActions.scss'

const UserActions = ({ profile, logout }) => (
  <Dropdown className="UserActions">
    <Dropdown.Toggle as="div" className="text-capitalize">
      {profile.first_name} {profile.last_name}
    </Dropdown.Toggle>

    <Dropdown.Menu alignRight={true}>
      {profile.role === USER_ROLE.Admin && (
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
)

export default withUserProfile(UserActions)
