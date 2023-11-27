import React from 'react'
import './Media.scss'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Typography from 'components/Typography'

import IconArrowCarrotRight from 'icons/IconArrowCarrotRight'

const Media = () => (
  <Card className="Media">
    <Card.Body>
      <div className="Media__title">
        <Typography variant="subtitle">MEDIA</Typography>
      </div>
      <IconArrowCarrotRight className="Media__arrow-carrot-right" />

      <div className="Media__content">
        <div className="Media__news-title">
          <Typography variant="subtitle" uppercase>
            AUSTIN WATER CRISIS REVEALS DEEPER PROBLEMS
          </Typography>
        </div>
        <div className="Media__news-date">
          <Typography variant="body">November 16, 2019</Typography>
        </div>
        <div className="Media__news-text">
          <Typography variant="body">
            After a period of unprecedented rain that raised area lakes up to record highs, residents of Austin, Texas
            and surrounds woke up on Monday, October 22 to news...
          </Typography>
        </div>
        <Link to="/overview" className="Media__news-read-more">
          <Typography variant="caption">Read More</Typography>
        </Link>
      </div>
    </Card.Body>
  </Card>
)

export default Media
