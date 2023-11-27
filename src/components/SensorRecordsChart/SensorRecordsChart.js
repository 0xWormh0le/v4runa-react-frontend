import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import cn from 'classnames'
import { Line as LineChart, Chart } from 'react-chartjs-2'
// import fp from 'lodash/fp'
import Typography from 'components/Typography'
import { MONTHS } from 'config/constants'
import { sensorDataRecordsSelector } from 'store/modules/sensor'

import './SensorRecordsChart.scss'

// const getSensorLabel = (id, sensors) =>
//   fp.compose(
//     fp.defaultTo(id),
//     fp.get('device_id'),
//     fp.find(
//       fp.compose(
//         fp.isEqual(Number(id)),
//         fp.get('id')
//       )
//     )
//   )(sensors)
//
// const NUM_CHART_LINES = 3
//
// const getChartData = (sensorDataRecords, sensors) => ({
//   datasets: Object.keys(sensorDataRecords)
//     .slice(0, NUM_CHART_LINES)
//     .map((id, index) => {
//       const records = sensorDataRecords[id]
//       return {
//         label: getSensorLabel(id, sensors),
//         backgroundColor: colors[index % colors.length],
//         borderColor: colors[index % colors.length],
//         data: records.map(item => ({
//           t: item[0] * 1000,
//           y: item[1]
//         })),
//         type: 'line',
//         pointBackgroundColor: '#ffffff',
//         pointRadius: 3,
//         fill: false,
//         lineTension: 0,
//         borderWidth: 1
//       }
//     })
// })

const Y_LIMIT = 1800

const options = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: Y_LIMIT,
        callback: value => value + 'gpm'
      }
    }]
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

const labels = ['Influent Water', 'Effluent Water', 'Current Reading']

const annotations = [
  Math.round(Math.random() * 400 + 500),
  Math.round(Math.random() * 300 + 100)
]

const chartData = {
  labels: MONTHS.map(month => month.slice(0, 3).toUpperCase()),
  datasets: labels.map((label, key) => ({
    label,
    borderColor: colors[key],
    data: MONTHS.map(() => Math.round(Math.random() * 700 + 100)),
    pointHoverBackgroundColor: colors[key],
    pointBackgroundColor: 'white',
    pointRadius: 4,
    fill: false,
    lineTension: 0,
    borderWidth: 2
  }))
}

const getChartData = () => chartData

const SensorRecordsChart = props => {
  const { sensorDataRecords, sensors } = props
  const data = getChartData(sensorDataRecords, sensors)
  const [chartArea, setChartArea] = useState(null)

  const getChartArea = {
    afterRender: chart => setChartArea({
      ...chart.chartArea,
      canvasHeight: chart.canvas.height
    })
  }

  useEffect(() => {
    Chart.pluginService.register(getChartArea)
    return () => Chart.pluginService.unregister(getChartArea)
  }, [getChartArea])

  const getYPos = value =>
    chartArea.bottom - value * (chartArea.bottom - chartArea.top) / Y_LIMIT

  return (
    <div className="SensorRecordsChart">
      <div className="SensorRecordsChart__legend">
        {labels.map((label, key) => (
          <div key={key} className='d-flex align-items-center'>
            <div
              className='SensorRecordsChart__legend-color'
              style={{borderColor: colors[key]}}
            />
            <Typography variant='body-small'>{label}</Typography>
          </div>
        ))}
      </div>
      
      <div className="SensorRecordsChart__chart">
        <LineChart data={data} options={options} />
        {chartArea && (
          <>
            <div
              className={cn(
                'SensorRecordsChart__chart-annotation',
                'SensorRecordsChart__chart-annotation--red',
                annotations[0] > annotations[1] // Annotation number for red is 0
                  ? 'SensorRecordsChart__chart-annotation--border-bottom'
                  : 'SensorRecordsChart__chart-annotation--border-top'
              )}
              style={
                annotations[0] > annotations[1]
                  ? { height: getYPos(annotations[0]) + 1 }
                  : { top: getYPos(annotations[0]) - 1}
              }
            >
              <Typography variant='body-small'>
                Water Quality Based Effluent Limit (WQBEL)
              </Typography>
              <Typography>
                <strong>{annotations[0]}gpm</strong>
              </Typography>
            </div>

            <div
              className={cn(
                'SensorRecordsChart__chart-annotation',
                'SensorRecordsChart__chart-annotation--green',
                annotations[1] > annotations[0] // Annotation number for green is 1
                  ? 'SensorRecordsChart__chart-annotation--border-bottom'
                  : 'SensorRecordsChart__chart-annotation--border-top'
              )}
              style={
                annotations[1] > annotations[0]
                ? { height: getYPos(annotations[1]) + 1}
                : { top: getYPos(annotations[1]) - 1 }
              }
            >
              <Typography variant='body-small'>
                Post Treatment Guarantee
              </Typography>
              <Typography>
                <strong>{annotations[1]}gpm</strong>
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const selector = createStructuredSelector({
  sensorDataRecords: sensorDataRecordsSelector
})

export default connect(selector)(SensorRecordsChart)
