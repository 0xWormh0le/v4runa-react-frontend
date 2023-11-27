import React, { Component } from 'react'

class DefinitionsAndAbbreviations extends Component {
  // state = {
  //   tab: false
  // }
  //
  // handleTab = () => {
  //   this.setState({ tab: !this.state.tab })
  // }

  render() {
    return (
      <div className="definitions-and-abbreviations pagebreak">
        <div>
          <h5 className="lightblue">
            <b>DEFINITIONS AND ABBREVIATIONS</b>
          </h5>
          <p className="small-text">
            The following definitions contain scientific terms and measures, some of which may require explanation.
          </p>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="def small-text">
                <b>ACTION LEVEL</b>
                <p>
                  The concentration of a contaminant which, if exceeded, triggers treatment or other requirements which
                  a water system must follow.
                </p>
              </div>
              <div className="def small-text">
                <b>ACTION LEVEL GOAL (ALG)</b>
                <p>
                  The level of a contaminant in drinking water below which there is not known for expected risk to
                  health. ALGs allow for a margin of safety.
                </p>
              </div>
              <div className="def small-text">
                <b>AVG</b>
                <p>Regulatory compliance with some MCLs are based on running annual average of monthly samples.</p>
              </div>
              <div className="def small-text">
                <b>LEVEL 1 ASSESSMENT</b>
                <p>
                  A Level 1 assessment is a study of the water system to identify potential problems and determine (if
                  possible) why total coliform bacteria have been found in our water system.
                </p>
              </div>
              <div className="def small-text">
                <b>LEVEL 2 ASSESSMENT</b>
                <p>
                  A Level 2 assessment is a very detailed study of the water system to identify potential problems and
                  determine (if possible) why an E. coli MCL violation has occurred and/or why total coliform bacteria
                  have been found in our water system on multiple occasions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="def small-text">
                <b>MAXIMUM CONTAMINANT LEVEL (MCL)</b>
                <p>
                  The highest level of contaminant that is allowed in drinking water. MCLs are set as close to the MCLGs
                  as feasible using the best available treatment technology.
                </p>
              </div>
              <div className="def small-text">
                <b>MAXIMUM CONTAMINANT LEVEL GOAL (MCLG)</b>
                <p>
                  The level of a contaminant in drinking water below which there is no known or expected risk to health.
                  MCLGs allow for a margin of safety.
                </p>
              </div>
              <div className="def small-text">
                <b>MAXIMUM RESIDUAL DISINFECTANT LEVEL (MRDL)</b>
                <p>
                  The highest level of a disinfectant allowed in drinking water. There is convincing evidence that
                  addition of a disinfectant is necessary for control of microbial contaminants.
                </p>
              </div>
              <div className="def small-text">
                <b>MAXIMUM RESIDUAL DISINFECTANT LEVEL GOAL (MRDLG)</b>
                <p>
                  The level of a drinking water disinfectant below which there is no known or expected risk to health.
                  MRDLGs do not reflect the benefits of the use of disinfectants to control microbial contaminants.
                </p>
              </div>
              <div className="def small-text">
                <b>NA</b>
                <p>Not applicable</p>
              </div>
              <div className="def small-text">
                <b>MFL</b>
                <p>Million fibers per liter (a measure of asbestos)</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="def small-text">
                <b>mrem</b>
                <p>millirems per year (a measure of radiation absorbed by the body)</p>
              </div>
              <div className="def small-text">
                <b>NTU</b>
                <p>nephelometric turbidity units (a measure of turbidity)</p>
              </div>
              <div className="def small-text">
                <b>pCl/L</b>
                <p>picocuries per liter (a measure of radioactivity)</p>
              </div>
              <div className="def small-text">
                <b>ppb</b>
                <p>micrograms per liter or parts per billion - or one ounce in 7,350,000 gallons of water</p>
              </div>
              <div className="def small-text">
                <b>ppm</b>
                <p>milligrams per liter or parts per billion - or one ounce in 7,350,000 gallons of water</p>
              </div>
              <div className="def small-text">
                <b>pp</b>
                <p>parts per quadrillion, or picograms per liter (pg/L)</p>
              </div>
              <div className="def small-text">
                <b>ppt</b>
                <p>parts per trillion, or nanograms per liter (ng/L)</p>
              </div>
              <div className="def small-text">
                <b>TREATMENT TECHNIQUE (TT)</b>
                <p>A required process intended to reduce the level of a contaminant in drinking water.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DefinitionsAndAbbreviations
