import React, { Component } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Dropdown,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ReactDatez } from "react-datez";
import "react-datez/dist/css/react-datez.css";
import isEqual from "lodash/isEqual";
import "../../stylesheets/Form.css";

class JoinusFrorm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      employed: "false",
      show: false,
      number: "",

      jobTitle: this.props.newTitle,
      name: "",
      date: "",
      degree: "",
      email: "",
      cv: "",
      position: "",
      employer: "",
      file: null,
      errName: "",
      errMail: "",

      errDegree: "",
      errPosition: "",
      errEmp: "",
      FEError: "",
      datefrom: "",
      BEError: "",
      jobError: "",
    };
  }

  setFile = (e) => {
    let file = e.target.files[0];
    this.setState({ file: file });
  };
  handleUserName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.match(/(.*[a-z]){3}/i)) {
      this.setState({ name: e.target.value });
      this.setState({ errName: "" });
    } else {
      this.setState({ errName: "name must be min 3 char" });
    }
  };

  handleDegree = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.match(/(.*[a-z]){3}/i)) {
      this.setState({ degree: e.target.value });
      this.setState({ errDegree: "" });
    } else {
      this.setState({ errDegree: "please enter valid Scientific Degree " });
    }
  };
  handleChangestartdate = (value) => {
    this.setState({ datefrom: value.split("T")[0] });
  };
  handleEmail = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({ email: e.target.value });
      this.setState({ errEmail: "" });
    } else {
      this.setState({ errEmail: "please enter valid Email " });
    }
  };

  handlePosition = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.match(/(.*[a-z]){3}/i)) {
      this.setState({ position: e.target.value });
      this.setState({ errPosition: "" });
    } else {
      this.setState({ errPosition: "please enter valid position " });
    }
  };
  handleEmployer = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.match(/(.*[a-z]){3}/i)) {
      this.setState({ employer: e.target.value });
      this.setState({ errEmp: "" });
    } else {
      this.setState({ errEmp: "please enter valid Employer " });
    }
  };

  handleItemClick = (e) => {};

  handleSelect = (eventKey) => {
    console.log(eventKey);
    this.setState({ jobTitle: eventKey, jobError: "" });
  };

  handleCheckboxChange = (e) => {
    let position = this.state.position;
    let employer = this.state.employer;
    let employed = this.state.employed;
    if (employed !== "true") {
      employed = "true";
    } else {
      employed = "false";
      position = "";
      employer = "";
    }
    this.setState({
      employed,
    });
    this.setState({
      employer,
    });
    this.setState({
      position,
    });
  };

  onRegist = async (e) => {
    e.preventDefault();
    if (this.state.jobTitle === "List of Vacancies*") {
      this.setState({ jobError: "Please select a vacancy" });
    } else if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.number === "" ||
      this.state.degree === "" ||
      this.state.file === null
    ) {
      this.setState({ FEError: "please fill out all required fields" });
    } else {
      if (
        this.state.employed == "true" &&
        (this.state.employer === "" || this.state.position === "")
      ) {
        this.setState({ FEError: "please fill out all required fields" });
      } else {
        this.setState({ FEError: "" });

        const eventdata = new FormData();

        if (this.state.employed == "true") {
          eventdata.append(
            "header",
            JSON.stringify({
              accessKey:
                "U2FsdGVkX19FLC2nYGhTl71zDYq/sB80OXD2NdrgE+BdgDo9hbRuZ3BVaDloo5Rv",
            })
          );
          eventdata.append(
            "body",
            JSON.stringify({
              receiverMail: "radwaragab119@gmail.com",
              subject: "Lirten-New Job Application",
              body:
                "A job application with the following information has been sent to Lirten \n\t Job Title: ${this.state.jobTitle}  \n\t Name: ${this.state.name}   \n\t  Scientific Degree: ${this.state.degree} \n\t Email: ${this.state.email}  \n\t Number: ${this.state.number}    \n\t Birth date: ${this.state.datefrom}\n\t  Current Position: ${this.state.position}  \n\t Current Employer: ${this.state.employer} \n\t Sincerly, Lirten bot",
            })
          );
        } else {
          eventdata.append(
            "header",
            JSON.stringify({
              accessKey:
                "U2FsdGVkX19FLC2nYGhTl71zDYq/sB80OXD2NdrgE+BdgDo9hbRuZ3BVaDloo5Rv",
            })
          );
          eventdata.append(
            "body",
            JSON.stringify({
              receiverMail: "radwaragab119@gmail.com",
              subject: "Lirten-New Job Application",
              body:
                "A job application with the following information has been sent to Lirten  \n\t Job Title: ${this.state.jobTitle}  \n\t Name: ${this.state.name}  \n\t Scientific Degree: ${this.state.degree} \n\t Email: ${this.state.email}  \n\t Number: ${this.state.number}    \n\t birth date: ${this.state.datefrom}\n\t Sincerly, Lirten bot",
            })
          );
        }
        if (this.state.file) {
          eventdata.append("file1", this.state.file);
        }

        for (var [key, value] of eventdata.entries()) {
          console.log(key, value);
        }
        axios({
          method: "post",
          data: eventdata,
          url: "https://cubexs.net/emailservice/sendemailattachment",
        })
          .then((res) => {
            console.log(res);
            if (res.data.header.statusCode === "0000") {
              console.log("ok");
              this.setState({
                show: true,
                errors: {},
                number: "",

                name: "",
                date: "",
                degree: "",
                email: "",
                cv: "",
                position: "",
                employer: "",

                errName: "",
                errMail: "",

                errDegree: "",
                errPosition: "",
                errEmp: "",
                FEError: "",
                file: "",
                datefrom: "",
              });
              setTimeout(() => {
                this.setState({ show: false });
              }, 1300);
            } else {
              console.log("no");
              this.setState({ BEError: "an error occurred please try again" });
            }
          })

          .catch((err) => {
            console.log(err);
            this.setState({ BEError: "an error occurred try again" });
          });
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevState, this.state)) {
      if (
        this.state.name !== "" &&
        this.state.number !== "" &&
        this.state.degree !== "" &&
        this.state.file !== null &&
        this.state.email !== ""
      ) {
        this.setState({ FEError: "" });
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.newTitle);
    this.setState({ jobTitle: nextProps.newTitle });
  }

  render() {
    const titles = this.props.detailsList.map((job) => {
      return (
        <Dropdown.Item
          onSelect={this.handleSelect}
          eventKey={job.jobTitle}
          style={{ color: "white" }}
        >
          {job.jobTitle}
        </Dropdown.Item>
      );
    });
    return (
      <div className="background p-5 mt-5 mb-5" style={{width: '100vw'}}>
        <Row>
          <Col sm={12} md={10}>
            <div className="contactus mb-5">
              <Container className="contactsections joinform">
                <Row>
                  <Col sm={12} md={10} md={{ offset: 3 }}>
                    <form
                      id="apply"
                      onSubmit={this.onRegist}
                      noValidate
                      className="offset-lg-1"
                    >
                      <Container>
                        {" "}
                        <p className="applyNow mb-4">APPLY NOW </p>
                        <Dropdown>
                          <Dropdown.Toggle
                            // variant="success"
                            id="dropdown-basic"
                            className="contactForm mb-4 customButton"
                          >
                            {this.state.jobTitle}
                            <i
                              class="fas fa-angle-double-down"
                              style={{ float: "right", paddingTop: "4px" }}
                            ></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>{titles}</Dropdown.Menu>
                        </Dropdown>
                        {this.state.jobError ? (
                          <span
                            style={{ fontSize: "13px" }}
                            className="errorMsg"
                          >
                            {" "}
                            {this.state.jobError}
                          </span>
                        ) : null}
                        <Form.Control
                          noValidate
                          required
                          onKeyDown={this.enter}
                          type="text"
                          onChange={this.handleUserName}
                          value={this.state.name}
                          name="name"
                          className="contactForm mb-4 nameborder fields"
                          placeholder="Full Name*"
                        />
                        {this.state.errName ? (
                          <span
                            style={{ fontSize: "13px" }}
                            className="errorMsg"
                          >
                            {" "}
                            {this.state.errName}
                          </span>
                        ) : null}
                        <ReactDatez
                          placeholder="Birth Date*"
                          name="datefrom"
                          handleChange={this.handleChangestartdate}
                          value={this.state.datefrom}
                          allowPast={true}
                          inputStyle={{
                            backgroundColor: "#060157",
                            color: "white",
                            outline: "none",
                          }}
                          className="date"
                        />
                        <div className="errorMsg">
                          {this.state.errors.birthdate}
                        </div>
                        <Form.Control
                          noValidate
                          required
                          onKeyDown={this.enter}
                          type="text"
                          onChange={this.handleDegree}
                          value={this.state.degree}
                          name="degree"
                          className="contactForm mb-4 nameborder fields"
                          placeholder="Scientific Degree*"
                        />
                        {this.state.errDegree ? (
                          <span
                            style={{ fontSize: "13px" }}
                            className="errorMsg"
                          >
                            {" "}
                            {this.state.errDegree}
                          </span>
                        ) : null}
                        <Form.Control
                          noValidate
                          required
                          type="email"
                          value={this.state.email}
                          onChange={this.handleEmail}
                          name="email"
                          placeholder="E-Mail*"
                          className="contactForm my-4 nameborder fields"
                        />{" "}
                        {this.state.errEmail ? (
                          <span
                            style={{ fontSize: "13px" }}
                            className="errorMsg"
                          >
                            {" "}
                            {this.state.errEmail}
                          </span>
                        ) : null}
                        <PhoneInput
                          country={"eg"}
                          value={this.state.number}
                          onChange={(number) => this.setState({ number })}
                          inputStyle={{
                            backgroundColor: "#060157",
                            color: "white",
                            outline: "none",
                          }}
                        />
                        <div className="my-4">
                          <div className="errorMsg">
                            {this.state.errors.number}
                          </div>
                        </div>
                        {/* <p style={{ color: "white" }} className="p-1 m-1 ">
                          Upload your CV*
                        </p> */}
                        <div className="contactForm mb-4">
                          {/* <Button
                            variant="contained"
                            component="label"
                            style={{ height: "7vh" }}
                          >
                            <input
                              onChange={this.setFile}
                              type="file"
                              style={{ color: "white", border: "none" }}
                            />
                          </Button> */}
                          <div class="upload-btn-wrapper">
                            <button
                              class="Formbtn"
                              variant="contained"
                              component="label"
                            >
                              <Row>
                                <Col sm={2}>
                                  <i class="fas fa-upload"></i>
                                </Col>
                                <Col
                                  sm={10}
                                  style={{
                                    textAlign: "left",
                                    paddingLeft: "20px",
                                  }}
                                >
                                  Click Here To Upload Your CV*
                                </Col>
                              </Row>
                            </button>
                            <input
                              onChange={this.setFile}
                              type="file"
                              style={{ color: "white", border: "none" }}
                            />
                          </div>
                          
                          { this.state.file !== null? (<p style={{ color: "white" }} className="p-1 m-1 "> {this.state.file.name}</p>):null}
                          
                        </div>
                        <div className="errorMsg">{this.state.errors.cv}</div>
                        <div key={`default-${"checkbox"}`} className="mb-3">
                          <Form.Check
                            type={"checkbox"}
                            id={`alreadyEmployed`}
                            label={`Already Employed?`}
                            style={{ color: "white" }}
                            className="my-4 "
                            onChange={this.handleCheckboxChange}
                          />
                        </div>
                        {this.state.employed !== "false" ? (
                          <div>
                            <Form.Control
                              noValidate
                              required
                              type="text"
                              value={this.state.position}
                              onChange={this.handlePosition}
                              name="position"
                              placeholder="Current Positon*"
                              className="contactForm mb-4 nameborder fields"
                            />
                            {this.state.errPosition ? (
                              <span
                                style={{ fontSize: "13px" }}
                                className="errorMsg"
                              >
                                {" "}
                                {this.state.errPosition}
                              </span>
                            ) : null}

                            <Form.Control
                              noValidate
                              required
                              type="text"
                              value={this.state.employer}
                              onChange={this.handleEmployer}
                              name="employer"
                              placeholder="Current Employer*"
                              className="contactForm mb-4 nameborder fields"
                            />
                            {this.state.errEmp ? (
                              <span
                                style={{ fontSize: "13px" }}
                                className="errorMsg"
                              >
                                {" "}
                                {this.state.errEmp}
                              </span>
                            ) : null}
                          </div>
                        ) : null}
                        <Col sm={12}>
                          <Row className="contactfields">
                            <Col sm={9}>
                              <p
                                style={{
                                  fontSize: "10px",
                                  color: "#AAA",
                                  fontWeight: "500",
                                  // position: 'absolute',
                                  left: "0",
                                }}
                              >
                                * fields marked with an asterisk (*) are
                                required to fullfil the form. failing to
                                complete any of those fields will result in a
                                failure to submit your request accompanied by a
                                failure message.
                              </p>
                            </Col>
                            <Col sm={3} className="">
                              {" "}
                              <Button type="submit" className="submitButton">
                                SUBMIT
                              </Button>
                            </Col>
                          </Row>
                          {this.state.FEError ? (
                            <span className="BbachError">
                              {" "}
                              {this.state.FEError}
                            </span>
                          ) : null}
                          {this.state.BEError ? (
                            <span className="BbachError">
                              {" "}
                              {this.state.BEError}
                            </span>
                          ) : null}
                        </Col>
                      </Container>
                    </form>
                  </Col>
                </Row>{" "}
                <Modal className="mt-2" show={this.state.show}>
                  <div id="snackbar">Sent Successfully</div>
                </Modal>
              </Container>
            </div>
          </Col>
          <Col md={2}>
            <img
              alt="dotsapproach"
              src="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/rect.svg"
              className="img-fluid topDots"
            />
            <h4 className="note">Note:</h4>
            <hr style={{ marginLeft: "-70px", width: "23px" }} />
            <p
              style={{
                color: "white",
                marginLeft: "-70px",
                width: "170px",
                fontSize: "15px",
              }}
            >
              we will be sending you an e-mail shortly with all the details we
              need to start on your next big project. if you’re in a hurry, you
              could always
            </p>
            <p
              style={{
                color: "white",
                marginLeft: "-70px",
                width: "170px",
                fontSize: "15px",
              }}
            >
              CALL US ON
            </p>
            <p
              style={{
                color: "white",
                marginLeft: "-70px",
                width: "170px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              +201123454578
            </p>
            <p
              style={{
                color: "white",
                marginLeft: "-70px",
                width: "170px",
                fontSize: "15px",
              }}
            >
              EMAIL US ON
            </p>
            <p
              style={{
                color: "white",
                marginLeft: "-70px",
                width: "170px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              INFO@LIRTEN.COM
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default JoinusFrorm;
