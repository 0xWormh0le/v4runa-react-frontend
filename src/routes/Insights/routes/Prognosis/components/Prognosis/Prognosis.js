import React, { useState } from 'react'
import cn from 'classnames'
import findIndex from 'lodash/findIndex'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Typography from 'components/Typography'
import IconArrowRight from 'icons/IconArrowRight'
import SubPrognosisFirst from '../SubPrognosisFirst'
import SubPrognosisSecond from '../SubPrognosisSecond'
import SubPrognosisThird from '../SubPrognosisThird'

import './Prognosis.scss'

const items = [
  { caption: 'PROGNOSIS1', to: '#prognosis1', component: SubPrognosisFirst },
  { caption: 'PROGNOSIS2', to: '#prognosis2', component: SubPrognosisSecond },
  { caption: 'PROGNOSIS3', to: '#prognosis3', component: SubPrognosisThird }
]

function Prognosis(props) {
  const { location } = props
  const itemIndex = findIndex(items, { to: location.hash })
  const [activeItem, setActiveItem] = useState(Math.max(itemIndex, 1))
  const Prognosis = items[activeItem].component

  return (
    <Row className="Prognosis Prognosis__row-spacer">
      <Col lg={4} xl={5} className="Prognosis__col-spacer">
        {items.map(({ caption, to }, key) => (
          <NavLink
            to={to}
            onClick={() => setActiveItem(key)}
            key={key}
            className={cn('Prognosis__item', { active: activeItem === key })}>
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <Typography>
                  <strong>{caption}</strong>
                </Typography>
                {activeItem === key && <IconArrowRight className="mr-2 Prognosis__item-arrow" />}
              </Card.Body>
            </Card>
          </NavLink>
        ))}
      </Col>

      <Col lg={8} xl={7} className="Prognosis__col-spacer">
        <div className="Prognosis__right-pane">
          <Prognosis />
        </div>
      </Col>
    </Row>
  )
}

export default Prognosis
