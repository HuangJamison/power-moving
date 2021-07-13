import React from "react";
import Contact from '../../Components/Contact';
import ContactForm from "../../Components/ContactForm";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const ContactUs = ({ location, isExistForm }) => {

  return (
    <>
      <Contact location={location} isExistForm={isExistForm} />
      {
        isExistForm == '1' &&
        <ContactForm location={location} isExistForm={isExistForm} />
      }
    </>
  );
};

export default ContactUs;
