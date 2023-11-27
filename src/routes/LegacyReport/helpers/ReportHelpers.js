import get from 'lodash/get'

export function calculateHighestLevelDetected(qualityTable) {
  let inorganicArr = []

  const findHighestInorganic = contaminants => {
    for (var j in contaminants) {
      if (j !== '_id') {
        let contaminant = contaminants[j]

        let levelDetected = parseFloat(contaminant.levelDetected)
        let mCL = parseFloat(contaminant.mcl)
        let result = (levelDetected / mCL) * 100

        if (!isNaN(result)) {
          inorganicArr.push(result)
        }
      }
    }
  }

  for (var k in qualityTable) {
    if (k === 'inorganicContaminants') {
      findHighestInorganic(qualityTable[k])
    }
  }
  let inorganicHighest = 0
  if (inorganicArr.length > 1) {
    inorganicHighest = Math.max(...inorganicArr)
  }

  return inorganicHighest
  // this.setState({ inorganicHighest })
}

export function checkWaterSource(report) {
  if (report.sourcesOfWater === undefined || report.sourcesOfWater.length === 0) {
    return false
  } else {
    const sources = report.sourcesOfWater
    const wellOne =
      get(sources, 'wellOne.activity') === '' &&
      get(sources, 'wellOne.sourceType') === '' &&
      get(sources, 'wellOne.sourceWaterName') === '' &&
      get(sources, 'wellOne.status') === ''
    const wellTwo =
      get(sources, 'wellTwo.activity') === '' &&
      get(sources, 'wellTwo.sourceType') === '' &&
      get(sources, 'wellTwo.sourceWaterName') === '' &&
      get(sources, 'wellTwo.status') === ''
    if (wellOne && wellTwo) {
      return false
    } else {
      return true
    }
  }
}

export function checkInorganicContaminants(report) {
  const inorganicContaminants = get(report, 'qualityTable.inorganicContaminants')
  let count = 0
  for (var k in inorganicContaminants) {
    if (k !== '_id') {
      let countEmpty = 0
      let contaminant = inorganicContaminants[k]

      for (var o in contaminant) {
        if (o !== '_id') {
          if (contaminant[o] === '') {
            countEmpty++
          }
        }
      }
      if (countEmpty === 7) {
        count++
      }
    }
  }
  if (count === 4) {
    return false
  } else {
    return true
  }
}

export function checkDisinfectantResidualReport(report) {
  const disinfectantResidualReport = get(report, 'qualityTable.disinfectantResidualReport')
  if (disinfectantResidualReport && disinfectantResidualReport.chlorine) {
    return true
  } else {
    return false
  }
}

export function checkDisinfectants(report) {
  const disinfectants = get(report, 'qualityTable.disinfectantsAndDisinfectionByProducts')

  let count = 0
  for (var k in disinfectants) {
    if (k !== '_id') {
      let countEmpty = 0
      let contaminant = disinfectants[k]

      for (var o in contaminant) {
        if (o !== '_id') {
          if (contaminant[o] === '') {
            countEmpty++
          }
        }
      }
      if (countEmpty === 7) {
        count++
      }
    }
  }
  if (count === 3) {
    return false
  } else {
    return true
  }
}

export function checkLeadAndCopper(report) {
  const leadAndCopper = get(report, 'qualityTable.leadAndCopper')

  let count = 0
  for (var k in leadAndCopper) {
    if (k !== '_id') {
      let countEmpty = 0
      let contaminant = leadAndCopper[k]

      for (var o in contaminant) {
        if (o !== '_id') {
          if (contaminant[o] === '') {
            countEmpty++
          }
        }
      }
      if (countEmpty === 7) {
        count++
      }
    }
  }
  if (count === 2) {
    return false
  } else {
    return true
  }
}
