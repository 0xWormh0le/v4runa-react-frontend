import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContaminantsDoughnut from 'components/ContaminantsDoughnut'
import pesticidesIcon from 'icons/legacy/ScienceIcons_Pesticides.png'
import './PesticidesHerbicidesSection.scss'

const PesticidesHerbicidesSection = ({ pesticidesContaminants }) => {
  return (
    <Row className='PesticidesHerbicidesSection'>
      <Col lg={7}>
        <div className='d-flex'>
          <div className="icon-box bluegreenbackground">
            <img alt="organicIcon" src={pesticidesIcon} className='PesticidesHerbicidesSection__icon' />
          </div>
          <h5 className="bluegreen w-50">
            <b>PESTICIDES AND HERBICIDES</b>
          </h5>
        </div>

        {pesticidesContaminants ? (
          <div className="small-text mt-3">
            {pesticidesContaminants}
          </div>
        ) : (
          <div className="small-text mt-3">
            These may come from a variety of sources such as agriculture, urban storm water runoff, and residential
            uses.
          </div>
        )}
      </Col>
      <Col lg={5}>
        <ContaminantsDoughnut value={0} backColor="#098e7f" foreColor="#098e7f" />
      </Col>
    </Row>
  )
}

export default PesticidesHerbicidesSection
