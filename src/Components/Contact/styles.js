import { css } from "styled-components";

const styles = css`
  min-height: calc(100vh - 10vh);
  .intro {
    display: flex;
    flex-direction: column;
  }
  .intro > span {
    display: block;
    font-size: 1.5vw;
    padding: 0 10vw;
    line-height: 6vh;
  }
  .intro #title {
    text-align: center;
    font-size: 5vw;
    padding: 1vh 0;
    line-height: 15vh;
  }
  #line-form {
    margin: 5vh;
    padding: 0 8vw;
    font-size: 1.5vw;
  }
`;

export default styles;