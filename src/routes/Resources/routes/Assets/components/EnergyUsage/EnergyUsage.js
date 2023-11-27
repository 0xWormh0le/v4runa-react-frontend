import React from 'react'
import cn from 'classnames'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Chart, Scatter } from 'react-chartjs-2'
import Typography from 'components/Typography'
import { CHART_LEGEND_COLORS } from 'config/constants'

import './EnergyUsage.scss'

const Y_LIMIT = 130

const colors = [1, 1, 1, 7, 5, 3, 6]

const options = {
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.33
    }
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
          suggestedMin: 0,
          suggestedMax: Y_LIMIT
        }
      }
    ]
  }
}

const getChartData = data => ({
  labels: data.map(item => item[0]),
  datasets: data.map((item, key) => ({
    type: key < 5 ? 'scatter' : 'bubble',
    data: item[1],
    label: item[0],
    fill: false,
    showLine: true,
    borderWidth: 2,
    borderColor: CHART_LEGEND_COLORS[colors[key]],
    backgroundColor: CHART_LEGEND_COLORS[colors[key]],
    pointBorderColor: CHART_LEGEND_COLORS[colors[key]],
    pointBackgroundColor: CHART_LEGEND_COLORS[colors[key]],
    pointBorderWidth: 1,
    pointHoverRadius: 2,
    pointHoverBackgroundColor: CHART_LEGEND_COLORS[colors[key]],
    pointHoverBorderColor: CHART_LEGEND_COLORS[colors[key]],
    pointHoverBorderWidth: 1,
    pointRadius: 0.5,
    pointHitRadius: 10
  }))
})

const originalScatterDraw = Chart.controllers.scatter.prototype.draw

Chart.helpers.extend(Chart.controllers.scatter.prototype, {
  draw: function() {
    const chart = this.chart.chart
    const minFlow = chart.config.options.minFlow
    const maxFlow = chart.config.options.maxFlow

    originalScatterDraw.apply(this, arguments)

    if (!!minFlow && !!maxFlow) {
      const margin = this.chart.chartArea.left
      const ctx = chart.ctx
      const width = chart.width - margin
      const height = chart.height
      const minX = width * minFlow + margin
      const maxX = width * maxFlow + margin

      ctx.font = 'lighter 0.8rem Roboto, sans-serif'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#888'

      const minimum = 'Minimum'
      const minLabelX = Math.round(minX - ctx.measureText(minimum).width / 2)

      const maximum = 'Maximum'
      const maxLabelX = Math.round(maxX - ctx.measureText(maximum).width / 2)

      const flow = 'Allowable Flow'
      const flowW = ctx.measureText(flow).width

      ctx.lineWidth = 0.3
      ctx.strokeStyle = '#aaa'

      ctx.fillText(minimum, minLabelX, 10)
      ctx.fillText(maximum, maxLabelX, 10)
      ctx.fillText(flow, Math.round(minX - flowW / 2), 25)
      ctx.fillText(flow, Math.round(maxX - flowW / 2), 25)

      ctx.beginPath()
      ctx.moveTo(minX, 35)
      ctx.lineTo(minX, height - 5)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(maxX, 35)
      ctx.lineTo(maxX, height - 5)
      ctx.stroke()
    }
  }
})

function EnergyUsage(props) {
  const { className, data: chartData, minFlow, maxFlow } = props

  const data = getChartData(chartData)

  return (
    <Card className={cn('EnergyUsage', className)}>
      <Card.Body className="d-flex flex-column">
        <Typography uppercase variant="subtitle" gutterBottom>
          Energy Usage
        </Typography>
        <Row className="flex-grow-1">
          <Col className="EnergyUsage__legend">
            {data.datasets.map(
              ({ label }, key) =>
                (key === 0 || key > 2) && (
                  <div className="d-flex align-items-center mb-1" key={key}>
                    <span
                      className="EnergyUsage__legend-item"
                      style={{ backgroundColor: CHART_LEGEND_COLORS[colors[key]] }}
                    />
                    <Typography>{label}</Typography>
                  </div>
                )
            )}
          </Col>

          <Col className="EnergyUsage__chart-area">
            <div className="position-relative flex-grow-1 ml-4">
              <div className="EnergyUsage__chart">
                <Scatter data={data} options={{ minFlow: minFlow / 100, maxFlow: maxFlow / 100, ...options }} />
              </div>
              <Typography className="text-center EnergyUsage__graph-vertical-label">
                <small>Differential Head in m</small>
              </Typography>
            </div>
            <Typography className="text-center">
              <small>Volume FLow in cu.m/hr</small>
            </Typography>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

EnergyUsage.propTypes = {}

export default EnergyUsage
