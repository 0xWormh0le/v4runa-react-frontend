import React from 'react'
import Card from 'react-bootstrap/Card'
import { Line as LineChart } from 'react-chartjs-2'
import Typography from 'components/Typography'
import { MONTHS } from 'config/constants'

import './BudgetLineChart.scss'

const Y_LIMIT = 1800

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: Y_LIMIT
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
        const value = tooltipItem.value
        return `${label}: ${value}gpm`
      }
    }
  },
  maintainAspectRatio: false
}

const colors = ['#F3A438', '#77A443', '#00A6D4']

const labels = ['Expenses', 'Total Revenue', 'EBITDA']

const months = MONTHS.filter((_, key) => key % 2 === 0)

const chartData = {
  labels: months.map(month => month.slice(0, 3).toUpperCase()),
  datasets: labels.map((label, key) => ({
    label,
    borderColor: colors[key],
    data: months.map(() => Math.round(Math.random() * 700 + 100)),
    pointHoverBackgroundColor: colors[key],
    pointBackgroundColor: 'white',
    pointRadius: 4,
    fill: false,
    lineTension: 0,
    borderWidth: 2
  }))
}

const getChartData = () => chartData

function BudgetLineChart(props) {
  const data = getChartData()

  return (
    <Card className="BudgetLineChart">
      <Card.Body>
        <div className="d-flex flex-column h-100">
          <Typography variant="subtitle" gutterBottom>
            Budget
          </Typography>
          <div className="BudgetLineChart__chart">
            <div className="BudgetLineChart__legend">
              {labels.map((label, key) => (
                <div key={key} className="d-flex align-items-center">
                  <div className="BudgetLineChart__legend-color" style={{ borderColor: colors[key] }} />
                  <Typography variant="body-small">{label}</Typography>
                </div>
              ))}
            </div>
            <LineChart data={data} options={options} />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BudgetLineChart
