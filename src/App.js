import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
// components
import MovingHomepage from './pages/Homepage';
import MovingNavbar from './Components/MovingNavbar';
import Footer from "./Components/Footer";
import ContactUs from './pages/ContactUs';

function App(props) {
  return (
    <Router>
      <div id="page-wrapper">
        <MovingNavbar location={props.location}/>
        <Switch>
          <Route exact path="/">
            <MovingHomepage/>
          </Route>
          <Route exact path="/contact-us">
            <ContactUs location={props} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
