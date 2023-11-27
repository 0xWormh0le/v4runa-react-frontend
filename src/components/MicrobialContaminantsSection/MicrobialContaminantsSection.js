import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'
import microbialIcon from 'icons/legacy/ScienceIcons_microbial.png'

const MicrobialContaminantsSection = ({ microbialContaminants }) => {
  return (
    <Row className='MicrobialContaminantsSection'>
      <Col lg={7}>
        <div className='d-flex'>
          <div className="icon-box darkbluebackground d-flex">
            <img alt="inorganicIcon" className='m-auto w-100' src={microbialIcon} />
          </div>
          <h5 className="darkblue w-50">
            <b>MICROBIAL CONTAMINANTS</b>
          </h5>
        </div>
        {microbialContaminants === '' ? (
          <div className="small-text mt-3">
            Viruses and bacteria, which may come from sewage treatment plant septic systems, agricultural livestock
            operations, and wildlife.
          </div>
        ) : (
          <div className="small-text mt-3">
            {microbialContaminants}
          </div>
        )}
      </Col>
      <Col lg={5}>
        <ContaminantsDoughnut value={0} backColor="#23406d" foreColor="#23406d" />
      </Col>
    </Row>
  )
}

export default MicrobialContaminantsSection
