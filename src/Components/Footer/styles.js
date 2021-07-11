import { css } from "styled-components";

const styles = css`
  .wrapper-footer {
    position: sticky;
    height: 10vh;
    bottom: 0;
    width: 100%;
    background-color: #212529;
    color: white;
    font-size: 0.8vw;
  }
  .wrapper-contact-info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh 2vw;
    line-height: 3vh;
  }
  .contact-info > span, .social-media > span {
    margin: 0;
    display: block;
    text-align: center;
  }
  #fb-link a {
    color: white;
    
  }
  #fb-link a:hover {
    color: blue;
    
  }
  #company {
    font-size: 1.3vw;
    letter-spacing: 0.2vw;
  }
  .copywright {
    background-color: #212529;
    text-align: center;
    padding: 0 0.3vw;
    letter-spacing: 0.2vw;
  }
`;

export default styles;