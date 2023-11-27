import React from 'react'
import cn from 'classnames'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Dropdown.scss'

function DropdownComponent({ children, className, block, ...props }) {
  return (
    <DropdownButton className={cn(className, 'DropdownButton', 'DropdownButton--block')} {...props}>
      {children}
    </DropdownButton>
  )
}

const DropdownItem = Dropdown.Item

export { DropdownItem }
export default DropdownComponent
