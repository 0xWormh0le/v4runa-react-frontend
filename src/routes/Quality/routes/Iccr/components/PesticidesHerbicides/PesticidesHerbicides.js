import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import PesticidesHerbicidesSection from 'components/PesticidesHerbicidesSection'

const PesticidesHerbicides = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  return report ? (
    <Card className={cn('PesticidesHerbicides', className)} id="pesticides-herbicides">
      <Card.Body>
        <PesticidesHerbicidesSection organicContaminants={report.organicContaminants} />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(PesticidesHerbicides)
