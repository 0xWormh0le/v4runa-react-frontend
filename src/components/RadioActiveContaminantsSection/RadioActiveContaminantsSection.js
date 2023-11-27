import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'
import radioactiveIcon from 'icons/legacy/ScienceIcons_radioactive.png'

const RadioActiveContaminantsSection = ({ radioactiveContaminants }) => {
  return (
    <Row className='RadioActiveContaminantsSection'>
      <Col lg={7}>
        <div className='d-flex'>
          <div className="icon-box darkredbackground d-flex">
            <img alt="organicIcon" src={radioactiveIcon} className="m-auto" />
          </div>
          <h5 className="darkred w-50">
            <b>RADIOACTIVE CONTAMINANTS</b>
          </h5>
        </div>
        {radioactiveContaminants === '' ? (
          <div className="small-text mt-3">
            Can be naturally-occurring or be the result of oil and gas production and mining activities.
          </div>
        ) : (
          <div className="small-text mt-3">
            {radioactiveContaminants}
          </div>
        )}
      </Col>
      <Col lg={5}>
        <ContaminantsDoughnut value={0} backColor="#af084b" foreColor="#579107" />
      </Col>
    </Row>
  )
}

export default RadioActiveContaminantsSection
