import React from 'react'
import cn from 'classnames'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Typography from 'components/Typography'
import BudgetChart from '../BudgetChart'
import BudgetLineChart from '../BudgetLineChart'
import Parameter from '../../../Assets/components/Parameter'
import ExpenseComparisonTable from '../ExpenseComparisonTable'
import BudgetCost from '../../../Personnel/components/BudgetCost'

import moneySpentOnAssets from 'data/money-spent-on-assets'
import totalBudgetData from 'data/total-budget.json'
import budgetCostData from 'data/budget-cost.json'

import './Finances.scss'

function Finances(props) {
  const handleRunReportClick = (areaCode, lang, startDate, endDate) => {}

  return (
    <div className="Finances">
      <Row className="Finances__row-spacer">
        <Col xs={12} className="Finances__col-spacer">
          <Parameter onRunReportClick={handleRunReportClick} />
        </Col>

        <Col lg={6} className="Finances__col-spacer">
          <BudgetChart caption="Total Budget" data={totalBudgetData} />
        </Col>

        <Col lg={6} className="Finances__col-spacer">
          <BudgetLineChart data={moneySpentOnAssets.last_year} />
        </Col>
      </Row>

      <Row className={cn('Finances__row-spacer', 'Finances__row-bottom')}>
        <Col xs={12} className={cn('Finances__col-spacer', 'Finances__expense-comparison')}>
          <Card>
            <Card.Body>
              <Typography variant="subtitle" gutterBottom uppercase>
                Expense Comparison
              </Typography>
              <div className="Finances__table-scroll">
                <ExpenseComparisonTable data={moneySpentOnAssets} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} className={cn('Finances__col-spacer', 'Finances__budget-cost')}>
          <BudgetCost data={budgetCostData} />
        </Col>
      </Row>
    </div>
  )
}

export default Finances
