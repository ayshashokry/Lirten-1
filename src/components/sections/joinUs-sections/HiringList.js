import React, { Component } from "react";
import HiringCard from "./HiringCard";
import JoinusFrorm from "./JoinusForm";
import { Col, Row } from "react-bootstrap";

const { vacancies } = require("../../../data/vacancies");
export default class HiringList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsList: vacancies,
      newTitle: "List of Vacancies*",
      display: "",
      fixNav: "py-5  fix-nav float-left  col-lg-3 fix",
    };
    this.applybtn = React.createRef();
  }
  handleapply = (e) => {
    const applybtn = this.applybtn.current;
    window.scrollTo({
      top: applybtn.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  getTitle = (e) => {
    setTimeout(() => {
      this.setState({ newTitle: e });
    }, 0);
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            {this.state.detailsList.map(function (list) {
              return (
                <HiringCard
                  handleapply={this.handleapply}
                  getTitle={this.getTitle}
                  list={list}
                />
              );
            }, this)}
          </Col>
        </Row>
        <div ref={this.applybtn}>
          <JoinusFrorm
            newTitle={this.state.newTitle}
            detailsList={this.state.detailsList}
          />
        </div>
      </div>
    );
  }
}
