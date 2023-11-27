import React, { Component } from 'react'

class ReportNotes extends Component {
  render() {
    return (
      <div className="report-notes">
        <div className="tab">
          <h5 className="lightblue">
            <b>TABLE NOTES</b>
          </h5>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className="small-text">
              <b>A.</b> Results in the Level Detected column for radiological contaminants, inorganic contaminants,
              synthetic organic contaminants including pesticides and herbicides, and volatile organic contaminants are
              the highest average at any of the sampling points or the highest detected level at any sampling point,
              depending on the sampling frequency.
            </p>
          </div>
          <div className="col-md-4">
            <p className="small-text">
              <b>B.</b> For bromate, chloramines, or chlorine, the level detected is the highest running annual average
              (RAA), computed quarterly or monthly averages of all samples collected. The range of results is the range
              of results of all the individual samples collected during the past year.
            </p>
          </div>
          <div className="col-md-4">
            <p className="small-text">
              <b>C.</b> For haloacetic acids or TTHM, the level detected is the highest RAA, computed quarterly of
              quarterly averages of all samples collected if the system is monitoring quarterly or is the average of all
              samples taken during the year if the system monitors less frequently than quarterly. Range of results is
              the range of individual samples (lowest to highest) for all monitoring locations.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReportNotes
