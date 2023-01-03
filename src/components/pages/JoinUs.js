import React, { Component } from "react";
import ThanksSection from "../sections/joinUs-sections/ThanksSection";
import "../stylesheets/JoinUs.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HiringCard from "../sections/joinUs-sections/HiringCard";
import JoinusFrorm from "../sections/joinUs-sections/JoinusForm";
const { vacancies } = require("../../data/vacancies");
export default class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsList: vacancies,
      newTitle: "List of Vacancies*",
      display: "",
      fixNav: "py-5  fix-nav float-left  col-lg-3 fix",
    };
    this.headerend = React.createRef();
    this.thanknote = React.createRef();
    this.line = React.createRef();
    this.sticky = React.createRef();
    this.list = React.createRef();
    this.applybtn = React.createRef();
    this.first = React.createRef();
    this.second = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.path === "/joinUs") {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.fix);
    } else {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("scroll", this.fix);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.fix);
  }

  fix = (e) => {
    console.log(this.sticky.current.offsetTop);
    if (
      window.pageYOffset > this.headerend.current.offsetTop &&
      window.pageYOffset + 0.5 * window.innerHeight <
        this.thanknote.current.offsetTop
    ) {
      this.setState({ fixNav: "py-5  fix-nav float-left  col-lg-0 fix" });
      this.sticky.current.className = this.state.fixNav;
    } else if (
      window.pageYOffset + 0.5 * window.innerHeight >=
      this.thanknote.current.offsetTop
    ) {
      this.sticky.current.className = "disappear";
    } else {
      this.sticky.current.classList = " py-5  fix-nav float-left  col-lg-4 ";
    }
  };
  handlelist = (e) => {
    const list = this.list.current;
    window.scrollTo({
      top: list.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };
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
  handleScroll = (e) => {
    if (
      window.pageYOffset >= this.list.current.offsetTop &&
      window.pageYOffset < this.applybtn.current.offsetTop
    ) {
      this.line.current.classList = "lineblue";
      this.first.current.classList = "blue";
      this.second.current.classList = "gray";
    } else if (window.pageYOffset >= this.applybtn.current.offsetTop) {
      this.line.current.classList = "linewhite";
      this.second.current.classList = "white";

      this.first.current.classList = "gray";
    }
  };
  render() {
    return (
      <div className= "adjusting">
        <div className="join">
          {' '}
          <div className="pt-5">
            <div className="logo">
              {' '}
              <picture>
                <source
                  srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/headerlogo.webp"
                  alt="lirtenHeader"
                  type="image/webp"
                />
                <source
                  srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/logo.png"
                  alt="lirtenHeader"
                  type="image/png"
                />{' '}
                <img src="img/creakyOldJPEG.jpg" alt="lirtenHeader" />
              </picture>{' '}
            </div>
            <Link className="homeLink px-2" to="/">
              {" "}
              <span>Home</span>
            </Link>
            <Link className="joinLink mobileposonly px-2" to="/joinUs">
              {" "}
              <span style={{ color: "#d0ad5e", fontWeight: "bold" }}>
                JOIN OUR TEAM
              </span>
            </Link>
            {/* <span
            className="px-5"
            style={{ color: '#d0ad5e', fontWeight: 'bold', float: 'right' }}
          >
            JOIN OUR TEAM
          </span> */}
          </div>
          {/* <div className="clearfix"></div> */}
          <div className="m-auto pt-3 text-center">
            {' '}
            <h1> JOIN OUR TEAM!</h1>
          </div>
          <Container className="title m-auto pt-4 text-center">
            <Row>
              <Col className="m-auto text-center" sm={12} md={6}>
                {' '}
                <p>
                  To have a great team,all comes down to having people who
                  understand each other and work well together.
                </p>
              </Col>
            </Row>
            <Row className="buttonRow">
              <Col className="m-auto text-center" sm={12}>
                {' '}
                <Button
                  onClick={this.handlelist}
                  style={{ backgroundColor: '#060067', width: '150px' }}
                  className="joinbtn"
                >
                  JOIN NOW
                </Button>
              </Col>
              {/* <Col className="m-auto text-center" sm={12}>
              {' '}
              <Button onClick={this.scrollExplore}>JOIN US</Button>
            </Col> */}
            </Row>
          </Container>
          <div className="socialmedia">
            {' '}
            <a
              href="https://www.facebook.com/LirtenSolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-facebook-square pr-2"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lirten-solutions-86471b19a"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-linkedin pr-2"></i>
            </a>
            <a
              href="https://www.twitter.com/LirtenAgency"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="offers py-5" ref={this.headerend}></div>
        <Container>
          <Row>
            <Col md={4} className= "mobilepos">
              <div className="d-none d-lg-block stickynavbtn">
                <div
                  className="  py-5 float-left col-lg-4"
                  ref={this.sticky}
                  style={{ zIndex: "999" }}
                >
                  <div>
                    <button onClick={this.handlelist} className="text-right">
                      {" "}
                      <p
                        ref={this.first}
                        className="blue text-right"
                        style={{ textTransform: "uppercase" }}
                      >
                        {" "}
                        <br />
                        Vacancies
                      </p>{" "}
                    </button>
                    <br />
                    <button onClick={this.handleapply} className="text-right">
                      <p ref={this.second} className="gray">
                        {" "}
                        <br />
                        Apply Now
                      </p>
                    </button>
                    <span className="lineblue" ref={this.line}></span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} ref={this.list}>
              <h2 className="text1">CURRENT JOBS AT LIRTEN:</h2>
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
        </Container>
        <div ref={this.applybtn}>
          <JoinusFrorm
            newTitle={this.state.newTitle}
            detailsList={this.state.detailsList}
          />
        </div>
        <div ref={this.thanknote}>
          <ThanksSection />
        </div>
      </div>
    );
  }
}
