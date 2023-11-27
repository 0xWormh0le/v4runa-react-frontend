import React, { useEffect, useRef, useState } from 'react'
import { Bubble as BubbleChart } from 'react-chartjs-2'
import fp from 'lodash/fp'

import data from 'data/disinfection-cost.json'

const getMaxRadiusValue = fp.compose(
  fp.defaultTo(1),
  fp.get(3),
  fp.maxBy(item => item[3])
)

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
  const maxRadius = getMaxRadiusValue(data)
  return {
    datasets: [
      {
        label: 'Disinfection Cost',
        borderColor: colors,
        backgroundColor: colors,
        data: data.map(item => ({
          label: item[0],
          x: item[1],
          y: item[2],
          r: (item[3] * 50) / maxRadius
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
          labelString: 'CL ($) @ $5.75/gal'
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Population Served'
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

const DisinfectionCostChart = () => {
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
    <div className="DisinfectionCostChart flex-grow-1 d-flex position-relative" ref={wrapperEl}>
      <BubbleChart data={getChartData(data)} options={options} redraw {...size} />
    </div>
  )
}

export default DisinfectionCostChart
