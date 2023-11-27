import React, { Component } from 'react'

class TitleAndContactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // checkContactInfo = (info) => {
  //   console.log(info)
  //   if()
  // }

  componentWillMount() {
    let state = { ...this.props }
    if (state.contactInformation.length === 0 || state.contactInformation.reportFromDate === undefined) {
      state.contactInformation = {
        reportFromDate: '',
        reportToDate: '',
        contactTitle: '',
        officePhone: '',
        operatorPhone: '',
        contactWebsite: '',
        contactDescription: '',
        descriptionEnglish: '',
        descriptionSpanish: ''
      }
    }
    this.setState(state)
    // this.checkContactInfo(state.contactInformation.)
  }

  render() {
    return (
      <div className="report-title-section">
        <div className="title-info">
          <div className="row">
            <div className="col-md-auto">
              <h5>
                <b>{this.state.title.toUpperCase()}</b>
              </h5>
            </div>
            <div className="col-md-auto">
              <h5>{this.state.nameOfUtility.toUpperCase()}</h5>
            </div>
            <div className="col-md-auto">
              <h5>{this.state.nameOfReport.toUpperCase()}</h5>
            </div>
          </div>
        </div>

        {/* CONTACT AND DESCRIPTION INFORMATION SECTION */}
        {this.state.contactInformation &&
        (!this.state.contactInformation.contactOne || !this.state.contactInformation.contactTwo) ? (
          <div>
            {this.state.contactInformation.reportFromDate === '' &&
            this.state.contactInformation.reportToDate === '' ? (
              ''
            ) : (
              <div>
                <h5>
                  {this.state.contactInformation.reportFromDate.toUpperCase()} -{' '}
                  {this.state.contactInformation.reportToDate.toUpperCase()}
                </h5>
              </div>
            )}

            {this.state.contactInformation.contactTitle === '' &&
            this.state.contactInformation.officePhone === '' &&
            this.state.contactInformation.operatorPhone === '' &&
            this.state.contactInformation.contactWebsite === '' &&
            this.state.contactInformation.contactDescription === '' ? (
              <div className="contact-information">
                <div className="">
                  <b>EPA's Safe Drinking Water Hotline</b>
                  <div className="lightblue">800.426.4791</div>
                  <b className="lightblue">epa.gov/safewater/lead</b>
                </div>
              </div>
            ) : (
              <div className="contact-information">
                <div className="row">
                  <div className="col-md-6">
                    <b>{this.state.contactInformation.contactTitle}</b>
                    <div className="lightblue">
                      Office: {this.state.contactInformation.officePhone} | Operator:{' '}
                      {this.state.contactInformation.operatorPhone}
                    </div>
                    <b className="lightblue">{this.state.contactInformation.contactWebsite}</b>
                  </div>
                  <div className="col-md-6">
                    <b>EPA's Safe Drinking Water Hotline</b>
                    <div className="lightblue">800.426.4791</div>
                    <b className="lightblue">epa.gov/safewater/lead</b>
                  </div>

                  <div className="col-md-12 description small-text">
                    {this.state.contactInformation.contactDescription}
                  </div>
                </div>
              </div>
            )}

            {this.state.contactInformation.descriptionEnglish === '' &&
            this.state.contactInformation.descriptionSpanish === '' ? (
              ''
            ) : (
              <div className="row language-description">
                <div className="col-md-6 small-text">{this.state.contactInformation.descriptionEnglish}</div>
                <div className="col-md-6 spanish small-text">{this.state.contactInformation.descriptionSpanish}</div>
              </div>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default TitleAndContactInfo
