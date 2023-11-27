import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Typography from 'components/Typography'

import IconLogo from 'icons/IconLogo'
import IconDisinfectant from 'icons/IconDisinfectantRaw'
import IconEye from 'icons/IconEye'
import IconCurrency from 'icons/IconCurrency'
import IconData from 'icons/IconData'
import IconLike from 'icons/IconLike'
import IconAlert from 'icons/IconErrorTriangle'
import ImagePilot from 'images/Varuna_PilotGraphic.jpg'
import ImageLaptop from 'images/Laptop_Varuna.jpg'

import './HomeCL.scss'

function HomeCL() {
  return (
    <>
      <Navbar bg="light" expand="sm" className="HomeCL-Nav bg-white border-bottom">
        <Navbar.Brand href="/">
          <IconLogo className="HomeCL__logo--top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ToggleNav" />
        <Navbar.Collapse>
          <Nav className="ml-auto mt-3 mt-sm-0 text-center">
            <Nav.Link href="https://www.varunaiot.com/about-1" target="_blank">
              ABOUT
            </Nav.Link>
            <Nav.Link href="https://www.varunaiot.com/contact-1" target="_blank">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid={true} className="HomeCL bg-white px-0">
        <section>
          <Row>
            <Col md={6}>
              <Typography as={'h2'} className="text-primary mb-md-5" gutterBottom>
                <strong className="HomeCL__large-text-wide-screen">Deliver Clean Water Efficiently</strong>
              </Typography>
              <Typography className="HomeCL__large-text-wide-screen">
                Varuna measures chlorine residual levels in real-time with sensors running data directly to a
                user-friendly dashboard, saving you time and money.
              </Typography>
              <div>
                <Button
                  className="font-weight-light HomeCL__button-first-section"
                  href="https://www.varunaiot.com/contact-1"
                  target="_blank">
                  LEARN MORE
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center mt-5 mt-lg-0">
              <img src={ImageLaptop} alt="Laptop Varuna" className="img-fluid HomeCL__Laptop" />
            </Col>
          </Row>
        </section>

        <section className="bg-primary text-white">
          <Row className="HomeCL__second-section">
            <Col xs={12} className="px-5">
              <Typography as={'h2'} className="mb-5">
                The Problems
              </Typography>
            </Col>
            <Col xs={12} lg={4} className="d-flex px-5">
              <IconDisinfectant className="HomeCL__icon" />
              <Typography>
                A chlorine disinfection process is needed to remain in compliance and provide safe drinking water.
              </Typography>
            </Col>
            <Col xs={12} lg={4} className="d-flex px-5 mt-5 mt-lg-0">
              <IconEye className="HomeCL__icon" />
              <Typography>
                There is limited visibility of water quality throughout the distribution system after it leaves the
                plant.
              </Typography>
            </Col>
            <Col xs={12} lg={4} className="d-flex px-5 mt-5 mt-lg-0">
              <IconCurrency className="HomeCL__icon" />
              <Typography>
                The process for checking chlorine residual levels is manual, inefficient, and costly.
              </Typography>
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            <Col lg={4}>
              <Typography as={'h2'} className="text-primary" gutterBottom>
                <strong>The Varuna Solution</strong>
              </Typography>
              <Typography as={'h2'} className="text-primary mb-3">
                90 Day Program
              </Typography>
              <Typography className="mb-2">
                • Installation of two nodes (sensors) placed strategically in your distribution system.
              </Typography>
              <Typography className="mb-2">
                • Digitize your chlorine residual monitoring process so you can see results in real-time.
              </Typography>
              <Typography className="mb-2">• Monitor chlorine residual levels on the Varuna dashboard</Typography>
              <Typography className="mb-2">
                • Remain in compliance, reduce expenses and increase operational efficiencies
              </Typography>
              <Button className="mt-4 font-weight-light" href="https://www.varunaiot.com/contact-1" target="_blank">
                GET PROGRAM DETAILS
              </Button>
            </Col>
            <Col lg={8} className="HomeCL__ImagePilot text-right pr-0 pl-5">
              <img src={ImagePilot} alt="Pilot Graphic" className="img-fluid" />
            </Col>
          </Row>
        </section>

        <section className="bg-primary text-white">
          <Row className="HomeCL__second-section">
            <Col xs={12} lg={4} className="px-5">
              <div className="d-flex mb-4 align-items-center">
                <IconData className="HomeCL__icon" />
                <Typography className="text-uppercase font-weight-bold HomeCL__feature">
                  Constantly Monitor Your Water System
                </Typography>
              </div>
              <Typography>
                Varuna’s system measures the chlorine residual levels of the water using sensors. The dashboard alerts
                you if contaminants are detected or predicted.
              </Typography>
            </Col>

            <Col xs={12} lg={4} className="px-5 mt-5 mt-lg-0">
              <div className="d-flex mb-4 align-items-center">
                <IconAlert className="HomeCL__icon" />
                <Typography className="text-uppercase font-weight-bold HomeCL__feature">
                  Report and Address Any Issues Detected
                </Typography>
              </div>
              <Typography>
                Varuna’s surveillance advisor monitors your system in real-time, flags potential issues, and allows you
                to report the problems immediately.
              </Typography>
            </Col>

            <Col xs={12} lg={4} className="px-5 mt-5 mt-lg-0">
              <div className="d-flex mb-4 align-items-center">
                <IconLike className="HomeCL__icon" />
                <Typography className="text-uppercase font-weight-bold HomeCL__feature">
                  Gain Peace of Mind and Save Money
                </Typography>
              </div>
              <Typography>
                Utilizing the most advanced data analytics, you can generate quality reports and manage decontaminant
                cost, saving time and money.
              </Typography>
            </Col>
          </Row>
        </section>

        <section className="bg-dark text-white">
          <div className="HomeCL__last-section mx-auto text-center">
            <Typography>
              Contact us to learn how Varuna can help optimize your operational costs and water quality.
            </Typography>
            <div className="my-3">
              <IconLogo className="HomeCL__logo--bottom" />
            </div>
            <Button className="mt-4 font-weight-light" href="https://www.varunaiot.com/contact-1" target="_blank">
              CONTACT US
            </Button>
          </div>
        </section>
      </Container>
    </>
  )
}

export default HomeCL
