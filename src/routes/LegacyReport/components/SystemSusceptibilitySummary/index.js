import React, { Component } from 'react'

class SystemSusceptibilitySummary extends Component {
  handleChemLevel = (chem, level) => {
    const system = this.props.systemSusceptibility
    const high =
      '"HIGH" susceptibility means there are activities near the source water and the natural conditions of the aquifer or watershed make it very likely that chemical constituents may come into contact with the source water. It does NOT mean that there are any health risks present.'
    const medium = 'MEDIUM'
    const low = 'LOW'
    if (level === 'High' || level === 'Medium' || level === 'Low') {
      if (system[chem] === 'High') {
        return high
      }
      if (system[chem] === 'Medium') {
        return medium
      }
      if (system[chem] === 'Low') {
        return low
      }
    }
  }

  handleStatus = level => {
    if (level === 'High') {
      return (
        <div className="small-text" style={{ display: 'flex' }}>
          <p>
            <b>: </b>
          </p>
          <p className="lightblue">
            {' '}
            <b>HIGH</b>
          </p>
        </div>
      )
    }
    if (level === 'Medium') {
      return (
        <div className="small-text" style={{ display: 'flex' }}>
          <p>
            <b>: </b>
          </p>
          <p className="lightblue">
            {' '}
            <b>MEDIUM</b>
          </p>
        </div>
      )
    }
    if (level === 'Low') {
      return (
        <div className="small-text" style={{ display: 'flex' }}>
          <p>
            <b>: </b>
          </p>
          <p className="lightblue">
            {' '}
            <b>LOW</b>
          </p>
        </div>
      )
    }
  }

  render() {
    const system = this.props.systemSusceptibility
    return (
      <div className="system-susceptibility-summary pagebreak">
        <h5 className="lightblue">
          <b>SYSTEM SUSCEPTIBILITY SUMMARY</b>
        </h5>
        <div className="row" style={{ marginTop: '15px' }}>
          <div className="col-md-6">
            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>ASBESTOS</b>
                </p>
                {this.handleStatus(system.asbestos)}
              </div>
              <p className="small-text">{this.handleChemLevel('asbestos', system.asbestos)}</p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>CYANIDE</b>
                </p>
                {this.handleStatus(system.cyanide)}
              </div>
              <p className="small-text">{this.handleChemLevel('cyanide', system.cyanide)}</p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>METALS</b>
                </p>
                {this.handleStatus(system.metals)}
              </div>
              <p className="small-text">{this.handleChemLevel('metals', system.metals)}</p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>MICROBIAL</b>
                </p>
                {this.handleStatus(system.microbial)}
              </div>
              <p className="small-text">{this.handleChemLevel('microbial', system.microbial)}</p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>RADIOCHEMICAL</b>
                </p>
                {this.handleStatus(system.radiochemical)}
              </div>
              <p className="small-text">{this.handleChemLevel('radiochemical', system.radiochemical)}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>SYNTHETIC ORGANIC CHEMICAL</b>
                </p>
                {this.handleStatus(system.syntheticOrganicChemical)}
              </div>
              <p className="small-text">
                {this.handleChemLevel('syntheticOrganicChemical', system.syntheticOrganicChemical)}
              </p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>DISINFECTANT BYPRODUCTS</b>
                </p>
                {this.handleStatus(system.disinfectionByproduct)}
              </div>
              <p className="small-text">
                {this.handleChemLevel('disinfectionByproduct', system.disinfectionByproduct)}
              </p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>VOLATILE ORGANIC CHEMICALS</b>
                </p>
                {this.handleStatus(system.volatileOrganicChemicals)}
              </div>
              <p className="small-text">
                {this.handleChemLevel('volatileOrganicChemicals', system.volatileOrganicChemicals)}
              </p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>DRINKING WATER CONTAMINANT</b>
                </p>
                {this.handleStatus(system.drinkingWaterContaminant)}
              </div>
              <p className="small-text">
                {this.handleChemLevel('drinkingWaterContaminant', system.drinkingWaterContaminant)}
              </p>
            </div>

            <div style={{ borderBottom: '1px solid lightgrey', padding: '10px 0 10px 0' }}>
              <div style={{ display: 'flex' }}>
                <p className="small-text">
                  <b>OTHER</b>
                </p>
                {this.handleStatus(system.other)}
              </div>
              <p className="small-text">{this.handleChemLevel('other', system.other)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SystemSusceptibilitySummary
