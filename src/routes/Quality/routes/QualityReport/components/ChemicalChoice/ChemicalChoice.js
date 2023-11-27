import React, { useState } from 'react'
import cn from 'classnames'

import IconCopper from 'icons/IconCopper'
import IconDisinfectant from 'icons/IconDisinfectant'
import IconInorganic from 'icons/IconInorganic'
import IconMicrobial from 'icons/IconMicrobial'
import IconOrganic from 'icons/IconOrganic'
import IconPesticide from 'icons/IconPesticide'
import IconRadioActive from 'icons/IconRadioActive'

import './ChemicalChoice.scss'

const icons = [
  [IconInorganic, 'inorganic-contaminants'],
  [IconDisinfectant, 'disinfectants'],
  [IconCopper, 'lead-copper'],
  [IconOrganic, 'organic-chemical-contaminants'],
  [IconPesticide, 'pesticides-herbicides'],
  [IconRadioActive, 'radioactive-contaminants'],
  [IconMicrobial, 'microbial-contaminants']
]

const chemicalNames = [
  'Inorganic',
  'Chlorines & Chloramines',
  'Lead Copper',
  'Organic',
  'Pesticides Herbicides',
  'Radioactive',
  'Microbial'
]

function ChemicalChoice(props) {
  const { defaultValue, className, onChemicalSelect } = props
  const [chemical, setChemical] = useState(defaultValue || 0)

  const handleChemicalClick = ch => () => {
    setChemical(ch)
    onChemicalSelect(ch)
  }

  return (
    <div className={cn('ChemicalChoice', className)}>
      {icons.map(([Icon, name], key) => (
        <div
          key={key}
          title={chemicalNames[key]}
          onClick={handleChemicalClick(key)}
          className={cn('ChemicalChoice__chemical', `ChemicalChoice__${name}`, {
            active: name === icons[chemical][1]
          })}>
          <Icon />
        </div>
      ))}
    </div>
  )
}

export default ChemicalChoice
