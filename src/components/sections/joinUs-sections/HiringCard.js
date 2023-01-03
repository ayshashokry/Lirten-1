import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Accordion,
  Badge,
  Nav,
} from "react-bootstrap";
import Moment from "react-moment";
import "../../stylesheets/JoinUs.css";
import JoinusForm from "./JoinusForm";
import vec1 from "../../../images/Vector.png";
import vec2 from "../../../images/Rectangle_8.png";
import vec3 from "../../../images/Vector_2.png";
import vec4 from "../../../images/Rectangle_h.png";
import vec5 from "../../../images/Vector_1.png";

export default class HiringCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      linkText: "more info",
    };
    this.getTitle = this.getTitle.bind(this);
  }
  getTitle = (e) => {
    console.log(e.target.title);
    // this.setState({ title: e.target.id });
    this.props.getTitle(e.target.title);
    this.props.handleapply();
  };

  handleClick = (e) => {
    let linkText;
    this.state.linkText == "more info"
      ? (linkText = "less info")
      : (linkText = "more info");
    this.setState({
      linkText,
    });
  };

  render() {
    const description = this.props.list.jobDesc.map((ell) => (
      <Row>
        <div>
          {" "}
          <img style={{ width: "9px" }} src={vec3} />{" "}
        </div>
        <Col className="p-0 ml-1">
          <ul className="listing">{ell}</ul>{" "}
        </Col>
      </Row>
    ));
    const tech = this.props.list.requirementsTech.map((ell) => (
      <Row>
        <div>
          {" "}
          <img style={{ width: "9px" }} src={vec1} />{" "}
        </div>
        <Col className="p-0 ml-1">
          <ul className="listing">{ell}</ul>{" "}
        </Col>
      </Row>
    ));

    const personal = this.props.list.requirementsPersonal.map((ell) => (
      <Row>
        <div>
          {" "}
          <img style={{ width: "9px" }} src={vec3} />{" "}
        </div>
        <Col className="p-0 ml-1">
          <ul className="listing">{ell}</ul>{" "}
        </Col>
      </Row>
    ));
    const linkbody =
      this.state.linkText == "more info" ? (
        <>
          <div className="mr-2 pt-1">{this.state.linkText}</div>

          <div className="pt-2 pr-1">
            {" "}
            <img style={{ width: "7px" }} src={vec1} />{" "}
          </div>
          <div className="pt-1 pr-1">
            {" "}
            <img style={{ width: "22px" }} src={vec2} />{" "}
          </div>
          <div>
            {" "}
            <img style={{ width: "7px" }} src={vec1} />{" "}
          </div>
        </>
      ) : (
        <>
          <div className="mr-2 pt-1 mt-3 ml-5">{this.state.linkText}</div>

          <div>
            <div>
              <img style={{ width: "7px" }} src={vec5} />{" "}
            </div>
            <div className="ml-1 ">
              {" "}
              <img style={{ height: "23px" }} src={vec4} />{" "}
            </div>
            <div className="ml-1">
              {" "}
              <img style={{ width: "7px" }} src={vec5} />{" "}
            </div>
          </div>
        </>
      );

    const cardbody =
      this.state.linkText == "more info" ? (
        <>
          <Row>
            <Col sm={12} md={12} lg={10}>
              <Row>
                <div className="jobTitle">
                  <div className="mr-1">
                    {" "}
                    <img style={{ width: "9px" }} src={vec1} />{" "}
                  </div>
                  {this.props.list.jobTitle.toLowerCase()} &nbsp;
                </div>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={2} className="postedOn">
              <div>
                {" "}
                <svg
                  class="bi bi-clock"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                &nbsp;
                <Moment fromNow>{this.props.list.date}</Moment>
              </div>
            </Col>
          </Row>
          <div className="cardTextBody">
            <Row className="positioning">
              <Col sm={12} md={8} lg={9}>
                <Row className="positioning2">
                  <div>{this.props.list.about.toLowerCase()}</div>
                </Row>
                <Row>
                  {this.props.list.careerLevel &&
                  this.props.list.careerLevel.match(/(.*[a-z]){1}/i) ? (
                    <Col sm={12} md={5}>
                      <Row className="positioning2">
                        <p className="mobile2"> career level:&nbsp; </p>
                        <div>
                          {" "}
                          {this.props.list.careerLevel.toLowerCase()} &nbsp;
                        </div>
                      </Row>
                    </Col>
                  ) : null}
                  {this.props.list.experience &&
                  this.props.list.experience.match(/(.*[a-z]){1}/i) ? (
                    <Col sm={12} md={5}>
                      <Row className="positioning2">
                        <p className="mobile2"> experience needed:&nbsp; </p>
                        <div>
                          {" "}
                          {this.props.list.experience.toLowerCase()} &nbsp;{" "}
                        </div>
                      </Row>
                    </Col>
                  ) : null}
                </Row>

                <Row>
                  {this.props.list.deadline ? (
                    <Col sm={12} md={5}>
                      <Row className="positioning2">
                        <p className="mobile2">deadline: &nbsp; </p>
                        <Moment format="MMM Do YYYY">
                          {this.props.list.deadline}
                        </Moment>
                      </Row>
                    </Col>
                  ) : null}
                  {this.props.list.jobType &&
                  this.props.list.jobType.match(/(.*[a-z]){1}/i) ? (
                    <Col sm={12} md={7}>
                      <Row className="positioning2">
                        <p className="mobile2">job type: &nbsp; </p>
                        <div>
                          {this.props.list.jobType.toLowerCase()} &nbsp;
                        </div>
                      </Row>
                    </Col>
                  ) : null}
                </Row>
                <Row></Row>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={9} lg={10}>
                &nbsp;
              </Col>
              <Col sm={12} md={3} lg={2}></Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <Row>
            <Col sm={12} md={12} lg={10}>
              <Row>
                <div className="jobTitle">
                  {this.props.list.jobTitle.toLowerCase()} &nbsp;
                </div>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={2} className="postedOn">
              <div>
                {" "}
                <svg
                  class="bi bi-clock"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                &nbsp;
                <Moment fromNow>{this.props.list.date}</Moment>
              </div>
            </Col>
          </Row>
          <div className="cardTextBody">
            <ListGroup>
              {this.props.list.about &&
              this.props.list.about.match(/(.*[a-z]){1}/i) ? (
                <ListGroup.Item>
                  <Row className="positioning22  positioning_bottom2">
                    <Col sm={12} md={2} className="mobile mr-4">
                      about:
                    </Col>
                    <Col sm={12} md={9}>
                      <Row>
                        <div>
                          {" "}
                          <img style={{ width: "9px" }} src={vec3} />{" "}
                        </div>
                        <Col className="p-0 ml-1">
                          {" "}
                          {this.props.list.about.toLowerCase()}{" "}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ) : null}
              <ListGroup.Item>
                <Row>
                  <Col sm={12} md={5}>
                    {this.props.list.careerLevel &&
                    this.props.list.careerLevel.match(/(.*[a-z]){1}/i) ? (
                      <Row className="positioning2 ">
                        <Col sm={12} md={6} className="mobile">
                          career level:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <div className="mr-1">
                              {" "}
                              <img style={{ width: "9px" }} src={vec1} />{" "}
                            </div>
                            {this.props.list.careerLevel.toLowerCase()}
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                    {this.props.list.deadline ? (
                      <Row className="positioning22  positioning_bottom2">
                        <Col sm={12} md={6} className="mobile">
                          deadline:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <div className="mr-1">
                              {" "}
                              <img style={{ width: "9px" }} src={vec3} />{" "}
                            </div>
                            <Moment format="MMM Do YYYY">
                              {this.props.list.deadline}
                            </Moment>
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                    {this.props.list.joinDate &&
                    this.props.list.joinDate.match(/(.*[a-z]){1}/i) ? (
                      <Row className="positioning22  positioning_bottom2">
                        <Col sm={12} md={6} className="mobile">
                          expected join date:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <div className="mr-1">
                              {" "}
                              <img style={{ width: "9px" }} src={vec1} />{" "}
                            </div>
                            {this.props.list.joinDate.toLowerCase()}
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                  </Col>
                  <Col sm={0} md={1} className="positioning22 p-0">
                    <div>
                      <div>
                        <img style={{ width: "12px" }} src={vec5} />{" "}
                      </div>
                      <div className="ml-2 mt-2">
                        {" "}
                        <img style={{ height: "38px" }} src={vec4} />{" "}
                      </div>
                      <div className="ml-2 mt-2">
                        {" "}
                        <img style={{ width: "12px" }} src={vec5} />{" "}
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    {this.props.list.experience &&
                    this.props.list.experience.match(/(.*[a-z]){1}/i) ? (
                      <Row className="positioning2">
                        <Col sm={12} md={6} className="mobile">
                          experience needed:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <div className="mr-1">
                              {" "}
                              <img style={{ width: "9px" }} src={vec1} />{" "}
                            </div>
                            {this.props.list.experience.toLowerCase()}
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                    {this.props.list.jobType &&
                    this.props.list.jobType.match(/(.*[a-z]){1}/i) ? (
                      <Row className="positioning22  positioning_bottom2">
                        <Col sm={12} md={6} className="mobile">
                          job type:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <Col sm={0} md={1} className="p-0">
                              <div className="mr-1">
                                {" "}
                                <img style={{ width: "9px" }} src={vec3} />{" "}
                              </div>
                            </Col>
                            <Col sm={12} md={11} className="p-0">
                              {this.props.list.jobType.toLowerCase()}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                    {this.props.list.degree &&
                    this.props.list.degree.match(/(.*[a-z]){1}/i) ? (
                      <Row className="positioning22  positioning_bottom2">
                        <Col sm={12} md={6} className="mobile">
                          preferred degree:
                        </Col>
                        <Col sm={12} md={6}>
                          <Row>
                            <Col sm={0} md={1} className="p-0">
                              <div className="mr-1">
                                {" "}
                                <img style={{ width: "9px" }} src={vec1} />{" "}
                              </div>
                            </Col>
                            <Col sm={12} md={11} className="p-0">
                              {this.props.list.degree.toLowerCase()}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    ) : null}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {this.props.list.jobDesc && this.props.list.jobDesc !== [] ? (
                  <Row className="positioning22  positioning_bottom2">
                    <Col sm={12} md={2} className="mobile mr-4">
                      job description:
                    </Col>
                    <Col sm={12} md={9}>
                      {description}
                    </Col>
                  </Row>
                ) : null}
                {this.props.list.requirementsTech &&
                this.props.list.requirementsTech !== [] ? (
                  <Row>
                    <Col sm={12} md={2} className="mobile mr-4">
                      technical skills:
                    </Col>
                    <Col sm={12} md={9}>
                      {tech}
                    </Col>
                  </Row>
                ) : null}

                {this.props.list.requirementsPersonal &&
                this.props.list.requirementsPersonal !== [] ? (
                  <Row className="positioning22  positioning_bottom2">
                    <Col sm={12} md={2} className="mobile mr-4">
                      personal skills:
                    </Col>
                    <Col sm={12} md={9}>
                      {personal}
                    </Col>
                  </Row>
                ) : null}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </>
      );
    return (
      <div>
        <Container>
          <Row>
            {/* <Accordion className="joinuscard" > */}
            <Card className="joinuscard m-3">
              <Card.Body>
                {cardbody}
                <Row>
                  <Col sm={12} md={2} lg={2} className="mr-4">
                    &nbsp;
                  </Col>
                  <Col sm={12} md={6} lg={7} className="mr-4">
                    {this.state.linkText == "less info" ? (
                      <Button
                        className="applyButton"
                        onClick={this.getTitle}
                        title={this.props.list.jobTitle}
                      >
                        Apply Now
                      </Button>
                    ) : null}
                  </Col>
                  <Col sm={12} md={3} lg={2} className="linkText">
                    <Link onClick={this.handleClick} className="linkText">
                      {linkbody}
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
              {/* <Accordion.Collapse eventKey="0">
                  <div></div>
                </Accordion.Collapse> */}
            </Card>
            {/* </Accordion> */}
          </Row>
        </Container>
      </div>
    );
  }
}
