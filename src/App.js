import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
// components
// import Homepage from './Components/Homepage';
import MovingHomepage from './pages/Homepage';
import MovingNavbar from './Components/MovingNavbar';
import ContactUs from './pages/ContactUs';

function App(props) {
  return (
    <Router>
      <div id="page-wrapper">
        <MovingNavbar location={props.location}/>
        <Switch>

          <Route exact path="/power-moving">
            <MovingHomepage/>
          </Route>
          <Route path="/power-moving/contact-us">
            <ContactUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
