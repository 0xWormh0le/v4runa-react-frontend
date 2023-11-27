import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from 'react-bootstrap/Card'
import cn from 'classnames'
import get from 'lodash/get'

import { reportDetailsSelector } from 'store/modules/legacy-report'
import DisinfectantsAndByProducts from 'routes/LegacyReport/components/DisinfectantsAndByProducts'

const Disinfectants = ({ reportDetails, className }) => {
  const disinfectants = get(reportDetails, 'report_json.qualityTable.disinfectantsAndDisinfectionByProducts')
  return (
    <Card className={cn('Disinfectants', className)} id="disinfectants">
      <Card.Body>
        <DisinfectantsAndByProducts disinfectantsAndDisinfectionByProducts={disinfectants} />
      </Card.Body>
    </Card>
  )
}

const selector = createStructuredSelector({
  reportDetails: reportDetailsSelector
})

export default connect(selector)(Disinfectants)
