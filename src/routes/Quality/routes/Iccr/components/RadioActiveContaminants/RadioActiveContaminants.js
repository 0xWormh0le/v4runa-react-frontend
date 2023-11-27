import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import RadioActiveContaminantsSection from 'components/RadioActiveContaminantsSection'

const RadioActiveContaminants = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  return report ? (
    <Card className={cn('RadioActiveContaminants', className)} id="radioactive-contaminants">
      <Card.Body>
        <RadioActiveContaminantsSection radioactiveContaminants={report.radioactiveContaminants} />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(RadioActiveContaminants)
