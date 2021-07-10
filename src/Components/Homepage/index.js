import React from "react";
import styled from "styled-components";
import styles from "./styles";

const Homepage = ({ className }) => {
  console.log('classname:', className)
  return (
    <div className={className}>
        <div className="home-bg">
          <div className="slogan">
            找信賴的搬家公司 － 選擇力大，給你最公道價
          </div>
          <div className="origin">
            photo from HiveBoxx on Unplash
          </div>
        </div>
    </div>
  );
};

export default styled(Homepage)`
  ${styles}
`;
