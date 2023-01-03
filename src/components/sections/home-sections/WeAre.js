import React, { Component } from 'react';
import '../../stylesheets/we.css';
import { Container,Col } from 'react-bootstrap';
export default class WeAre extends Component {
  render() {
    return (
      <Container>
        {' '}
      
        <Col sm={12} lg={8} className="float-right who py-5">
          <h5 className="pb-3">WE ARE LIRTEN</h5>
          <p className="lineholder pt-2">
            {' '}
            Lirten empowers businesses to break into the digital age through
            providing professional software solutions.
          </p>
        </Col>
      </Container>
    );
  }
}
