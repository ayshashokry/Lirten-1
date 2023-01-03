import React, { Component } from 'react';
import '../../stylesheets/contact.css';
import { Container, Form, Col, Row, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      show: false,
      number: ''
    };
  }

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    const request = {
      recieverMail: 'info@lirten.com',
      body: `A potential customer with the following information wishes to communicate with Lirten \n\t Name: ${this.state.fields.username} \n\t Email: ${this.state.fields.email}  \n\t Number: ${this.state.number}  \n\t Company: ${this.state.fields.company}  \n\t Message: ${this.state.fields.message} \n\t Sincerly, Lirten bot`,
      subject: `Lirten-New Lead Inquire`
    };
    if (this.validateForm()) {
      let fields = {};
      let number = '';
      fields['username'] = '';
      fields['email'] = '';
      fields['companyname'] = '';
      fields['message'] = '';
      number = '';
      this.setState({ number: number });

      this.setState({ fields: fields });
      axios
        .post('https://power-support.lirten.com/api/sendMail/send', request)
        // .post('https://cubexs.net/api/sendMail/send', request)
        .then(
          this.setState({
            show: true
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

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    // let mynumber = this.state.number;

    if (!fields['username']) {
      formIsValid = false;
      errors['username'] = '*Please enter your username.';
    }

    if (typeof fields['username'] !== 'undefined') {
      if (
        !fields['username'].match(
          /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
        )
      ) {
        formIsValid = false;
        errors['username'] = '*Please enter alphabet characters only.';
      }
    }

    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = '*Please enter your email';
    }

    if (typeof fields['email'] !== 'undefined') {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields['email'])) {
        formIsValid = false;
        errors['email'] = '*Please enter valid email';
      }
    }

    // if (!mynumber) {
    //   formIsValid = false;
    //   errors['number'] = '*Please enter your number.';
    // }

    // if (typeof mynumber !== 'undefined') {
    //   if (!mynumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g)) {
    //     formIsValid = false;
    //     errors['number'] = '*Please enter a valid number';
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <Col sm={12} md={12}>
        <div className="contactus mb-5">
          {' '}
          <Container className="contactsections">
            <Row>
              <Col sm={12} md={12} className="ml-2">
                {' '}
                <Row>
                  <Col sm={12}>
                    {' '}
                    <h5 className="mt-4 py-5">
                      READY FOR YOUR LEAP INTO TECH?
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={8}>
                <form
                  onSubmit={this.submituserRegistrationForm}
                  noValidate
                  className="offset-lg-1"
                >
                  <Container>
                    {' '}
                    <p style={{ fontWeight: '500', fontSize: '19px' }}>
                      Get in touch!
                    </p>
                    <Form.Control
                      noValidate
                      required
                      type="text"
                      value={this.state.fields.username}
                      onChange={this.handleChange}
                      name="username"
                      placeholder="Name*"
                      className="contactForm mb-4 nameborder"
                    />
                    <div className="errorMsg">{this.state.errors.username}</div>
                    <Form.Control
                      noValidate
                      required
                      type="email"
                      value={this.state.fields.email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="E-Mail*"
                      className="contactForm my-4 nameborder"
                    />{' '}
                    <div className="errorMsg">{this.state.errors.email}</div>
                    <PhoneInput
                      country={'eg'}
                      value={this.state.number}
                      onChange={number => this.setState({ number })}
                    />
                    {/* <div className="errorMsg mt-4">
                      {this.state.errors.number}
                    </div> */}
                    <Form.Control
                      type="text"
                      noValidate
                      value={this.state.fields.companyname}
                      onChange={this.handleChange}
                      name="company"
                      placeholder="Company Name"
                      className="contactForm my-4 nameborder"
                    />{' '}
                    <Form.Control
                      placeholder="Description..."
                      as="textarea"
                      rows="4"
                      onChange={this.handleChange}
                      value={this.state.fields.message}
                      name="message"
                      type="text"
                      className="contactForm my-4 "
                    />
                    <Col sm={12}>
                      <Row className="contactfields">
                        <Col sm={9}>
                          <p
                            style={{
                              fontSize: '10px',
                              color: '#AAA',
                              fontWeight: '500',
                              // position: 'absolute',
                              left: '0'
                            }}
                          >
                            * fields marked with an asterisk (*) are required to
                            fullfil the form. failing to complete any of those
                            fields will result in a failure to submit your
                            request accompanied by a failure message.
                          </p>
                        </Col>
                        <Col sm={3}>
                          {' '}
                          <Button type="submit" className="contactButton">
                            submit
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Container>
                </form>
              </Col>
              <Col sm={12} md={3} className="mt-5 contactnote">
                <h6>note:</h6>
                <hr className="contactnote-hr" />
                <p>
                  we will be sending
                  <br className="d-none d-xl-block" /> you an e-mail{' '}
                  <br className="d-none d-xl-block" /> shortly with all{' '}
                  <br className="d-none d-xl-block" /> the details we need{' '}
                  <br className="d-none d-xl-block" /> to start on your
                  <br className="d-none d-xl-block" /> next big project. if{' '}
                  <br className="d-none d-xl-block" /> you’re in a hurry,
                  <br className="d-none d-xl-block" /> you could always{' '}
                </p>

                <p>
                  {' '}
                  e-mail us on
                  <br className="d-none d-xl-block" /> info@lirten.com
                </p>
              </Col>
            </Row>
            ​{' '}
            <Modal className="mt-2" show={this.state.show}>
              <div id="snackbar">Sent Successfully</div>
            </Modal>
          </Container>
        </div>
      </Col>
    );
  }
}

export default ContactUs;
