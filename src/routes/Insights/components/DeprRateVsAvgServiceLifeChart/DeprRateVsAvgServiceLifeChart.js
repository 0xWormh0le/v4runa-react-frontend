import React, { useEffect, useRef, useState } from 'react'
import { Scatter as ScatterChart } from 'react-chartjs-2'
import groupBy from 'lodash/groupBy'

import data from 'data/depr-rate-vs-avg-service-life.json'

const colors = [
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(201, 203, 207)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(255, 99, 132)',
  'rgb(255, 205, 86)',
  'rgb(153, 205, 86)',
  'rgb(55, 105, 255)',
  'rgb(23, 255, 155)',
  'rgb(200, 255, 192)',
  'rgb(120, 135, 212)',
  'rgb(225, 105, 192)'
]

const getChartData = data => {
  const groupedData = groupBy(data, item => item[0])
  return {
    datasets: Object.entries(groupedData).map(([key, data], index) => ({
      label: key,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
      data: data.map(item => ({
        label: item[1],
        x: item[2],
        y: item[3]
      }))
    }))
  }
}

const options = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Average Service Life in Years ( C )'
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Depr. Rate Applied ( E )'
        }
      }
    ]
  },
  legend: {
    display: false
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, myData) => {
        const dataSet = myData.datasets[tooltipItem.datasetIndex]
        return `${dataSet.label} - ${dataSet.data[tooltipItem.index].label}: (${tooltipItem.xLabel}, ${tooltipItem.yLabel})`
      }
    }
  },
  maintainAspectRatio: false
}

const DeprRateVsAvgServiceLifeChart = () => {
  const wrapperEl = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: wrapperEl.current.clientWidth,
        height: wrapperEl.current.clientHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      return window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="DeprRateVsAvgServiceLifeChart flex-grow-1 d-flex position-relative" ref={wrapperEl}>
      <ScatterChart data={getChartData(data)} options={options} redraw {...size} />
    </div>
  )
}

export default DeprRateVsAvgServiceLifeChart
