import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { FormattedNumber } from 'react-intl'
import Slider from 'react-slick'

import CheckAltIcon from 'icons/IconCheckAlt'
import CheckAltGrayIcon from 'icons/IconCheckAltGray'
import Typography from 'components/Typography'
import SliderArrow from 'components/SliderArrow'

import './TechnicianSlider.scss'

const responsive = [
  { breakpoint: 9999, settings: { slidesToShow: 4 } },
  { breakpoint: 1300, settings: { slidesToShow: 3 } },
  { breakpoint: 1100, settings: { slidesToShow: 2 } },
  { breakpoint: 850, settings: { slidesToShow: 1 } },
  { breakpoint: 768, settings: { slidesToShow: 2 } },
  { breakpoint: 576, settings: { slidesToShow: 1 } }
]

function TechnicianSlider({ data, onCardClick }) {
  return (
    <div className="TechnicianSlider">
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        responsive={responsive}
        nextArrow={<SliderArrow direction={false} size="lg" />}
        prevArrow={<SliderArrow direction={true} size="lg" />}>
        {data.map((v, key) => (
          <div key={key} className="TechnicianSlider__card">
            <Card onClick={() => onCardClick(v.id)} className={cn({ 'TechnicianSlider__card--disabled': !v.checked })}>
              <Card.Body>
                <div className="TechnicianSlider__card-header">
                  <Typography variant="subtitle" uppercase>
                    {v.title}
                  </Typography>

                  {v.checked ? (
                    <CheckAltIcon className="TechnicianSlider__card-header-check-icon" />
                  ) : (
                    <CheckAltGrayIcon className="TechnicianSlider__card-header-check-icon" />
                  )}
                </div>

                <div className="TechnicianSlider__card-avatar">
                  <div className="TechnicianSlider__card-avatar-image"></div>
                  <div>
                    <Typography variant="body" className="TechnicianSlider__card-avatar-name">
                      <strong>{v.name}</strong>
                    </Typography>
                    <Typography className="TechnicianSlider__card-avatar-role">{v.role}</Typography>
                    <Typography uppercase variant="caption" className="TechnicianSlider__card-avatar-availability">
                      {v.availability && 'AVAILABLE NOW'}
                    </Typography>
                  </div>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Salary (hourly)</Typography>
                  <Typography className="TechnicianSlider__card-field--value">
                    <FormattedNumber value={v.salary} format="currency" />
                  </Typography>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Location</Typography>
                  <Typography className="TechnicianSlider__card-field--value">{v.location}</Typography>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Job Type</Typography>
                  <Typography className="TechnicianSlider__card-field--value">{v.jobType}</Typography>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Department</Typography>
                  <Typography className="TechnicianSlider__card-field--value">{v.department}</Typography>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Job Number</Typography>
                  <Typography className="TechnicianSlider__card-field--value">{v.jobNumber}</Typography>
                </div>

                <div className="TechnicianSlider__card-field">
                  <Typography>Closing Date</Typography>
                  <Typography className="TechnicianSlider__card-field--value">
                    {v.closingDate ? v.closingDate : 'Continuous'}
                  </Typography>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}

TechnicianSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      checked: PropTypes.bool,
      name: PropTypes.string,
      role: PropTypes.string,
      salary: PropTypes.number,
      availability: PropTypes.bool,
      location: PropTypes.string,
      jobType: PropTypes.string,
      department: PropTypes.string,
      jobNumber: PropTypes.string,
      closingDate: PropTypes.string,
      disabled: PropTypes.bool
    })
  )
}

export default TechnicianSlider
