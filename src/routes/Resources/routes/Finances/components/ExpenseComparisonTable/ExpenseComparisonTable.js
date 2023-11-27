import React from 'react'
import cn from 'classnames'
import Table from 'react-bootstrap/Table'
import { FormattedNumber } from 'react-intl'

import Typography from 'components/Typography'
import './ExpenseComparisonTable.scss'

function ExpenseComparisonTable(props) {
  const { data } = props

  return (
    <Table className="ExpenseComparisonTable">
      <thead>
        <tr>
          <th></th>
          <th>2019</th>
          <th>2018</th>
          <th>Change $</th>
          <th>Change %</th>
        </tr>
      </thead>
      <tbody>
        {data.current_year.map(([label, currentPrice], index) => {
          const lastPrice = data.last_year[index][1]
          const priceDiff = currentPrice - lastPrice
          const color =
            priceDiff >= 0 ? 'ExpenseComparisonTable__expense--positive' : 'ExpenseComparisonTable__expense--negative'
          return (
            <tr key={index}>
              <td>{label}</td>
              <td>
                <Typography variant="body-large" className="ExpenseComparisonTable__expense">
                  <FormattedNumber value={currentPrice} format="currencyWithoutCents" />
                </Typography>
              </td>
              <td>
                <Typography variant="body-large" className="ExpenseComparisonTable__expense">
                  <FormattedNumber value={lastPrice} format="currencyWithoutCents" />
                </Typography>
              </td>
              <td>
                <Typography variant="body-large" className={cn('ExpenseComparisonTable__expense', color)}>
                  {priceDiff === 0 ? '' : priceDiff > 0 ? '+' : '-'}
                  <FormattedNumber value={Math.abs(priceDiff)} format="currencyWithoutCents" />
                </Typography>
              </td>
              <td>
                <Typography variant="body-large" className={cn('ExpenseComparisonTable__expense', color)}>
                  {priceDiff === 0 ? '' : priceDiff > 0 ? '+' : '-'}
                  <FormattedNumber value={Math.abs(priceDiff / lastPrice)} format="percentRounded" />
                </Typography>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default ExpenseComparisonTable
