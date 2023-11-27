import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

import './Contact.scss'

class Contact extends Component {
  render() {
    return (
      <div style={{ height: '89vh' }} className="container" id="contact">
        <h4 className="lightblue">
          <b>Contact Us</b>
        </h4>

        <form className="" id="gform" method="POST" action="https://formspree.io/seyi@varunaiot.com">
          {/* <input type="hidden" name="_next" value="/" /> */}

          {/* <div className="col-md-6 col-sm-12">
              <input id="full_name" type="text" name='fullName' />
              <label htmlFor="full_name">Full Name</label>
            </div> */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="full_name" type="text" name="fullName" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" name="email" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="textarea1">Message</label>
            <textarea id="textarea1" type="text" className="form-control" name="message"></textarea>
          </div>

          <div className="text-right mt-3">
            <Button variant="primary" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
