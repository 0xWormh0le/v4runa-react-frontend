const dataTypes = {
  default: {
    errors: {},
    title: '',
    nameOfUtility: '',
    nameOfReport: '',
    additionalHealthInformation: '',
    microbialContaminants: '',
    radioactiveContaminants: '',
    pesticidesContaminants: '',
    organicContaminants: '',
    howToReachOut: '',
    contactInformation: {
      reportFromDate: '',
      reportToDate: '',
      contactTitle: '',
      officePhone: '',
      operatorPhone: '',
      contactWebsite: '',
      contactDescription: '',
      descriptionEnglish: '',
      descriptionSpanish: ''
    },
    overallWaterQuality: 'excellent',
    overallWaterQualityText: '',
    sourceWaterAssessment: '',
    violations: {
      publicNotificationRule: [['', '', '', '']],
      revisedTotalColiformRule: [['', '', '', '']]
    },
    sourcesOfWater: {
      wellOne: {
        sourceWaterName: '',
        sourceType: '',
        activity: '',
        status: ''
      },
      wellTwo: {
        sourceWaterName: '',
        sourceType: '',
        activity: '',
        status: ''
      }
    },
    qualityTable: {
      inorganicContaminants: {
        barium: {
          datesOfSampling: '',
          mclViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclg: '',
          mcl: '',
          likelySourceOfContamination: ''
        },
        fluoride: {
          datesOfSampling: '',
          mclViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclg: '',
          mcl: '',
          likelySourceOfContamination: ''
        },
        nitrate: {
          datesOfSampling: '',
          mclViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclg: '',
          mcl: '',
          likelySourceOfContamination: ''
        },
        sodium: {
          datesOfSampling: '',
          mclViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclg: '',
          mcl: '',
          likelySourceOfContamination: ''
        }
      },
      disinfectantsAndDisinfectionByProducts: {
        chlorineAndChloramines: {
          datesOfSampling: '',
          mclOrMrdlViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclgOrMrdlg: '',
          mclOrMrdl: '',
          likelySourceOfContamination: ''
        },
        haloaceticAcids: {
          datesOfSampling: '',
          mclOrMrdlViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclgOrMrdlg: '',
          mclOrMrdl: '',
          likelySourceOfContamination: ''
        },
        tthm: {
          datesOfSampling: '',
          mclOrMrdlViolation: '',
          levelDetected: '',
          rangeOfResults: '',
          mclgOrMrdlg: '',
          mclOrMrdl: '',
          likelySourceOfContamination: ''
        }
      },
      leadAndCopper: {
        copper: {
          datesOfSampling: '',
          alExceeded: '',
          ninetiethPercentileResult: '',
          exceedingTheAl: '',
          mclg: '',
          al: '',
          likelySourceOfContamination: ''
        },
        lead: {
          datesOfSampling: '',
          alExceeded: '',
          ninetiethPercentileResult: '',
          exceedingTheAl: '',
          mclg: '',
          al: '',
          likelySourceOfContamination: ''
        }
      },
      disinfectantResidualReport: {
        chlorine: {
          year: '',
          averageLevel: '',
          rangeOfLevelsDetected: '',
          mRDL: '',
          mRDLG: '',
          unitOfMeasure: '',
          violation: '',
          sourceInDrinkingWater: ''
        }
      }
    },
    systemSusceptibility: {
      asbestos: '----',
      cyanide: '----',
      metals: '----',
      microbial: '----',
      minerals: '----',
      radiochemical: '----',
      syntheticOrganicChemicals: '----',
      disinfectionByproduct: '----',
      volatileOrganicChemicals: '----',
      drinkingWaterContaminant: '----',
      other: ''
    }
  },
  inorganicContaminants: [
    ['Barium (ppm)', '', '', '', '', '', '', ''],
    ['Fluoride (ppm)', '', '', '', '', '', '', ''],
    ['Nitrate (as Nitrogen) (ppm)', '', '', '', '', '', '', ''],
    ['Sodium (ppm)', '', '', '', '', '', '', '']
  ],
  inorganicContaminantsColumns: [
    {
      editor: false
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    }
  ],
  disinfectants: [
    ['Chlorine and Chloramines (ppm)', '', '', '', '', '', '', ''],
    ['Haloacetic Acids (five) (HAA5) (ppb)', '', '', '', '', '', '', ''],
    ['TTHM [Total trihalomethanes] (ppm)', '', '', '', '', '', '', '']
  ],
  disinfectantsColumns: [
    {
      editor: false
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    }
  ],
  leadAndCopper: [
    ['Copper (tap water) (ppm)', '', '', '', '', '', '', ''],
    ['Lead (tap water) (ppb)', '', '', '', '', '', '', '']
  ],
  leadAndCopperColumns: [
    {
      editor: false
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    }
  ],
  disinfectantResidualReport: [['Chlorine Gas', '', '', '', '', '', '', '', '']],
  disinfectantResidualReportColumns: [
    {
      editor: false
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    },
    {
      editor: 'text'
    }
  ],
  systemSusceptibilityColumns1: [
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    }
  ],
  systemSusceptibilityColumns2: [
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    },
    {
      type: 'dropdown',
      source: ['None', 'High', 'Medium', 'Low']
    }
  ]
}

export default dataTypes
