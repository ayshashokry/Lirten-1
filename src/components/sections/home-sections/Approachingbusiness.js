import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import '../../stylesheets/ApproachingbusinessCSS.css';

export default class Approachingbusiness extends Component {
  render() {
    return (
      <section
        className="py-5 approachingbusiness "
        style={{ position: 'relative' }}
      >
        <img
          alt="dotsapproach"
          src="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/rect.svg"
          className="img-fluid dots"
        />

        <Container>
          <div className="pt-4  mx-auto">
            <h2 className="mb-5 py-5">
              approaching business
              <br /> problems
            </h2>
          </div>
          <Row>
            <Col md={1}>
              <p
                style={{
                  color: 'white',
                  marginBottom: '2px',
                  fontWeight: 'bold'
                }}
              >
                01
              </p>
              <hr />
            </Col>
            <Col md={9} sm={12}>
              <div className="pt-3  mx-auto  pb-5">
                <h5>analysis</h5>
                <p className="py-1" style={{ color: 'white' }}>
                  First off, we start by assessing the business problem. Think
                  of it this way, we search for what makes businesses work, then
                  see what could you improve upon your business. We use our
                  unique thought methodology to find a solution that would suit
                  your exact business need.
                </p>

                <picture>
                  <source
                    srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/approach-ines.webp"
                    alt="ApproachLines"
                    className="img-fluid mb-5"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/approaclines.jpg"
                    alt="ApproachLines"
                    className="img-fluid mb-5"
                    type="image/png"
                  />{' '}
                  <img
                    src="img/creakyOldJPEG.jpg"
                    alt="ApproachLines"
                    className="img-fluid mb-5"
                  />
                </picture>
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={1} className="sectionspace">
              <p
                style={{
                  color: 'white',
                  marginBottom: '2px',
                  fontWeight: 'bold'
                }}
              >
                02
              </p>
              <hr />
            </Col>
            <Col md={9} sm={12}>
              <div className="pt-3  mx-auto pb-5">
                <h5>design</h5>
                <Row>
                  <Col sm={12} md={7}>
                    <p className="py-1 mb-5" style={{ color: 'white' }}>
                      Since we believe that design is an integral part of any
                      business, we have partnered up with “ThePostmod” to supply
                      our clients with not only the software side, but the
                      design aspect of their business.
                    </p>
                  </Col>
                  <Col sm={12} md={5} className="px-5  py-4">
                    <picture>
                      <source
                        srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/approachingLogos.webp"
                        alt="logos"
                        className="img-fluid "
                        type="image/webp"
                      />
                      <source
                        srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/Logos.png"
                        alt="logos"
                        className="img-fluid "
                        type="image/png"
                      />{' '}
                      <img
                        src="img/creakyOldJPEG.jpg"
                        alt="logos"
                        className="img-fluid "
                      />
                    </picture>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={1} className="sectionspace">
              <p
                style={{
                  color: 'white',
                  marginBottom: '2px',
                  fontWeight: 'bold'
                }}
              >
                03
              </p>
              <hr />
            </Col>
            <Col md={9} sm={12}>
              <div className="pt-3  mx-auto pb-5">
                <h5> development</h5>

                <p className="py-1" style={{ color: 'white' }}>
                  We then take all of that design and thought and start
                  developing it into a coherent, actionable system. We develop
                  the solution either as a business, actionable plan and/or
                  software that is intuitive and easy to get into.
                </p>

                <picture>
                  <source
                    srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/approach-ines.webp"
                    className="img-fluid mb-5"
                    alt="ApproachLines"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/Logos.png"
                    className="img-fluid mb-5"
                    alt="ApproachLines"
                    type="image/png"
                  />{' '}
                  <img
                    src="img/creakyOldJPEG.jpg"
                    className="img-fluid mb-5"
                    alt="ApproachLines"
                  />
                </picture>
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
