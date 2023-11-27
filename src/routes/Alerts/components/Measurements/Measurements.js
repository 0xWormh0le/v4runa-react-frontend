import React, { useState, useCallback, useEffect, useRef } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import cn from 'classnames'
import fp from 'lodash/fp'
import Typography from 'components/Typography'
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl'
import { sensorDataRecordsSelector, sensorSelectedSelector, getSensorDataRecordsList } from 'store/modules/sensor'
import { CHEMICAL_TYPES } from 'config/constants'

import './Measurements.scss'

function Measurements(props) {
  const { className, sensorDataRecords, sensorId, chemical, getSensorDataRecordsList } = props
  const [sensorRecordPage, setSensorRecordPage] = useState(1)
  const scrollDetect = useRef(true)
  const scrollDiv = useRef(null)

  const handleScroll = ({ target }) => {
    const scrollBottom = target.scrollHeight - target.scrollTop === target.clientHeight
    if (scrollDetect.current && scrollBottom) {
      if (sensorId !== null && sensorDataRecords && sensorDataRecords.links.next) {
        fetchSensorRecordPage(sensorRecordPage + 1)
        setSensorRecordPage(page => page + 1)
      }
    }
    scrollDetect.current = true
  }

  const fetchSensorRecordPage = useCallback(
    page => {
      const params = { page }
      getSensorDataRecordsList({
        params,
        id: sensorId,
        chemical: CHEMICAL_TYPES[chemical],
        success: () => {
          if (page === 1 && scrollDiv.current) {
            scrollDiv.current.scrollTop = 0
          }
        }
      })
    },
    [chemical, sensorId, getSensorDataRecordsList]
  )

  useEffect(() => {
    if (sensorId !== null) {
      scrollDetect.current = false
      fetchSensorRecordPage(1)
      setSensorRecordPage(1)
    }
  }, [chemical, sensorId, fetchSensorRecordPage])

  const data = fp.compose(
    fp.defaultTo([]),
    fp.map(({ timestamp, value, unit }) => {
      return {
        value,
        unit,
        date: new Date(timestamp * 1000),
        status: value !== null
      }
    }),
    fp.get('results.records')
  )(sensorDataRecords)

  return (
    <div className={cn('Measurements', className)} onScroll={handleScroll} ref={scrollDiv}>
      <table className="Measurements__table" cellPadding="3">
        <thead>
          <tr>
            <th>Measurement</th>
            <th className="text-right">Value</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(({ date, value, unit, status }, key) => (
              <tr key={key}>
                <td>
                  <FormattedDate value={date} format="twoDigit" />
                  &nbsp;
                  <FormattedTime value={date} format="long" />
                </td>
                <td className="text-right">
                  {value !== null && (
                    <>
                      <FormattedNumber value={value} format="sensorValue" />
                      &nbsp;{unit}
                    </>
                  )}
                </td>
                <td>
                  <Typography
                    className={cn(
                      'text-center',
                      status ? 'Measurements__status--received' : 'Measurements__status--not-received'
                    )}>
                    <strong>{status ? 'Received' : 'Not received'}</strong>
                  </Typography>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan={3} className="pt-5">
                No Measurements
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

const selector = createStructuredSelector({
  sensorDataRecords: sensorDataRecordsSelector,
  sensorId: sensorSelectedSelector
})

const actions = {
  getSensorDataRecordsList
}

export default connect(
  selector,
  actions
)(Measurements)
