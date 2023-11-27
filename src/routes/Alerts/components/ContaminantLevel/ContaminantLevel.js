import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FormattedNumber } from 'react-intl'

import Typography from 'components/Typography'
import IconUpArrow from 'icons/IconUpArrow'
import IconDownArrow from 'icons/IconDownArrow'

import { sensorDataRecordTrendSelector, sensorSelectedSelector, getSensorDataRecordTrend } from 'store/modules/sensor'

import { CHEMICAL_TYPES, CHEMICAL_TYPE } from 'config/constants'

import './ContaminantLevel.scss'

const chemical_types = [
  CHEMICAL_TYPE.Lead,
  CHEMICAL_TYPE.Flouride,
  CHEMICAL_TYPE.Copper,
  CHEMICAL_TYPE.Chlorine,
  CHEMICAL_TYPE.Bromine
]

const contaminants = ['Lead', 'Flouride', 'Copper', 'Chlorine', 'Bromine']

const recent_n_for_trend = 10

function TrendArrow({ trend }) {
  if (trend > 0) {
    return <IconUpArrow className="ContaminantLevel__up-arrow" />
  } else if (trend < 0) {
    return <IconDownArrow className="ContaminantLevel__down-arrow" />
  } else {
    return <></>
  }
}

function ContaminantLevel(props) {
  const { waterQualityLink, detailLink, sensorDataRecordTrend, sensorId, getSensorDataRecordTrend } = props

  useEffect(() => {
    if (sensorId !== null) {
      chemical_types.forEach(ch =>
        getSensorDataRecordTrend({
          id: sensorId,
          chemical: CHEMICAL_TYPES[ch]
        })
      )
    }
  }, [sensorId, getSensorDataRecordTrend])

  const data = chemical_types.map(type => {
    const records = sensorDataRecordTrend[CHEMICAL_TYPES[type]]
    const epa = 0.5
    const none = { epa: null, trend: null, unit: null }

    let i = Math.min(recent_n_for_trend - 1, records.length)

    if (records.length <= i) {
      return none
    }

    for (; i > 0 && records[i].value === null; i--) {
      if (records[0].value === null || records[i].value === null) {
        return none
      }
    }

    return {
      epa,
      trend: Math.round((records[0].value - records[i].value) * 100) / 100,
      unit: records[0].unit
    }
  })

  return (
    <Card className="ContaminantLevel">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center">
          <Typography variant="subtitle" uppercase>
            Contaminant Levels
          </Typography>
          {detailLink && (
            <>
              <Typography className="mx-2">|</Typography>
              <Link to="/quality">
                <Typography>
                  <strong>Details</strong>
                </Typography>
              </Link>
            </>
          )}
        </div>

        <div className="d-flex justify-content-between flex-column flex-grow-1">
          <div className="overflow-auto">
            <table className="w-100 mt-3">
              <thead className="ContaminantLevel__header">
                <tr>
                  <th>Contaminants</th>
                  <th className="text-center">of EPA max</th>
                  <th className="text-center">Trend</th>
                </tr>
              </thead>
              <tbody className="ContaminantLevel__body">
                {data.map(({ epa, trend, unit }, key) => (
                  <tr key={key}>
                    <td>
                      <Typography variant="body-large">{contaminants[key]}</Typography>
                    </td>
                    <td className="text-center">
                      {epa !== null && (
                        <Typography variant="body-xlarge" className="ContaminantLevel__field-black">
                          <strong>
                            <FormattedNumber value={epa} format="percentRounded" />
                          </strong>
                        </Typography>
                      )}
                    </td>
                    <td className="d-flex align-items-center justify-content-end">
                      {trend !== null && (
                        <>
                          <TrendArrow trend={trend} />
                          <Typography variant="body-large" className="ContaminantLevel__field-black">
                            <strong>
                              {Math.abs(trend)}&nbsp;{unit}
                            </strong>
                          </Typography>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {waterQualityLink && (
            <div>
              <Button as={Link} to={waterQualityLink} className="mt-2">
                WATER QUALITY
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  sensorDataRecordTrend: sensorDataRecordTrendSelector,
  sensorId: sensorSelectedSelector
})

const actions = {
  getSensorDataRecordTrend
}

export default connect(
  selector,
  actions
)(ContaminantLevel)
