import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../stylesheets/ProjectsCarouselCSS.css';
import { Row, Container, Col } from 'react-bootstrap';
export default class ProjectsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      white: true
    };
  }
  changeColor() {
    this.setState({ white: !this.state.white });
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };

    return (
      <div style={{ zIndex: '9999999' }}>
        <Slider {...settings}>
          <div className="slide1Item">
            <div className="slide1Img"></div>

            <picture>
              <source
                srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/carouselline.webp"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/webp"
              />
              <source
                srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/carouselline.png"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                alt="slide1"
                className="img-fluid carouselline"
              />
            </picture>

            <p
              onClick={this.changeColor.bind(this)}
              className={
                'firstlineheader ' +
                (this.state.white ? 'caroutitleblue' : 'caroutitlewhite')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              trust house <br /> constructions
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'secondlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              bobian for <br /> elevator tech.
            </p>
            {/* <p
              onClick={this.changeColor.bind(this)}
              className={
                'thirdlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Dawoody
              <br /> custom <br /> clearance
            </p> */}
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fourthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              The business <br /> hub
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fifthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Locket <br /> digital wallet
            </p>
            <Container>
              <Col sm={12} className="offset-lg-1">
                {' '}
                <h2
                  className="myTitle"
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    paddingTop: '3%',
                    textTransform: 'uppercase'
                  }}
                >
                  projects that amaze
                </h2>
                <div className="slidecaption1">
                  <h2>trust house </h2>
                  <h2>contracting</h2>
                  <h5>
                    crm <br /> web design/development
                  </h5>
                  <Row>
                    <Col sm={12} md={9}>
                      <p>
                        Trust House is a contracting firm located in Kuwait
                        focusing on providing their clients with high quality
                        housing in an easy to find manner.
                      </p>
                      <p className="d-none d-md-block">
                        {' '}
                        They reached out with a big challenge, they wanted to
                        launch their own property finding platform as well as a
                        way to assist them in finding more of their target in a
                        more modern way. We decided to provide them with all
                        their needs from a full CRM, and in assistance with
                        ThePostMod, a strong brand website as well as their new
                        property finding platform.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Container>
          </div>
          <div className="slide1Item">
            <div className="slide2Img"></div>{' '}
            <picture>
              <source
                srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/carouselline.webp"
                alt="slide2"
                className="img-fluid carouselline"
                type="image/webp"
              />
              <source
                srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/carouselline.png"
                alt="slide2"
                className="img-fluid carouselline"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                alt="slide2"
                className="img-fluid carouselline"
              />
            </picture>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'firstlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              trust house <br /> constructions
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'secondlineheader ' +
                (this.state.white ? 'caroutitleblue' : 'caroutitlewhite')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              bobian for <br /> elevator tech.
            </p>
            {/* <p
              onClick={this.changeColor.bind(this)}
              className={
                'thirdlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Dawoody
              <br /> custom <br /> clearance
            </p> */}
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fourthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              The business <br /> hub
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fifthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Locket <br /> digital wallet
            </p>
            <Container>
              <Row>
                <Col sm={12} className="offset-lg-1">
                  {' '}
                  <h2
                    className="myTitle"
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      paddingTop: '35px',
                      textTransform: 'uppercase'
                    }}
                  >
                    projects that amaze
                  </h2>
                  <div className="slidecaption1">
                    {' '}
                    <h2>Bobian for elevator </h2>
                    <h2> technology</h2>
                    <h5>
                      erp (Enterprise resource planning) <br /> web
                      design/development
                    </h5>
                    <Row>
                      <Col sm={12} md={9}>
                        <p>
                          Bobian for Elevators and Escalators Technology is a
                          fully owned Kuwaiti Company established in Kuwait in
                          2007. Primarily Bobian aims to supply all its
                          customers with the best of quality as well as pre and
                          post-sale services.
                        </p>
                        <p className="d-none d-md-block">
                          {' '}
                          They reached out because they are going through a huge
                          growth phase. Lirten provided them with the tools they
                          needed to grow further into the digital age by
                          providing an ERP system as well as a new, modern
                          looking website to suit their needs.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className="slide1Item">
            <div className="slide3Img"></div>{' '}
            <img
              alt="slide3"
              className="img-fluid carouselline"
              src="https://lirtenwebsite.s3.me-south-1.amazonaws.com/carouselline.webp"
            />{' '}
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'firstlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              trust house <br /> constructions
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'secondlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              bobian for <br /> elevator tech.
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'thirdlineheader ' +
                (this.state.white ? 'caroutitleblue' : 'caroutitlewhite')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Dawoody
              <br /> custom <br /> clearance
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fourthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              The business <br /> hub
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fifthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Locket <br /> digital wallet
            </p>
            <Container>
              <Row>
                <Col sm={12} className="offset-lg-1">
                  {' '}
                  <h2
                    className="myTitle"
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      paddingTop: '35px',
                      textTransform: 'uppercase'
                    }}
                  >
                    projects that amaze
                  </h2>
                  <div className="slidecaption1">
                    {' '}
                    <h2>dawody for custom </h2>
                    <h2> clearance and logistics</h2>
                    <h5>web design/development</h5>
                    <Row>
                      <Col sm={12} md={9}>
                        <p>
                          Al Dawoody is a custom clearance and logistics firm
                          located in Port Said and Mansoura, Egypt. They focus
                          on making import and export custom clearance an easy
                          task for their respective clients.
                        </p>
                        <p className="d-none d-md-block">
                          {' '}
                          Since Al Dawoody is a reputable and established firm,
                          they mostly disregarded the website in favor of their
                          strong word of mouth. But due to changes in the market
                          they reached out to Lirten to help them with their
                          digital presence. In assistance with ThePostMod, we’ve
                          provided Al Dawoody with a strong website reminisent
                          of their history but still forward looking.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div> */}
          <div className="slide1Item">
            <div className="slide4Img"></div>{' '}
            <picture>
              <source
                srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/carouselline.webp"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/webp"
              />
              <source
                srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/carouselline.png"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                alt="slide1"
                className="img-fluid carouselline"
              />
            </picture>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'firstlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              trust house <br /> constructions
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'secondlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              bobian for <br /> elevator tech.
            </p>
            {/* <p
              onClick={this.changeColor.bind(this)}
              className={
                'thirdlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Dawoody
              <br /> custom <br /> clearance
            </p> */}
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fourthlineheader ' +
                (this.state.white ? 'caroutitleblue' : 'caroutitlewhite')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              The business <br /> hub
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fifthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Locket <br /> digital wallet
            </p>
            <Container>
              <Row>
                <Col sm={12} className="offset-lg-1">
                  {' '}
                  <h2
                    className="myTitle"
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      paddingTop: '35px',
                      textTransform: 'uppercase'
                    }}
                  >
                    projects that amaze
                  </h2>
                  <div className="slidecaption1">
                    {' '}
                    <h2>the business hub </h2>
                    <h5>
                      UX/UI Design <br /> web development
                    </h5>
                    <Row>
                      <Col sm={12} md={9}>
                        <p>
                          The Business Hub is a business office space located in
                          Cairo, Egypt. The space aims to help businesses grow
                          through providing a professional office space and
                          environment. The Business Hub's primary focus is on
                          building the likeminded community in a space that
                          helps all entrepreneurs grow together and help each
                          other solve problems.
                        </p>
                        <p className="d-none d-md-block">
                          {' '}
                          They reached out to Lirten to help them with their
                          sales since they were rebranding from The CO-working
                          Hub to The Business Hub. We have helped them build
                          their brand in collaboration with The Postmod. In
                          addition to that, we helped them in building their
                          online presence by providing a coherent website that's
                          equally strong to their brand to increase their brand
                          awareness and overall sales.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="slide1Item">
            <div className="slide5Img"></div>{' '}
            <picture>
              <source
                srcSet="https://lirtenwebsite.s3.me-south-1.amazonaws.com/carouselline.webp"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/webp"
              />
              <source
                srcSet="https://lirtenwebsitepng.s3.me-south-1.amazonaws.com/carouselline.png"
                alt="slide1"
                className="img-fluid carouselline"
                type="image/png"
              />{' '}
              <img
                src="img/creakyOldJPEG.jpg"
                alt="slide1"
                className="img-fluid carouselline"
              />
            </picture>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'firstlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              trust house <br /> constructions
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'secondlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              bobian for <br /> elevator tech.
            </p>
            {/* <p
              onClick={this.changeColor.bind(this)}
              className={
                'thirdlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Dawoody
              <br /> custom <br /> clearance
            </p> */}
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fourthlineheader ' +
                (this.state.white ? 'caroutitlewhite' : 'caroutitleblue')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              The business <br /> hub
            </p>
            <p
              onClick={this.changeColor.bind(this)}
              className={
                'fifthlineheader ' +
                (this.state.white ? 'caroutitleblue' : ' caroutitlewhite')
              }
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '15px'
              }}
            >
              Locket <br /> digital wallet
            </p>
            <Container>
              <Row>
                <Col sm={12} className="offset-lg-1">
                  {' '}
                  <h2
                    className="myTitle"
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      paddingTop: '35px',
                      textTransform: 'uppercase'
                    }}
                  >
                    projects that amaze
                  </h2>{' '}
                  <div className="slidecaption1">
                    {' '}
                    <h2>Locket </h2>
                    <h5>
                      UX/UI Design <br />
                      Mobile Application Development
                      <br />
                      Fund Management System
                    </h5>
                    <Row>
                      <Col sm={12} md={9}>
                        <p>
                          Locket is a virtual wallet that focuses on the newer
                          generation that challenges the status quo. The virtual
                          wallet assists younger generations to perform
                          purchases easily since many nowadays want to keep
                          their wallet bulk down
                        </p>
                        <p className="d-none d-md-block">
                          Locket reached out to help them realize their vision
                          into an easy to use and visually appealing app.
                          Through our experience, we've developed the app as
                          well as their brand in collaboration with The Postmod
                          to help their app penetrate the market.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Slider>
      </div>
    );
  }
}
