import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { FormattedNumber } from 'react-intl'

import DropdownButton, { DropdownItem } from 'components/Dropdown'
import Typography from 'components/Typography'

import './BudgetCost.scss'

const periods = ['THIS MONTH', 'FOO', 'BAR']

function BudgetCost(props) {
  const {
    title,
    data: {
      unscheduledRepairs,
      scheduledRepairs,
      projectedCost,
      unscheduledCost,
      allocatedBudget,
      totalPercent,
      totalBudget
    }
  } = props

  const [period, setPeriod] = useState(0)

  const handlePeriodChange = period => () => setPeriod(period)

  const field1 = title ? (
    <>
      Projected <br /> Deontaminant Cost
    </>
  ) : (
    <>
      Projected <br /> Unscheduled repairs <br /> This period
    </>
  )

  const field2 = title ? (
    <>
      Unscheduled <br /> Decontaminant Cost
    </>
  ) : (
    <>
      Scheduled Repairs <br /> This period
    </>
  )

  const value1 = title ? projectedCost : unscheduledRepairs

  const value2 = title ? unscheduledCost : scheduledRepairs

  return (
    <div className="BudgetCost">
      <Card className="BudgetCost__card">
        <Card.Body className="BudgetCost__card-body">
          {title ? (
            <Typography variant="subtitle" gutterBottom>
              {title}
            </Typography>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <Typography variant="subtitle" className="mr-2">
                Budget &amp; Cost
              </Typography>
              <DropdownButton title={periods[period]}>
                {periods.map((period, key) => (
                  <DropdownItem onClick={() => handlePeriodChange(key)} key={key}>
                    {period}
                  </DropdownItem>
                ))}
              </DropdownButton>
            </div>
          )}

          <div className="BudgetCost__card-field">
            <Typography variant="body-small">{field1}</Typography>
            <Typography variant="body-large" className="BudgetCost__card-field-value">
              <FormattedNumber value={value1} format="currencyWithoutCents" />
            </Typography>
          </div>

          <div className="BudgetCost__card-field mb-2">
            <Typography variant="body-small">{field2}</Typography>
            <Typography variant="body-large" className="BudgetCost__card-field-value">
              <FormattedNumber value={value2} format="currencyWithoutCents" />
            </Typography>
          </div>

          <hr className="BudgetCost__card-field--hr" />

          <div className="BudgetCost__card-field mb-2">
            <Typography variant="body-small">Allocated Budget</Typography>
            <Typography variant="body-large" className="BudgetCost__card-field-value">
              <FormattedNumber value={allocatedBudget} format="currencyWithoutCents" />
            </Typography>
          </div>

          <hr className="BudgetCost__card-field--hr" />

          <div className="BudgetCost__card-field">
            <Typography variant="body-small">Tracking Total</Typography>
            <Typography variant="body-large" className="BudgetCost__card-field-value--last">
              <strong>
                <FormattedNumber value={totalPercent} format="percentRounded" />
                &nbsp;&nbsp;
                <FormattedNumber value={totalBudget} format="currencyWithoutCents" />
              </strong>
            </Typography>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

BudgetCost.propTypes = {
  data: PropTypes.shape({
    unscheduledRepairs: PropTypes.number,
    scheduledRepairs: PropTypes.number,
    allocatedBudget: PropTypes.number,
    totalPercent: PropTypes.number,
    totalBudget: PropTypes.number
  }).isRequired
}

export default BudgetCost
