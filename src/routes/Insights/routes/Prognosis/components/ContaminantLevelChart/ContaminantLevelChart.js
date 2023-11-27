import React from 'react'
import Card from 'react-bootstrap/Card'
import Highcharts from 'highcharts'
import HCMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import Typography from 'components/Typography'

import './ContaminantLevelChart.scss'

HCMore(Highcharts)

const options = {
  chart: {
    type: 'boxplot'
  },

  title: false,

  legend: {
    enabled: false
  },

  credits: {
    enabled: false
  },

  xAxis: {
    categories: ['1', '2', '3', '4', '5'],
    title: {
      text: 'XXX'
    }
  },

  yAxis: {
    title: {
      text: 'YYY'
    }
  },

  series: [
    {
      name: 'Observations',
      data: [
        [760, 801, 848, 895, 965],
        [733, 853, 939, 980, 1080],
        [714, 762, 817, 870, 918],
        [724, 802, 806, 871, 950],
        [834, 836, 864, 882, 910]
      ],
      tooltip: {
        headerFormat: '<em>Experiment No {point.key}</em><br/>'
      }
    },
    {
      name: 'Outliers',
      color: Highcharts.getOptions().colors[0],
      type: 'scatter',
      data: [
        // x, y positions where 0 is the first category
        [0, 644],
        [4, 718],
        [4, 951],
        [4, 969]
      ],
      marker: {
        fillColor: 'white',
        lineWidth: 1,
        lineColor: Highcharts.getOptions().colors[0]
      },
      tooltip: {
        pointFormat: 'Observation: {point.y}'
      }
    }
  ]
}

function ContaminantLevelChart() {
  return (
    <Card className="ContaminantLevelChart h-100">
      <Card.Body className="d-flex flex-column">
        <Typography variant="subtitle" uppercase gutterBottom>
          Contaminant Levels
        </Typography>
        <Typography className="mb-3">
          No contamination issues expected to arise unless backup the pumps are not immediately black started when the
          outage occurs.
        </Typography>
        <div className="ContaminantLevelChart__chart-wrapper">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </Card.Body>
    </Card>
  )
}

export default ContaminantLevelChart
