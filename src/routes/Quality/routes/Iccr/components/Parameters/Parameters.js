import React, { useState } from 'react'

import find from 'lodash/find'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

import DropdownButton, { DropdownItem } from 'components/Dropdown'
import Typography from 'components/Typography'
import { langs } from 'config/constants'

import './Parameters.scss'

const Parameters = () => {
  const [lang, setLang] = useState('en')

  return (
    <div className="Parameters">
      <div className="Parameters__title">
        <Typography variant="subtitle" uppercase>
          parameters
        </Typography>
      </div>
      <div className="Parameters__form mt-2">
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Group controlId="areaCode">
                <Form.Control type="text" placeholder="Area Code..." />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <DropdownButton title={find(langs, { value: lang }).caption}>
                {langs.map(({ value, caption }) => (
                  <DropdownItem onClick={() => setLang(value)} key={value}>
                    {caption}
                  </DropdownItem>
                ))}
              </DropdownButton>
            </Col>
          </Row>
        </Form>
      </div>

      <Button className="float-right">Run Report</Button>
    </div>
  )
}

export default Parameters
