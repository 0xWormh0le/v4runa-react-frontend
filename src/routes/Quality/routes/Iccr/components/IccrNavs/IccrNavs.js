import React from 'react'
import cn from 'classnames'
import { HashLink as Link } from 'react-router-hash-link'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import IconCopper from 'icons/IconCopper'
import IconDisinfectant from 'icons/IconDisinfectant'
import IconInorganic from 'icons/IconInorganic'
import IconMicrobial from 'icons/IconMicrobial'
import IconOrganic from 'icons/IconOrganic'
import IconPesticide from 'icons/IconPesticide'
import IconRadioActive from 'icons/IconRadioActive'

import './IccrNavs.scss'

const icons = [
  [IconInorganic, 'inorganic-contaminants'],
  [IconDisinfectant, 'disinfectants'],
  [IconCopper, 'lead-copper'],
  [IconOrganic, 'organic-chemical-contaminants'],
  [IconPesticide, 'pesticides-herbicides'],
  [IconRadioActive, 'radioactive-contaminants'],
  [IconMicrobial, 'microbial-contaminants']
]

const chemicalNames = [
  'Inorganic',
  'Disinfectants & Disinfection by-products',
  'Organic Chemical',
  'Pesticides & Herbicides',
  'Lead & Copper',
  'Radioactive',
  'Microbial'
]

const IccrNavs = () => {
  return (
    <Row className="IccrNavs">
      {icons.map(([Icon, name], key) => (
        <Col className="IccrNavs__item" key={key}>
          <Link to={`#${name}`} title={chemicalNames[key]} smooth>
            <Icon className={cn('IccrNavs__icon', `IccrNavs__${name}`)} />
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default IccrNavs
