import React from 'react'
import { FormattedNumber } from 'react-intl'
import cn from 'classnames'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import Typography from 'components/Typography'

import IconFaceSad from 'icons/IconFaceSad'
import IconFaceDown from 'icons/IconFaceDown'
import IconFaceNeutral from 'icons/IconFaceNeutral'
import IconFaceOk from 'icons/IconFaceOk'
import IconFaceHappy from 'icons/IconFaceHappy'

import './Summary.scss'

const faces = [
  ['sad', IconFaceSad],
  ['down', IconFaceDown],
  ['neutral', IconFaceNeutral],
  ['ok', IconFaceOk],
  ['happy', IconFaceHappy]
]

function Summary(props) {
  const { time, cost, satisfaction } = props

  return (
    <Card className="Summary">
      <Card.Body>
        <Row className="Summary__row-spacer">
          <Col className="Summary__col-spacer">
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <Typography>Projected Time</Typography>
              <Typography className="Summary__value" variant="body-xlarge">
                {time} days
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <Typography>Projected Cost</Typography>
              <Typography className="Summary__value" variant="body-xlarge">
                <FormattedNumber value={cost} format="currencyWithoutCents" />
              </Typography>
            </div>
            <hr />
          </Col>
          <Col className="Summary__col-spacer">
            <div className="border p-3">
              <div className="d-flex justify-content-between">
                {faces.map(([name, IconFace], key) => (
                  <IconFace key={key} className={cn('Summary__satisfaction', { active: name === satisfaction })} />
                ))}
              </div>
              <Typography className="mt-3 text-center">Customer Satisfaction</Typography>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Summary
