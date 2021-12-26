import React from "react";
import Contact from '../../Components/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const ContactUs = ({ location }) => {
  return (
    <Contact location={location} />
  );
};

export default ContactUs;
