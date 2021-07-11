import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// components
import MovingHomepage from './pages/Homepage';
import MovingNavbar from './Components/MovingNavbar';
import Footer from "./Components/Footer";
import ContactUs from './pages/ContactUs';

function App(props) {
  return (
    <BrowserRouter>
      <div id="page-wrapper">
        <MovingNavbar location={props.location}/>
        <Switch>
          {/* <Route exact path="/"> */}
          <Route exact path="/power-moving">
            <MovingHomepage/>
          </Route>
          <Route path="/power-moving/contact-us">
            <ContactUs location={props} test={0} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
