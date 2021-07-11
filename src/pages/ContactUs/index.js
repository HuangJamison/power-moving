import React from "react";
import Contact from '../../Components/Contact';
import Footer from "../../Components/Footer";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const ContactUs = ({ location, test }) => {
  console.log('test pages:', test)
  console.log('location pages:', location)
  return (
    <>
      <Contact location={location} test={test} />
      <Footer/>
    </>
  );
};

export default ContactUs;
