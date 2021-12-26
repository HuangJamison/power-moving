import React from "react";
import styled from "styled-components";
import styles from "./styles";
import PropTypes from "prop-types";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="wrapper-footer">
        <div className="wrapper-contact-info">
          <div className="contact-info">
            <span>
              搬家時間：全年無休，歡迎預約，來電時間：週一〜週日 08:00~23:00
            </span>
            <span>電話： 09-3226-0184</span>
            <span>Email: b10130402@gmail.com</span>
          </div>
          <div className="social-media">
            <span id="company">力大搬家公司</span>
            <span id="fb-link">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/family0184"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>
        <div className="copywright">
          Copyright © 2021 力大搬家公司 All Rights Reserved. Jamie.Huang
          版權所有
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Footer)`
  ${styles}
`;
