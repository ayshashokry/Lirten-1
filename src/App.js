// Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Styling
import './App.css';
// Components

import Home from './components/pages/Home';
import JoinUs from './components/pages/JoinUs';
import HiringList from './components/sections/joinUs-sections/HiringList';
import Footer from './components/layout/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/joinUs" component={JoinUs} />

          {/* <Route exact path="/details/:id" component={JoinUsDetails} /> */}

          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
