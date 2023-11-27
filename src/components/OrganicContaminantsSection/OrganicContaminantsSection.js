import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'
import organicIcon from 'icons/legacy/ScienceIcons_OrganicChemical.png'

const OrganicContaminantsSection = ({ organicContaminants }) => {
  return (
    <Row className='OrganicContaminantsSection'>
      <Col lg={7}>
        <div className='d-flex'>
          <div className="icon-box greenbackground d-flex">
            <img alt="organicIcon" className="m-auto" src={organicIcon} />
          </div>
          <h5 className="green w-50">
            <b>ORGANIC CHEMICAL CONTAMINANTS</b>
          </h5>
        </div>
        {organicContaminants === '' ? (
          <div className="small-text mt-3">
            Synthetic and volatile organic chemicals, which are by-products of industrial processes and petroleum
            production, and can also come from gas stations, urban storm water runoff, and septic systems.
          </div>
        ) : (
          <div className="small-text mt-3">
            {organicContaminants}
          </div>
        )}
      </Col>
      <Col lg={5}>
        <ContaminantsDoughnut value={0} backColor="#579107" foreColor="#579107" />
      </Col>
    </Row>
  )
}

export default OrganicContaminantsSection
