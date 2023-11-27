import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ChlorineResidualReport from 'components/ChlorineResidualReport'
import DisinfectantsAndByProducts from '../DisinfectantsAndByProducts'

const DisinfectantResidualReport = ({ disinfectantResidualReport, disinfectantsAndDisinfectionByProducts }) => (
  <div className="DisinfectantResidualReport">
    <Row>
      <Col lg={4}>
        <ChlorineResidualReport disinfectantResidualReport={disinfectantResidualReport} />
      </Col>
      <Col lg={8}>
        <DisinfectantsAndByProducts disinfectantsAndDisinfectionByProducts={disinfectantsAndDisinfectionByProducts} />
      </Col>
    </Row>
  </div>
)

DisinfectantResidualReport.propTypes = {
  disinfectantResidualReport: PropTypes.object,
  disinfectantsAndDisinfectionByProducts: PropTypes.object
}

export default DisinfectantResidualReport
