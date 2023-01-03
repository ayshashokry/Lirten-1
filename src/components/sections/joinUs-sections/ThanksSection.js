import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../stylesheets/JoinUs.css";
import vec2 from "../../../images/Rectangle_10.png";

export default class ThanksSection extends Component {
  render() {
    return (
      <div className="overall">
        <Row>
          <Col md={5}>
            <div className="offerthanks py-5"></div>
          </Col>
        </Row>
        <div className="thanksdiv">
          <Row>
            <img src={vec2} />
          </Row>
          <Row className="thanks">thank you for joining us</Row>
          </div>
      </div>
    );
  }
}
