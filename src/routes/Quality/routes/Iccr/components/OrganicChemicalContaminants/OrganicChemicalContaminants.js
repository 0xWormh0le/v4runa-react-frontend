import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import OrganicContaminantsSection from 'components/OrganicContaminantsSection'

const OrganicChemicalContaminants = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  return report ? (
    <Card className={cn('OrganicChemicalContaminants', className)} id="organic-chemical-contaminants">
      <Card.Body>
        <OrganicContaminantsSection organicContaminants={report.organicContaminants} />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(OrganicChemicalContaminants)
