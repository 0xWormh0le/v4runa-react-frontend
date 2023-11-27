import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import OrganicContaminantsSection from 'components/OrganicContaminantsSection'
import MicrobialContaminantsSection from 'components/MicrobialContaminantsSection'
import PesticidesHerbicidesSection from 'components/PesticidesHerbicidesSection'
import RadioActiveContaminantsSection from 'components/RadioActiveContaminantsSection'

class AdditionalContaminants extends Component {
  render() {
    const { report } = this.props
    return (
      <div className="additional-contaminants">
        <h5 className="lightblue">
          <b>ADDITIONAL CONTAMINANTS</b>
        </h5>
        <p className="small-text">
          The following contaminants were tested, but do not show significant data to report.
        </p>

        <Row>
          <Col xs={12} md={6} style={{ marginBottom: '20px' }}>
            <MicrobialContaminantsSection microbialContaminants={report.microbialContaminants} />
          </Col>
          <Col xs={12} md={6} style={{ marginBottom: '20px' }}>
            <PesticidesHerbicidesSection pesticidesContaminants={report.pesticidesContaminants} />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6} style={{ marginBottom: '20px' }}>
            <OrganicContaminantsSection organicContaminants={report.organicContaminants} />
          </Col>
          <Col xs={12} md={6} style={{ marginBottom: '20px' }}>
            <RadioActiveContaminantsSection radioactiveContaminants={report.radioactiveContaminants} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default AdditionalContaminants
