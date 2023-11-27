import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Motion, spring } from 'react-motion'

import collaborationIcon from 'icons/legacy/Varuna_Collaboration.png'
import educationIcon from 'icons/legacy/Varuna_Education.png'
import ratesIcon from 'icons/legacy/Varuna_Rates.png'
import desktop from 'icons/legacy/desktop.png'
import oldMonitor from 'icons/legacy/old-mac.png'

import oldReport from 'icons/legacy/old-ccr.png'
import newReport from 'icons/legacy/new-design.png'

import './Landing.scss'

class Landing extends Component {
  render() {
    return (
      <div style={{ height: '89vh' }} className="">
        <div className="hero">
          <div className="compare">
            <div className="background-landing">
              <div className="background-filter">
                <h5
                  className="d-flex justify-content-center"
                  style={{
                    lineHeight: '30px',
                    color: 'white',
                    marginTop: '50px',
                    fontWeight: '300',
                    textAlign: 'center'
                  }}>
                  Convert your old CCR into a more modern and interactive CCR with Varuna{' '}
                </h5>

                <h5
                  className="d-flex justify-content-center"
                  style={{ lineHeight: '30px', color: 'white', fontWeight: '300', textAlign: 'center' }}>
                  <b>THE ONE SOURCE OF TRUTH FOR WATER UTILITIES.</b>
                </h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Motion defaultStyle={{ x: -35, o: 0 }} style={{ x: spring(0), o: spring(1, { stiffness: 30 }) }}>
                {value => (
                  <div
                    className="old-monitor center"
                    style={{ position: 'relative', top: value.x, opacity: value.o, zIndex: '10' }}>
                    <div className="frame">
                      <img alt="oldMonitor" src={oldMonitor} />
                      <img alt="report" className="report" src={oldReport} />
                    </div>
                  </div>
                )}
              </Motion>
            </div>

            <div className="arrow-box">
              <i className="material-icons">arrow_forward</i>
            </div>

            <div className="col-lg-6">
              <Motion defaultStyle={{ x: -35, o: 0 }} style={{ x: spring(0), o: spring(1, { stiffness: 30 }) }}>
                {value => (
                  <div
                    className="desktop center"
                    style={{ position: 'relative', top: value.x, opacity: value.o, zIndex: '10' }}>
                    <div className="frame">
                      <img alt="desktop" src={desktop} />
                      <img alt="newReport" className="report" src={newReport} />
                    </div>
                  </div>
                )}
              </Motion>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center" style={{ marginTop: '20px', marginBottom: '50px' }}>
          <Link
            to="/report/example@example.com/5d0242be1b2413e34c2c4681"
            className="lighten-1 waves-effect waves-light btn white-text"
            style={{ marginBottom: '20px', background: 'rgb(0, 153, 219)' }}>
            See it in action
          </Link>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <img alt="collaborationIcon" src={collaborationIcon} style={{ height: '130px' }} />
              <h6>
                <b>Stakeholder Engagement</b>
              </h6>
              <p>
                Leverage the iCCR and it's sharing capabilities, to educate customers, water boards, dcision-makers,
                youth, media, etc., on the current state of water quality
              </p>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <img alt="eductionIcon" src={educationIcon} style={{ height: '130px' }} />
              <h6>
                <b>Customer Perception</b>
              </h6>
              <p>
                Inform you customers about what it takes to deliver potable water and toxicology facts. Control the
                message proactively and equip officials with taking informed talking points.
              </p>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <img alt="ratesIcon" src={ratesIcon} style={{ height: '130px' }} />
              <h6>
                <b>Rate and System Awareness</b>
              </h6>
              <p>
                Allow stakeholders to simulate the interplay between conservation efforts, quality, infrastructure
                upgrades and local rates.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-center">
            <Link
              to="/contact"
              style={{ background: 'rgb(0, 153, 219)', marginBottom: '60px' }}
              className="waves-effect waves-light btn">
              Contact Us
            </Link>
          </div>
          <div className="why">
            <h5 style={{ color: 'black', fontWeight: '300' }}>
              <b>Why an Interactive CCR (iCCR)?</b> The interactive CCR enables the public works or utitlity to
              communicate with all stakeholders (consumers, water board, employees, press etc) in a way that moves from
              speaking in a language that the average person does not understand while also delivering the message about
              the hard work the utility does to maintain potable water.
            </h5>
            <br />
            <h5 style={{ color: 'black', fontWeight: '300' }}>
              The iCCR can be updated as often as the utility team desires, especially in times of 'temporary system or
              water change'. See a sample iCCR here
            </h5>
          </div>

          <div className="d-flex justify-content-center">
            <a
              href="https://presentations.yesware.com/2b07c3b35ad65da54579288bd3e6796a8ee9d39e/9d32a8f2f41f7de7dcb73fe5a5bec663/39944ad55cc228965009a06c785cfcb1"
              style={{ background: 'rgb(0, 153, 219)', marginTop: '60px' }}
              className="waves-effect waves-light btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="product-info2 center-align ">
          <div className="info">
            <div
              className="bottom right"
              style={{ width: '100%', marginBottom: '-20px', textAlign: 'right', paddingRight: '15px' }}>
              <p className="small-text" style={{ color: 'white', position: 'absolute', right: '15px', bottom: '0' }}>
                Copyright ©{' '}
                <a style={{ color: 'white' }} href="https://www.varunaiot.com">
                  Varuna Tech Inc
                </a>
                , 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing
