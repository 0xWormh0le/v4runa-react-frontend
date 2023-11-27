import React, { Component } from 'react'

class AdditionalHealthInformation extends Component {
  state = {
    tab: false
  }

  handleTab = () => {
    this.setState({ tab: !this.state.tab })
  }

  render() {
    return (
      <div className="additional-health-information">
        <div
          className="tab"
          onClick={() => {
            this.handleTab()
          }}>
          <i className="material-icons print-disappear">
            {this.state.tab ? 'keyboard_arrow_down' : 'keyboard_arrow_left'}
          </i>
          <h6>ADDITIONAL HEALTH INFORMATION</h6>
        </div>
        {this.state.tab ? (
          <div className="content">
            <p>{this.props.info}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default AdditionalHealthInformation
