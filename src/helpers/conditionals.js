function inorganicContaminantsConditional(state, row, column, change) {
  if (row === 0) {
    if (column === 1) {
      state.qualityTable.inorganicContaminants.barium.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.inorganicContaminants.barium.mclViolation = change
    }
    if (column === 3) {
      state.qualityTable.inorganicContaminants.barium.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.inorganicContaminants.barium.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.inorganicContaminants.barium.mclg = change
    }
    if (column === 6) {
      state.qualityTable.inorganicContaminants.barium.mcl = change
    }
    if (column === 7) {
      state.qualityTable.inorganicContaminants.barium.likelySourceOfContamination = change
    }
  }
  if (row === 1) {
    if (column === 1) {
      state.qualityTable.inorganicContaminants.fluoride.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.inorganicContaminants.fluoride.mclViolation = change
    }
    if (column === 3) {
      state.qualityTable.inorganicContaminants.fluoride.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.inorganicContaminants.fluoride.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.inorganicContaminants.fluoride.mclg = change
    }
    if (column === 6) {
      state.qualityTable.inorganicContaminants.fluoride.mcl = change
    }
    if (column === 7) {
      state.qualityTable.inorganicContaminants.fluoride.likelySourceOfContamination = change
    }
  }
  if (row === 2) {
    if (column === 1) {
      state.qualityTable.inorganicContaminants.nitrate.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.inorganicContaminants.nitrate.mclViolation = change
    }
    if (column === 3) {
      state.qualityTable.inorganicContaminants.nitrate.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.inorganicContaminants.nitrate.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.inorganicContaminants.nitrate.mclg = change
    }
    if (column === 6) {
      state.qualityTable.inorganicContaminants.nitrate.mcl = change
    }
    if (column === 7) {
      state.qualityTable.inorganicContaminants.nitrate.likelySourceOfContamination = change
    }
  }
  if (row === 3) {
    if (column === 1) {
      state.qualityTable.inorganicContaminants.sodium.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.inorganicContaminants.sodium.mclViolation = change
    }
    if (column === 3) {
      state.qualityTable.inorganicContaminants.sodium.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.inorganicContaminants.sodium.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.inorganicContaminants.sodium.mclg = change
    }
    if (column === 6) {
      state.qualityTable.inorganicContaminants.sodium.mcl = change
    }
    if (column === 7) {
      state.qualityTable.inorganicContaminants.sodium.likelySourceOfContamination = change
    }
  }

  return state
}

function disinfectantsConditional(state, row, column, change) {
  if (row === 0) {
    if (column === 1) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.mclOrMrdlViolation = change
    }
    if (column === 3) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.mclgOrMrdlg = change
    }
    if (column === 6) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.mclOrMrdl = change
    }
    if (column === 7) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.chlorineAndChloramines.likelySourceOfContamination = change
    }
  }
  if (row === 1) {
    if (column === 1) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.mclOrMrdlViolation = change
    }
    if (column === 3) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.mclgOrMrdlg = change
    }
    if (column === 6) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.mclOrMrdl = change
    }
    if (column === 7) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.haloaceticAcids.likelySourceOfContamination = change
    }
  }
  if (row === 2) {
    if (column === 1) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.mclOrMrdlViolation = change
    }
    if (column === 3) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.levelDetected = change
    }
    if (column === 4) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.rangeOfResults = change
    }
    if (column === 5) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.mclgOrMrdlg = change
    }
    if (column === 6) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.mclOrMrdl = change
    }
    if (column === 7) {
      state.qualityTable.disinfectantsAndDisinfectionByProducts.tthm.likelySourceOfContamination = change
    }
  }

  return state
}

function leadAndCopperConditional(state, row, column, change) {
  if (row === 0) {
    if (column === 1) {
      state.qualityTable.leadAndCopper.copper.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.leadAndCopper.copper.alExceeded = change
    }
    if (column === 3) {
      state.qualityTable.leadAndCopper.copper.ninetiethPercentileResult = change
    }
    if (column === 4) {
      state.qualityTable.leadAndCopper.copper.exceedingTheAl = change
    }
    if (column === 5) {
      state.qualityTable.leadAndCopper.copper.mclg = change
    }
    if (column === 6) {
      state.qualityTable.leadAndCopper.copper.al = change
    }
    if (column === 7) {
      state.qualityTable.leadAndCopper.copper.likelySourceOfContamination = change
    }
  }
  if (row === 1) {
    if (column === 1) {
      state.qualityTable.leadAndCopper.lead.datesOfSampling = change
    }
    if (column === 2) {
      state.qualityTable.leadAndCopper.lead.alExceeded = change
    }
    if (column === 3) {
      state.qualityTable.leadAndCopper.lead.ninetiethPercentileResult = change
    }
    if (column === 4) {
      state.qualityTable.leadAndCopper.lead.exceedingTheAl = change
    }
    if (column === 5) {
      state.qualityTable.leadAndCopper.lead.mclg = change
    }
    if (column === 6) {
      state.qualityTable.leadAndCopper.lead.al = change
    }
    if (column === 7) {
      state.qualityTable.leadAndCopper.lead.likelySourceOfContamination = change
    }
  }

  return state
}

function disinfectantResidualReportConditional(state, row, column, change) {
  if (column === 1) {
    state.qualityTable.disinfectantResidualReport.chlorine.year = change
  }
  if (column === 2) {
    state.qualityTable.disinfectantResidualReport.chlorine.averageLevel = change
  }
  if (column === 3) {
    state.qualityTable.disinfectantResidualReport.chlorine.rangeOfLevelsDetected = change
  }
  if (column === 4) {
    state.qualityTable.disinfectantResidualReport.chlorine.mRDL = change
  }
  if (column === 5) {
    state.qualityTable.disinfectantResidualReport.chlorine.mRDLG = change
  }
  if (column === 6) {
    state.qualityTable.disinfectantResidualReport.chlorine.unitOfMeasure = change
  }
  if (column === 7) {
    state.qualityTable.disinfectantResidualReport.chlorine.violation = change
  }
  if (column === 8) {
    state.qualityTable.disinfectantResidualReport.chlorine.sourceInDrinkingWater = change
  }
  return state
}

function sourcesOfWater(state, row, column, change) {
  if (row === 0) {
    if (column === 0) {
      state.sourcesOfWater.wellOne.sourceWaterName = change
    }
    if (column === 1) {
      state.sourcesOfWater.wellOne.sourceType = change
    }
    if (column === 2) {
      state.sourcesOfWater.wellOne.activity = change
    }
    if (column === 3) {
      state.sourcesOfWater.wellOne.status = change
    }
  }
  if (row === 1) {
    if (column === 0) {
      state.sourcesOfWater.wellTwo.sourceWaterName = change
    }
    if (column === 1) {
      state.sourcesOfWater.wellTwo.sourceType = change
    }
    if (column === 2) {
      state.sourcesOfWater.wellTwo.activity = change
    }
    if (column === 3) {
      state.sourcesOfWater.wellTwo.status = change
    }
  }
  return state
}

module.exports = {
  inorganicContaminantsConditional,
  disinfectantsConditional,
  leadAndCopperConditional,
  disinfectantResidualReportConditional,
  sourcesOfWater
}
