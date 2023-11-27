import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import Typography from 'components/Typography'
import './TechnicianItem.scss'

class TechnicianItem extends Component {
  render() {
    return (
      <div className="TechnicianItem">
        <Row>
          <Col xs={'auto'}>
            <Image className="TechnicianItem__image" src="https://via.placeholder.com/55" roundedCircle />
          </Col>
          <Col xs={'auto'}>
            <Link to="/operations/resource-operations" className="TechnicianItem__name">
              <Typography variant="subtitle">{this.props.name}</Typography>
            </Link>
            <div className="TechnicianItem__type">
              <Typography variant="body">{this.props.type}</Typography>
            </div>
            <div className="TechnicianItem__status">
              <Typography variant="caption" uppercase>
                {this.props.status}
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TechnicianItem
