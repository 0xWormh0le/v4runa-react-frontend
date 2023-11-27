import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import MicrobialContaminantsSection from 'components/MicrobialContaminantsSection'

const MicrobialContaminants = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  return report ? (
    <Card className={cn('MicrobialContaminants', className)} id="microbial-contaminants">
      <Card.Body>
        <MicrobialContaminantsSection microbialContaminants={report.microbialContaminants} />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(MicrobialContaminants)
