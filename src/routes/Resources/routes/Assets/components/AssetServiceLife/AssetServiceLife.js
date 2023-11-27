import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Line as LineChart } from 'react-chartjs-2'
import Typography from 'components/Typography'
import { CHART_LEGEND_COLORS } from 'config/constants'

import './AssetServiceLife.scss'

const Y_LIMIT = 600 * 1000

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: Y_LIMIT,
          callback: value => Math.round(value / 1000) + 'K'
        }
      }
    ]
  },
  tooltips: {
    backgroundColor: 'white',
    bodyFontColor: '#6E6F71',
    bodyFontSize: 14,
    borderColor: '#6E6F71',
    borderWidth: 1,
    caretSize: 0,
    caretPadding: 15,
    cornerRadius: 10,
    displayColors: false,
    xAlign: 'center',
    yAlign: 'bottom',
    xPadding: 10,
    yPadding: 10,
    callbacks: {
      title: () => null,
      label: (tooltipItem, myData) => {
        const label = myData.datasets[tooltipItem.datasetIndex].label
        const value = Math.round(tooltipItem.value / 1000)
        return `${label}: ${value}K`
      }
    }
  },
  maintainAspectRatio: false
}

const getChartData = data => ({
  labels: Array(9)
    .fill(0)
    .map((i, k) => k * 5),
  datasets: data.map((data, key) => ({
    label: data[0],
    borderColor: CHART_LEGEND_COLORS[key],
    data: data[1],
    pointHoverBackgroundColor: CHART_LEGEND_COLORS[key],
    pointBackgroundColor: CHART_LEGEND_COLORS[key],
    pointRadius: 2,
    fill: false,
    lineTension: 0,
    borderWidth: 2
  }))
})

function AssetServiceLife(props) {
  const { assetsLink, data: chartData } = props

  const data = getChartData(chartData)

  return (
    <Card className="AssetServiceLife">
      <Card.Body>
        <Typography uppercase variant="subtitle" className="mb-4">
          Asset Service Life
        </Typography>
        <Row>
          <Col className="mb-4">
            {data.datasets.map(({ label }, key) => (
              <div className="d-flex align-items-center mb-1" key={key}>
                <span className="AssetServiceLife__legend-item" style={{ backgroundColor: CHART_LEGEND_COLORS[key] }} />
                <Typography>{label}</Typography>
              </div>
            ))}

            {assetsLink && (
              <Button as={Link} to={assetsLink} className="mt-3">
                ASSETS
              </Button>
            )}
          </Col>
          <Col className="AssetServiceLife__chart">
            <div className="AssetServiceLife__chart-area">
              <LineChart data={data} options={options} />
            </div>
            <Typography className="text-center">
              <small>Average Service Life in Years</small>
            </Typography>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

AssetServiceLife.propTypes = {}

export default AssetServiceLife
