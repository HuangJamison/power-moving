import React from "react";
import Contact from '../../Components/Contact';
import Footer from "../../Components/Footer";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const ContactUs = ({ location, test }) => {

  return (
    <>
      <Contact location={location} test={test} />
    </>
  );
};

export default ContactUs;
