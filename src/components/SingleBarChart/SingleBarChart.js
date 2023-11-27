import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import './SingleBarChart.scss'

const SingleBarChart = ({ gridClass, section, height1, height2, levelDetected }) => {
  return (
    <div className="SingleBarChart">
      <div style={{ position: 'relative', minHeight: '146px' }}>
        <div>
          <div className={cn('SingleBarChart__bar', section, gridClass)} style={{ height: `${height1}px` }}>
            <div className="level-detected small-text">
              <p>{levelDetected}</p>
            </div>
          </div>
          <div className={cn('SingleBarChart__bar2', section, gridClass)} style={{ height: `${height2}px` }} />
        </div>
      </div>
    </div>
  )
}

SingleBarChart.propTypes = {
  section: PropTypes.string,
  height1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  levelDetected: PropTypes.string
}

export default SingleBarChart
