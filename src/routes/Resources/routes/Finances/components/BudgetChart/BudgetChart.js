import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Chart, Doughnut } from 'react-chartjs-2'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import sum from 'lodash/sum'
import DatePicker from 'components/DatePicker'
import Typography from 'components/Typography'
import { formatCurrencyShorthand } from 'utils/formatters'

import { CHART_LEGEND_COLORS } from 'config/constants'

import 'react-datepicker/dist/react-datepicker.css'
import './BudgetChart.scss'

const getChartData = data => {
  return {
    labels: data.map(item => item[0]),
    datasets: [
      {
        borderColor: CHART_LEGEND_COLORS,
        backgroundColor: CHART_LEGEND_COLORS,
        data: data.map(item => item[1])
      }
    ]
  }
}

const options = {
  legend: {
    display: false
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, myData) => {
        const dataSet = myData.datasets[tooltipItem.datasetIndex]
        const data = dataSet.data
        const total = sum(data) || 1
        const price = data[tooltipItem.index]
        const percentage = Math.round((price / total) * 100)
        return `${myData.labels[tooltipItem.index]}, $${price}, ${percentage}%`
      }
    }
  },
  cutoutPercentage: 55,
  maintainAspectRatio: false
}

const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw

Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    const chart = this.chart.chart
    const totalAmount = chart.config.options.totalAmount

    originalDoughnutDraw.apply(this, arguments)

    if (!!totalAmount) {
      const ctx = chart.ctx
      const width = chart.width
      const height = chart.height
      const approx = formatCurrencyShorthand(totalAmount, { showLevel: false })

      ctx.font = 'bold 2.5em Roboto'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = '#58585A'

      const amount = `$${approx}`
      const amountX = Math.round((width - ctx.measureText(amount).width) / 2)
      const amountY = height / 2 - 5

      ctx.fillText(amount, amountX, amountY)

      ctx.font = '1em Roboto'
      const unit =
        totalAmount > 1000 * 1000 * 1000
          ? 'BILLIONS'
          : totalAmount > 1000 * 1000
          ? 'MILLIONS'
          : totalAmount > 1000
          ? 'THOUSANDS'
          : ''
      const unitX = Math.round((width - ctx.measureText(unit).width) / 2)
      const unitY = height / 2 + 20

      ctx.fillText(unit, unitX, unitY)
    }
  }
})

function BudgetChart(props) {
  const { data: chartData, onFinanceClick, financeLink, caption } = props
  const size = props.size || 250
  const data = getChartData(chartData)
  const total = sum(data.datasets[0].data)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleFinanceClick = () => {
    const start = startDate ? new Date(startDate).toISOString().slice(0, 10) : ''
    const end = endDate ? new Date(endDate).toISOString().slice(0, 10) : ''
    onFinanceClick(start, end)
  }

  const financeProp =
    (onFinanceClick && { onClick: handleFinanceClick }) || (financeLink && { as: Link, to: financeLink })

  return (
    <Card className="BudgetChart">
      <Card.Body>
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
          <Typography variant="subtitle" gutterBottom uppercase>
            {caption}
          </Typography>
          <div className="d-flex flex-wrap">
            <DatePicker
              className="mr-2 mb-2 BudgetChart__date-picker"
              selected={startDate}
              onChange={value => setStartDate(value)}
              emptyText="Start Date"
            />
            <DatePicker
              className="mb-2 BudgetChart__date-picker"
              selected={endDate}
              onChange={value => setEndDate(value)}
              emptyText="End Date"
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="BudgetChart__legend">
            <div>
              {data.labels.map((label, key) => (
                <div key={key} className="d-flex align-items-center">
                  <div className="BudgetChart__legend-color" style={{ backgroundColor: CHART_LEGEND_COLORS[key] }} />
                  <Typography>{label}</Typography>
                </div>
              ))}
            </div>

            {(onFinanceClick || financeLink) && (
              <div className="mt-3">
                <Button {...financeProp}>FINANCES</Button>
              </div>
            )}
          </div>
          <div className="BudgetChart__chart" style={{ width: `${size}px`, height: `${size}px` }}>
            <Doughnut data={data} options={{ ...options, totalAmount: total }} />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BudgetChart
