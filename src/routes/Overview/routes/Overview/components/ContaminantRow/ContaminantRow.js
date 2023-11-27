import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import IconDownArrow from 'icons/IconDownArrow'
import IconUpArrow from 'icons/IconUpArrow'

import Typography from 'components/Typography'

import './ContaminantRow.scss'

class ContaminantRow extends Component {
  render() {
    return (
      <Row className="ContaminantRow">
        <Col xs={5} className="ContaminantRow__contaminant">
          <Typography variant="body-large">{this.props.contaminant}</Typography>
        </Col>
        <Col xs={7}>
          <Row>
            <Col xs={6} className="ContaminantRow__epa">
              <Typography variant="figure-large">{this.props.epa}</Typography>
            </Col>
            <Col xs={6} className="ContaminantRow__trend">
              {this.props.direction === 'down' ? (
                <IconDownArrow className="ContaminantRow__down-arrow" />
              ) : (
                <IconUpArrow className="ContaminantRow__up-arrow" />
              )}

              <Typography variant="figure-small">{this.props.trend}</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ContaminantRow
