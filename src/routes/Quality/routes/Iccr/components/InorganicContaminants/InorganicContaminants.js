import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { calculateHighestLevelDetected } from 'routes/LegacyReport/helpers/ReportHelpers'
import { reportDetailsSelector } from 'store/modules/legacy-report'
import InorganicContaminantsBox from 'routes/LegacyReport/components/InorganicContaminants'

const InorganicContaminants = ({ reportDetails, className }) => {
  const report = get(reportDetails, 'report_json')
  return report ? (
    <Card className={cn('InorganicContaminants', className)} id="inorganic-contaminants">
      <Card.Body>
        <InorganicContaminantsBox
          inorganicContaminants={report.qualityTable.inorganicContaminants}
          inorganicHighest={calculateHighestLevelDetected(report.qualityTable)}
        />
      </Card.Body>
    </Card>
  ) : null
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(InorganicContaminants)
