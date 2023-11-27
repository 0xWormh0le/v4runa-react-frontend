import { all } from 'redux-saga/effects'

import { saga as auth } from './auth'
import { saga as alert } from './alert'
import { saga as sensor } from './sensor'
import { saga as resourceAllocation } from './resource-allocation'
import { saga as waterUtility } from './water-utility'
import { saga as legacyReport } from './legacy-report'
import { saga as report } from './report'
// import { saga as todo } from './todo'

export default function* rootSaga() {
  yield all([
    auth(),
    alert(),
    sensor(),
    report(),
    legacyReport(),
    waterUtility(),
    resourceAllocation()
    //  todo()
  ])
}
