import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import { checkLeadAndCopper } from 'routes/LegacyReport/helpers/ReportHelpers'
import LeadAndCopper from 'routes/LegacyReport/components/LeadAndCopper'

const LeadCopper = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  const leadAndCopper = get(report, 'qualityTable.leadAndCopper')
  return report && checkLeadAndCopper(leadAndCopper) ? (
    <Card className={cn('LeadCopper', className)} id="lead-copper">
      <Card.Body>
        <LeadAndCopper leadAndCopper={leadAndCopper} />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(LeadCopper)
