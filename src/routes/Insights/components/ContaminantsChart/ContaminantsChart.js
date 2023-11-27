import React, { useEffect, useRef, useState } from 'react'
import { Bar as BarChart } from 'react-chartjs-2'

import data from 'data/contaminant.json'

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
  'rgb(225, 105, 192)',
  'rgb(150, 195, 212)',
  'rgb(135, 210, 192)',
  'rgb(255, 225, 55)'
]

const getChartData = data => {
  return {
    labels: data.map(item => item[0]),
    datasets: [
      {
        label: 'Disinfection Cost',
        borderColor: colors,
        backgroundColor: colors,
        data: data.map((item, index) => ({
          x: index,
          y: item[1]
        }))
      }
    ]
  }
}

const options = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Contaminant'
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Count'
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
        return `${dataSet.data[tooltipItem.index].label}: (${tooltipItem.xLabel}, ${tooltipItem.yLabel})`
      }
    }
  },
  maintainAspectRatio: false
}

const ContaminantsChart = () => {
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
    <div className="ContaminantsChart flex-grow-1 d-flex position-relative" ref={wrapperEl}>
      <BarChart data={getChartData(data)} options={options} redraw {...size} />
    </div>
  )
}

export default ContaminantsChart
