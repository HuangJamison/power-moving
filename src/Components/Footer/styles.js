import { css } from "styled-components";

const styles = css`
  .wrapper-contact-info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    font-size: 1vw;
    padding: 0.5vh 2vw;
    line-height: 3vh;
    background-color: #e8efee;
  }
  .contact-info > span, .social-media > span {
    margin: 0.5vh 0;
    display: block;
    text-align: center;
  }
  #fb-link a {
    color: black;
    
  }
  #company {
    font-size: 1.3vw;
    letter-spacing: 0.2vw;
  }
  .copywright {
    background-color: #eee;
    color: black;
    font-size: 0.8vw;
    text-align: center;
    padding: 1vh 0.3vw;
    letter-spacing: 0.2vw;
  }
`;

export default styles;