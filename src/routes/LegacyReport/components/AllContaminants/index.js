import React, { Component } from 'react'

import inorganicIcon from 'icons/legacy/ScienceIcons_InorganicCont.png'
import disinfectantsIcon from 'icons/legacy/ScienceIcons_disinfectants.png'
import leadCooperIcon from 'icons/legacy/ScienceIcons_LeadCopper.png'
import microbialIcon from 'icons/legacy/ScienceIcons_microbial.png'
import radioactiveIcon from 'icons/legacy/ScienceIcons_radioactive.png'
import pesticidesIcon from 'icons/legacy/ScienceIcons_Pesticides.png'
import organicIcon from 'icons/legacy/ScienceIcons_OrganicChemical.png'

class AllContaminants extends Component {
  render() {
    return (
      <div className="all-contaminants pagebreak">
        <h5 className="lightblue">
          <b>ALL DRINKING WATER MAY CONTAIN CONTAMINANTS</b>
        </h5>
        <p className="small-text">
          Drinking water, including bottled water, may reasonably be expected to contain at least small amounts of some
          contaminants. The presence of contaminants does not necessarily indicate that water poses a health risk. More
          information about contaminants and potential health effects can be obtained by calling the EPAs Safe Drinking
          Water Hotline at (800) 426-4791.
        </p>

        <p>Contaminants that may be present in source water include:</p>

        <div className="row">
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box yellowbackground">
                <img alt="inorganicIcon" src={inorganicIcon} style={{ left: '9px' }} />
              </div>
              <h5 className="yellow" style={{ maxWidth: '50%' }}>
                <b>INORGANIC CONTAMINANTS</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Inorganic contaminants consist of salts and metals, which can be naturally-occurring or result from urban
              storm water runoff, industrial or domestic wastewater discharges, oil and gas production, mining or
              farming.
            </div>
          </div>
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box greenbackground">
                <img alt="organicIcon" src={organicIcon} style={{ left: '9px' }} />
              </div>
              <h5 className="green" style={{ maxWidth: '50%' }}>
                <b>ORGANIC CHEMICAL CONTAMINANTS</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Synthetic and volatile organic chemicals, which are by-products of industrial processes and petroleum
              production, and can also come from gas stations, urban storm water runoff, and septic systems.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box bluebackground">
                <img alt="inorganicIcon" src={disinfectantsIcon} style={{ left: '9px' }} />
              </div>
              <h5 className="blue" style={{ maxWidth: '50%' }}>
                <b>DISINFECTANTS AND DISINFECTION BY-PRODUCTS</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Water is chloraminated for disinfection purposes, aerated to reduce sulfides and treated with
              ortho-phosphate for corrosion control.
            </div>
          </div>
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box bluegreenbackground">
                <img alt="organicIcon" src={pesticidesIcon} style={{ left: '9px', top: '2px' }} />
              </div>
              <h5 className="bluegreen" style={{ maxWidth: '50%' }}>
                <b>PESTICIDES AND HERBICIDES</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              These may come from a variety of sources such as agriculture, urban storm water runoff, and residential
              uses.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box redbackground">
                <img alt="inorganicIcon" src={leadCooperIcon} style={{ left: '9px' }} />
              </div>
              <h5 className="red" style={{ maxWidth: '50%' }}>
                <b>LEAD AND COPPER</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Lead in drinking water is primarily from materials and components associated with service lines and home
              plumbing.
            </div>
          </div>
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box darkredbackground">
                <img alt="organicIcon" src={radioactiveIcon} style={{ left: '3px' }} />
              </div>
              <h5 className="darkred" style={{ maxWidth: '50%' }}>
                <b>RADIOACTIVE CONTAMINANTS</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Can be naturally-occurring or be the result of oil and gas production and mining activities.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex' }}>
              <div className="icon-box darkbluebackground">
                <img alt="inorganicIcon" src={microbialIcon} />
              </div>
              <h5 className="darkblue" style={{ maxWidth: '50%' }}>
                <b>MICROBIAL CONTAMINANTS</b>
              </h5>
            </div>
            <div className="small-text" style={{ marginTop: '15px' }}>
              Viruses and bacteria, which may come from sewage treatment plants septic systems, agricultural livestock
              operations, and wildlife.
            </div>
          </div>
          <div className="col-md-6" style={{ marginBottom: '20px' }}></div>
        </div>
      </div>
    )
  }
}

export default AllContaminants
