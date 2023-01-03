import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submail: '',
      show: false
    };
  }

  handleSubscribe = e => {
    e.preventDefault();
    const request = {
      recieverMail: 'info@lirten.com',
      body: `A potential customer with the following email wishes to subscribe Lirten \n\t Email: ${this.state.submail}\n\t Sincerly, Lirten bot`,
      subject: 'Lirten-New Newsletter Subscription'
    };
    if (this.state.submail === '') {
      this.setState({ show2: true });
    } else {
      axios
        .post('https://power-support.lirten.com/api/sendMail/send', request)
        // .post('https://cubexs.net/api/sendMail/send', request)
        .then(
          this.setState({
            show: true,
            submail: ''
          })
        )
        .then(
          setTimeout(() => {
            this.setState({ show: false });
          }, 1300)
        )
        .catch(err => console.log(err));
    }
  };
  handlesubmail = e => {
    this.setState({ submail: e.target.value });
  };
  render() {
    return (
      <footer className="pb-3 px-5 mt-4">
        <Container>
          <Row>
            <Col md={12} lg={4} className="p-0 mt-5">
              <div className="footerlogo ">
                <picture>
                  <source
                    srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/footerlogo.webp"
                    alt="logo"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/footerlogo.png"
                    alt="logo"
                    type="image/png"
                  />{' '}
                  <img src="img/creakyOldJPEG.jpg" alt="logo" />
                </picture>
              </div>
              {/* <p className=" footer-rights py-5">
                lirten all rights reserved ©2019
              </p> */}
            </Col>
            <Col md={12} lg={7} className="offset-lg-1 p-0">
              <Form>
                {' '}
                <Col sm={12} className="offset-lg-1 px-0">
                  <div className="info mb-5 mt-5">
                    <p>CONTACT INFO</p>
                    <span>
                      {' '}
                      <span style={{ color: '#D0AD5E', fontWeight: '100' }}>
                        {' '}
                        E:{' '}
                      </span>{' '}
                      info@lirten.com
                    </span>{' '}
                    <br />
                    {/* <span>
                      <span style={{ color: '#D0AD5E', fontWeight: '100' }}>
                        {' '}
                        P:{' '}
                      </span>{' '}
                      +2 01003388470
                    </span> */}
                  </div>{' '}
                  <div className=" footerform">
                    <h3 className="news">join the newsletter</h3>

                    <Form.Group controlId="formGroupEmail">
                      <Form.Control
                        noValidate
                        required
                        type="email"
                        value={this.state.submail}
                        onChange={this.handlesubmail}
                        name="email2"
                        placeholder="E-Mail"
                        className="contactForm mt-4"
                      />
                    </Form.Group>
                  </div>
                </Col>{' '}
                <Col sm={12} className="offset-lg-1">
                  <div className="formbuttons">
                    <Row>
                      <Col md={3} className="pl-0">
                        <Button
                          type="submit "
                          className="px-4 mx-0"
                          onClick={this.handleSubscribe}
                        >
                          SUBSCRIBE
                        </Button>
                      </Col>
                      <Col md={4} sm={12} className="pl-0">
                        <p>
                          TYPE IN YOUR EMAIL AND
                          <br /> SUBSCRIBE TO OUR newsletter
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>{' '}
              </Form>
            </Col>
            <Col sm={7}>
              {' '}
              <p className=" footer-rights icons mt-5">
                lirten all rights reserved © {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
          <Modal className="mt-2" show={this.state.show}>
            <div id="snackbar">Sent Successfully</div>
          </Modal>
          <Row>
            {/* <Col sm={6}>   <p className=" footer-rights py-5">
                lirten all rights reserved ©2019
              </p></Col> */}
            <Col sm={12}>
              <div className="icons">
                <a
                  href="https://www.facebook.com/LirtenSolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <i className="fab  fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/lirten-solutions-86471b19a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="https://www.twitter.com/LirtenAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab  fa-twitter-square"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <picture>
          <source
            srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/Vector10.webp"
            className="vector"
            alt="vector"
            type="image/webp"
          />
          <source
            srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/myVector1.png"
            className="vector"
            alt="vector"
            type="image/png"
          />{' '}
          <img src="img/creakyOldJPEG.jpg" className="vector" alt="vector" />
        </picture>

        <picture>
          <source
            srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/Vector9.webp"
            className="vector2"
            alt="vector2"
            type="image/webp"
          />
          <source
            srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/myVector2.png"
            className="vector2"
            alt="vector2"
            type="image/png"
          />{' '}
          <img src="img/creakyOldJPEG.jpg" className="vector2" alt="vector2" />
        </picture>
      </footer>
    );
  }
}
