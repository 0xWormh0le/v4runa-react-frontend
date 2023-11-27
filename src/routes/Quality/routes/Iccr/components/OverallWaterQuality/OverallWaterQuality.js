import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import Card from 'react-bootstrap/Card'
import { Doughnut } from 'react-chartjs-2'
import Typography from 'components/Typography'

import './OverallWaterQuality.scss'

const dataInorganic = {
  datasets: [
    {
      weight: 3,
      data: Array(6).fill(100 / 6),
      backgroundColor: ['#fff', '#65B1D2', '#3D99C1', '#1D87B5', '#066E9B', '#045477']
    }
  ]
}

const options = {
  tooltips: { enabled: false },
  hover: { mode: null },
  cutoutPercentage: 35,
  elements: {
    arc: {
      borderWidth: 0
    }
  },
  legend: {
    display: false
  },
  maintainAspectRatio: false
}

const qualityText = ['Atrocious', 'Bad', 'Okay', 'Good', 'Excellent']

function OverallWaterQuality(props) {
  const { quality, className } = props
  const [indicatorRotate, setIndicatorRotate] = useState(0)

  useEffect(() => {
    setIndicatorRotate(300 * quality)
  }, [quality])

  return (
    <Card className={cn('OverallWaterQuality', className)}>
      <Card.Body>
        <Typography variant="subtitle" className="mb-2" uppercase>
          overall water quality
        </Typography>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="OverallWaterQuality__description">
            <Typography as="h1" className="OverallWaterQuality__quality mb-2">
              {qualityText[Math.min(Math.floor(quality * 5), 4)]}
            </Typography>
            <Typography>
              A total of 6.4% of the maximum allowable contaminants were found in the water during the last testing
              cycle.
            </Typography>
          </div>
          <div className="OverallWaterQuality__chart">
            <div className="OverallWaterQuality__chart-rotate">
              <Doughnut data={dataInorganic} options={options} />
            </div>
            <div className="OverallWaterQuality__indicator-wrap">
              <div className="OverallWaterQuality__indicator" style={{ transform: `rotate(${indicatorRotate}deg` }} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default OverallWaterQuality
