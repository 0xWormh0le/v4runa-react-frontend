import React, { Component } from 'react'
import get from 'lodash/get'

class WaterSources extends Component {
  render() {
    return (
      <div>
        <div>
          <h5 className="lightblue">
            <b>WHERE YOUR WATER COMES FROM</b>
          </h5>
          <p className="small-text">
            The sources of drinking water (both tap water and bottled water) include rivers, lakes, streams, ponds,
            reservoirs, springs, and wells. As water travels over the surface of the land or through the ground, it
            dissolves naturally-occurring minerals and, in some cases, radioactive material, and can pick up substances
            resulting from the presence of animals or from human activity.
          </p>
        </div>
        <h5 className="lightblue">
          <b>WATER SOURCES</b>
        </h5>
        <div className="row" style={{ marginTop: '15px' }}>
          <div className="col-md-6">
            <b>WELL #1</b>
            <br />
            {get(this.props.sourcesOfWater, 'wellOne[0].sourceWaterName')}
            {/* 11909 FM423 (Behind Sonic/Willoughby Way Culde-sac) */}
            <br />
            Type: {get(this.props.sourcesOfWater, 'wellOne[0].sourceType')} | Activity:{' '}
            {get(this.props.sourcesOfWater, 'wellOne[0].activity')}
            <div className="small-text" style={{ marginTop: '15px' }}>
              <b>Status: </b>
              {get(this.props.sourcesOfWater, 'wellOne[0].status')}
            </div>
          </div>
          <div className="col-md-6">
            <b>WELL #2</b>
            <br />
            {get(this.props.sourcesOfWater, 'wellTwo[0].sourceWaterName')}
            <br />
            Type: {get(this.props.sourcesOfWater, 'wellTwo[0].sourceType')} | Activity:{' '}
            {get(this.props.sourcesOfWater, 'wellTwo[0].activity')}
            <div className="small-text" style={{ marginTop: '15px' }}>
              <b>Status: </b> {get(this.props.sourcesOfWater, 'wellTwo[0].status')}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WaterSources
