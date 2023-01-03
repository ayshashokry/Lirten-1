import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from '../layout/Header';
import WeAre from '../sections/home-sections/WeAre';
import ContactUs from '../sections/home-sections/ContactUs';
import Approachingbusiness from '../sections/home-sections/Approachingbusiness';
import ProjectsCarousel from '../sections/home-sections/ProjectsCarousel';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      fixNav: 'py-5  fix-nav float-left  col-lg-3 fix'
    };

    this.line = React.createRef();
    this.sticky = React.createRef();

    this.welirten = React.createRef();
    this.approaching = React.createRef();
    this.formsection = React.createRef();
    this.first = React.createRef();
    this.second = React.createRef();
    this.third = React.createRef();
    this.fourth = React.createRef();
    this.explore = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.path === '/') {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('scroll', this.fix);
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.fix);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('scroll', this.fix);
  }

  fix = e => {
    if (window.pageYOffset > this.welirten.current.offsetTop) {
      this.setState({ fixNav: 'py-5  fix-nav float-left  col-lg-3 fix' });
      this.sticky.current.className = this.state.fixNav;
    } else {
      this.sticky.current.classList = ' py-5  fix-nav float-left  col-lg-3 ';
    }
  };
  handleScroll = e => {
    if (
      window.pageYOffset > this.welirten.current.offsetTop &&
      window.pageYOffset < this.approaching.current.offsetTop
    ) {
      this.line.current.classList = 'lineblue';
      this.first.current.classList = 'blue';
      this.second.current.classList = 'gray';
      this.third.current.classList = 'gray';
      this.fourth.current.classList = 'gray';
    } else if (
      window.pageYOffset > this.approaching.current.offsetTop &&
      window.pageYOffset < this.explore.current.offsetTop
    ) {
      this.line.current.classList = 'linewhite';
      this.second.current.classList = 'white';
      this.fourth.current.classList = 'gray';

      this.first.current.classList = 'gray';
      this.third.current.classList = 'gray';
    } else if (
      window.pageYOffset > this.explore.current.offsetTop &&
      window.pageYOffset < this.formsection.current.offsetTop
    ) {
      this.line.current.classList = 'linewhite2';
      this.fourth.current.classList = 'blue';
      this.first.current.classList = 'gray';
      this.second.current.classList = 'gray';
      this.third.current.classList = 'gray';
    } else if (window.pageYOffset > this.formsection.current.offsetTop) {
      this.line.current.classList = 'lineblue2';
      this.third.current.classList = 'blue';
      this.fourth.current.classList = 'gray';

      this.first.current.classList = 'gray';
      this.second.current.classList = 'gray';
    }
  };

  handleScrollExplore = e => {
    const explore = this.explore.current;
    window.scrollTo({
      top: explore.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  handleScrollwelirten = e => {
    window.scrollTo({
      top: this.welirten.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  handleScrollapproaching = e => {
    window.scrollTo({
      top: this.approaching.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  handleScrollform = e => {
    window.scrollTo({
      top: this.formsection.current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className="home">
        <Header handleScrollExplore={this.handleScrollExplore} />
        <div className="offer py-5" ref={this.welirten}>
          {' '}
          <div className="d-none d-lg-block stickynavbtn">
            {' '}
            <div
              className="  py-5 float-left col-lg-4"
              ref={this.sticky}
              style={{ zIndex: '999' }}
            >
              <div>
                <button
                  onClick={this.handleScrollwelirten}
                  className="text-right"
                >
                  {' '}
                  <p
                    ref={this.first}
                    className="blue text-right"
                    style={{ textTransform: 'uppercase' }}
                  >
                    Our business
                    <br />
                    proposition
                  </p>{' '}
                </button>
                <br />
                <button
                  onClick={this.handleScrollapproaching}
                  className="text-right"
                >
                  <p ref={this.second} className="gray">
                    {' '}
                    OUR APPROACH TO
                    <br />
                    BUSINESS PROBLEM
                  </p>
                </button>
                <br />
                <button
                  onClick={this.handleScrollExplore}
                  className="text-right"
                >
                  <p className="gray" ref={this.fourth}>
                    {' '}
                    PROJECTS THAT
                    <br />
                    AMAZE
                  </p>
                </button>
                <br />
                <button onClick={this.handleScrollform} className="text-right">
                  <p
                    ref={this.third}
                    className="gray"
                    style={{ textTransform: 'uppercase' }}
                  >
                    Contact the <br /> makers
                  </p>
                </button>
                <span className="lineblue" ref={this.line}></span>
              </div>
            </div>
          </div>
          <WeAre />
          <div className="clearfix"></div>
        </div>
        <div ref={this.approaching} style={{ backgroundColor: '#060067' }}>
          <Col sm={12} lg={8} className="float-right">
            <Approachingbusiness />
          </Col>
          <div className="clearfix"></div>
        </div>
        <div
          ref={this.explore}
          style={{ zIndex: '999999999', position: 'relative' }}
        >
          <ProjectsCarousel />
        </div>
        <div ref={this.formsection}>
          {' '}
          <Col sm={12} lg={8} className="float-right">
            <ContactUs />
          </Col>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}
