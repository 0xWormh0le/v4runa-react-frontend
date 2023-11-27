import React, { useState } from 'react'
import cn from 'classnames'
import xor from 'lodash/xor'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Typography from 'components/Typography'
import IconArrowRight from 'icons/IconArrowRight'
import IconArrowUp from 'icons/IconUpArrow'
import IconArrowDown from 'icons/IconDownArrow'
import IconTechnician from 'icons/IconProfile'
import IconQuestion from 'icons/IconQuestion'
import IconCurrency from 'icons/IconQuestion'
import IconWaterDrop from 'icons/IconQuestion'

import ResourceOptimizationFirst from '../ResourceOptimizationFirst'

import './Insights.scss'

const categories = ['Resource Optimization', 'Risk Mitigation', 'Benchmarking', 'Event Prediction']

const QuestionPageSecond = () => <div>second</div>

const questions = [
  {
    caption:
      'Do I have the technicians that I need to address this alert considering how they are allocated right now?',
    component: ResourceOptimizationFirst,
    icon: IconTechnician,
    category: 0
  },
  {
    caption: 'How much will we lose or spend to address each issue?',
    component: QuestionPageSecond,
    icon: IconCurrency,
    category: 0
  },
  {
    caption: 'Which issues should I allocate the technicians to as a result?',
    component: ResourceOptimizationFirst,
    icon: IconTechnician,
    category: 0
  },
  {
    caption: 'What resources can we move around/plan to save some money?',
    component: ResourceOptimizationFirst,
    icon: IconCurrency,
    category: 0
  },
  {
    caption: 'What technology can we use to reduce the expense?',
    component: ResourceOptimizationFirst,
    icon: IconQuestion,
    category: 0
  },
  {
    caption: 'Is the water in the system stale? When should I dump it and how much will I waste?',
    component: ResourceOptimizationFirst,
    icon: IconWaterDrop,
    category: 0
  },
  {
    caption: 'How much clorine will we need in the next 6 months considering the chlorine residual issue we just had?',
    component: ResourceOptimizationFirst,
    icon: IconWaterDrop,
    category: 0
  },
  {
    caption:
      'Do I have the technicians that I need to address this alert considering how they are allocated right now?',
    component: ResourceOptimizationFirst,
    icon: IconTechnician,
    category: 1
  },
  {
    caption:
      'Do I have the technicians that I need to address this alert considering how they are allocated right now?',
    component: ResourceOptimizationFirst,
    icon: IconTechnician,
    category: 2
  },
  {
    caption:
      'Do I have the technicians that I need to address this alert considering how they are allocated right now?',
    component: ResourceOptimizationFirst,
    icon: IconTechnician,
    category: 3
  }
]

function Insights(props) {
  const [expanded, setExpanded] = useState([0])
  const [question, setQuestion] = useState(0)
  const QuestionPage = questions[question].component

  return (
    <Row className="Insights__row-spacer">
      <Col lg={5} xl={6} className="Insights__col-spacer mb-3 mb-lg-0">
        {categories.map((item, key) => (
          <Card key={key} className="Insights__category">
            <div className="Insights__category-header" onClick={() => setExpanded(xor(expanded, [key]))}>
              <Typography uppercase variant="body-large">
                <strong>{item}</strong>
              </Typography>
              {expanded.includes(key) ? <IconArrowDown></IconArrowDown> : <IconArrowUp></IconArrowUp>}
            </div>
            {expanded.includes(key) && (
              <Card.Body className="pt-0">
                {questions
                  .map((q, key) => ({ ...q, key }))
                  .filter(q => q.category === key)
                  .map(({ caption, icon: Icon, key: id }, key) => (
                    <div
                      key={key}
                      className={cn('Insights__question', { active: id === question })}
                      onClick={() => setQuestion(id)}>
                      <div className="Insights__question-content">
                        <Icon className="Insights__question-icon" />
                        <Typography as="h5" className="ml-2 flex-grow-1">
                          {caption}
                        </Typography>
                        {id === question && <IconArrowRight className="Insights__question-active-arrow" />}
                      </div>
                    </div>
                  ))}
              </Card.Body>
            )}
          </Card>
        ))}
      </Col>
      <Col lg={7} xl={6} className="Insights__col-spacer">
        <div className="Insights__right-pane">
          <QuestionPage />
        </div>
      </Col>
    </Row>
  )
}

export default Insights
