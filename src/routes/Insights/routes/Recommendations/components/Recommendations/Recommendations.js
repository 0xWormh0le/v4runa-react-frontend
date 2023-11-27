import React, { useState } from 'react'
import cn from 'classnames'
import findIndex from 'lodash/findIndex'
import flatten from 'lodash/flatten'
import { FormattedNumber } from 'react-intl'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import IconArrowRight from 'icons/IconArrowRight'
import IconFaceDown from 'icons/IconFaceDown'
import IconFaceNeutral from 'icons/IconFaceNeutral'
import IconFaceOk from 'icons/IconFaceOk'

import Typography from 'components/Typography'
import AlertLog from 'routes/Alerts/components/AlertLog'
import AlertInfo from 'routes/Alerts/components/AlertInfo'
import SubRecommendationFirst from '../SubRecommendationFirst'
import SubRecommendationSecond from '../SubRecommendationSecond'
import SubRecommendationThird from '../SubRecommendationThird'

import './Recommendations.scss'

const faces = {
  down: IconFaceDown,
  neutral: IconFaceNeutral,
  ok: IconFaceOk
}

const options = [
  {
    caption: 'Option1',
    to: '#option1',
    component: SubRecommendationFirst,
    days: 54,
    cost: 114130,
    satisfaction: 'down'
  },
  {
    caption: 'Option2',
    to: '#option2',
    component: SubRecommendationSecond,
    days: 32,
    cost: 135290,
    satisfaction: 'neutral'
  },
  {
    caption: 'Option3',
    to: '#option3',
    component: SubRecommendationThird,
    days: 23,
    cost: 154320,
    satisfaction: 'ok'
  }
]

const alertLogData = flatten(
  Array(10)
    .fill(0)
    .map(() => [
      {
        type: 'warning',
        city: 'San Marcos',
        date: '2019-12-08 09:03',
        content: 'Pump 39910-3 has shut down due to a storm-related outgage.'
      },
      {
        type: 'maintenance',
        city: 'Georgetown',
        date: '2019-12-08 09:03',
        content: 'Schduled maintenance carried out by Mark Twain'
      },
      {
        type: 'warning',
        city: 'San Marcos',
        date: '2019-12-08 09:03',
        content: 'Pump 39910-3 has shut down due to a storm-related outgage.'
      }
    ])
)

function Recommendations(props) {
  const { location } = props
  const [activeIndex, setActiveIndex] = useState(Math.max(findIndex(options, { to: location.hash }), 1))
  const { days, cost, satisfaction, component: Subpage } = options[activeIndex]

  return (
    <Row className="Recommendations Recommendations__row-spacer">
      <Col lg={5} xl={6} className="Recommendations__col-spacer">
        <Card>
          <Card.Body>
            <div className="Recommendations__log border overflow-auto">
              <AlertLog data={alertLogData} />
            </div>
          </Card.Body>
        </Card>

        <Card className="my-3">
          <Card.Body>
            <AlertInfo
              title="San Marcos, TX"
              dataScore={4.27}
              measurements={40}
              startDate="2010-04-28T00:00:00"
              endDate="2019-03-19T00:00:00"
            />
          </Card.Body>
        </Card>

        {options.map(({ caption, to, days, cost, satisfaction }, key) => {
          const FaceIcon = faces[satisfaction]
          return (
            <NavLink
              to={to}
              onClick={() => setActiveIndex(key)}
              key={key}
              className={cn('Recommendations__item', { active: activeIndex === key })}>
              <Card>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between flex-grow-1 flex-wrap align-items-center">
                    <Typography uppercase variant="body-large">
                      <strong>{caption}</strong>
                    </Typography>
                    <Typography variant="body-xlarge">{days} days</Typography>
                    <Typography variant="body-xlarge">
                      <FormattedNumber format="currencyWithoutCents" value={cost} />
                    </Typography>
                    <FaceIcon className={cn('Recommendations__satisfaction', { active: activeIndex === key })} />
                  </div>
                  {activeIndex === key && <IconArrowRight className="Recommendations__item-arrow" />}
                </Card.Body>
              </Card>
            </NavLink>
          )
        })}
        <Button>RECALCULATE</Button>
      </Col>

      <Col lg={7} xl={6} className="Recommendations__col-spacer mt-3 mt-lg-0">
        <div className="Recommendations__right-pane">
          <Subpage time={days} cost={cost} satisfaction={satisfaction} />
        </div>
      </Col>
    </Row>
  )
}

export default Recommendations
