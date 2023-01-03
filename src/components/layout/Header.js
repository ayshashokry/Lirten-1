import React, { Component } from 'react';
import '../stylesheets/header.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.scrollExplore = this.scrollExplore.bind(this);
  }

  scrollExplore = e => {
    e.preventDefault();
    this.props.handleScrollExplore();
  };
  render() {
    return (
      <div className="header">
        {' '}
        <div className="pt-5">
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
          <Link className="joinLink  px-2" to="/joinUs">
            {' '}
            <span style={{ color: '#d0ad5e', fontWeight: 'bold' }}>
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
        <div className="clearfix"></div>
        <div className="m-auto pt-3 text-center">
          {' '}
          <h1> digital made tangable</h1>
        </div>
        <Container className="title m-auto pt-4 text-center">
          <Row>
            <Col className="m-auto text-center" sm={12} md={6}>
              {' '}
              <p>
                We facilitate the technology businesses need to make better
                descisions in the technological, mobile era.
              </p>
            </Col>
          </Row>
          <Row className="buttonRow">
            <Col className="m-auto text-center" sm={12}>
              {' '}
              <Button onClick={this.scrollExplore}>explore the success</Button>
            </Col>
            {/* <Col className="m-auto text-center" sm={12}>
              {' '}
              <Button onClick={this.scrollExplore}>JOIN US</Button>
            </Col> */}
          </Row>
        </Container>
        <div className="socials">
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
    );
  }
}
