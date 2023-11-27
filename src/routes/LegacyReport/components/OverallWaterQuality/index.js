import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

class OverallWaterQuality extends Component {
  render() {
    const dataInorganic = {
      datasets: [
        {
          weight: 3,
          data: [16.6, 16.6, 16.6, 16.6, 16.6, 16.6],
          backgroundColor: ['#fff', '#65B1D2', '#3D99C1', '#1D87B5', '#066E9B', '#045477']
        }
      ],
      num: '2.7%'
    }
    return (
      <div className="overall-water-quality">
        <div className="row">
          <div className="col-md-6">
            <p className="small-text">
              The data collected is from the U.S. Environmental Protection Agency (EPA) required tests. These tests
              monitor for contaminants in your drinking water according to Federal and State laws, rules, and
              regulations.
            </p>
            <p className="small-text">
              As authorized and approved by the EPA, the State has reduced monitoring requirements for certain
              contaminants to less than once per year because the concentrations of these contaminants are not expected
              to vary significantly from year to year. As a result some of our data is more than one year old.
            </p>
          </div>
          <div className="col-md-6">
            <div className="quality-box">
              <div className="row">
                <div className="col-7">
                  <b>OVERALL WATER QUALITY</b>
                  <b>
                    <h3 className="lightblue">{this.props.overallWaterQuality.toUpperCase()}</h3>
                  </b>
                  <div className="small-text">{this.props.text}</div>
                </div>
                <div className="col-5">
                  <div className="center-circle"></div>
                  <div className={`needle ${this.props.overallWaterQuality}`}></div>
                  <div className="chart-rotate">
                    <Doughnut
                      data={dataInorganic}
                      options={{
                        tooltips: { enabled: false },
                        hover: { mode: null },
                        cutoutPercentage: 35,
                        elements: {
                          arc: {
                            borderWidth: 0
                          }
                        },
                        legend: {
                          display: false
                        },
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OverallWaterQuality
