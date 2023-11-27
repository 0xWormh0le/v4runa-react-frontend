import React, { Component } from 'react'

class HealthRisksAndLead extends Component {
  render() {
    return (
      <div className="health-risks-and-lead">
        <div className="row">
          <div className="col-md-6">
            <h5 className="lightblue">
              <b>HEALTH RISKS</b>
            </h5>
            <p className="small-text">
              In order to ensure that tap water is safe to drink, EPA prescribes regulations which limit the amount of
              certain contaminants in water provided by public water systems. FDA regulations establish limits for
              contaminants in bottled water which must provide the same protection for public health.
            </p>
            <p className="small-text">
              Contaminants may be found in drinking water that may cause taste, color, or odor problems. These types of
              problems are not necessarily causes for health concerns. For more information on taste, odor, and color of
              drinking water, please contact the system's business office.
            </p>
            <p className="small-text">
              You may be more vulnerable than the general population to certain microbial contaminants, such as
              Cryptosporidium, in drinking water. Infants, some elderly, or immunocompromised persons such as those
              undergoing chemotherapy for cancer; person who have undergone organ transplants; those who are undergoing
              treatment with steroids; and people with HIV/AIDS or other immune system disorders, can be particularly at
              risk from infections.{' '}
            </p>
          </div>
          <div className="col-md-6">
            <p className="small-text">
              You should seek advice about drinking water from your physician or health care providers. Additional
              guidelines on appropriate means to lessen the risk of infection by Cryptosporidium are available from the
              Safe Drinking Water Hotline (800-426-4791).
            </p>
            <h5 className="lightblue">
              <b>LEAD</b>
            </h5>
            <p className="small-text">
              If present, elevated levels of lead can cause serious health problems, especially for pregnant women and
              young children. Lead in drinking water is primarily from materials and components associated with service
              lines and home plumbing. We are responsible for providing high quality drinking water. but we cannot
              control the variety of materials used in plumbing components. When your water has been sitting for several
              hours, you can minimize the potential for lead exposure by flushing your tap for 30 seconds to 2 minutes
              before using water for drinking or cooking. If you are concerned about lead in your water, you may wish to
              have your water tested. Information on lead in drinking water, testing methods, and steps you can take to
              minimize exposure is available from the Safe Drinking Water Hotline or at
              https://ww.epa.gov/safewater/lead.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HealthRisksAndLead
