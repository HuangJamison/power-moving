import { css } from "styled-components";

const styles = css`
  min-height: calc(100vh - 10vh);
  .intro {
    display: flex;
    flex-direction: column;
  }
  .intro > span {
    display: block;
    font-size: 3vw;
    padding: 0 10vw;
    line-height: 8vh;
  }
  .intro #title {
    text-align: center;
    font-size: 3vw;
    padding: 1vh 0;
    line-height: 15vh;
  }
  .intro a:hover {
    backgroud-color: blue;
    color: red;
    font-size: 4vw;
    cursor: pointer;
  }
  .qr-area {
    text-align: center;
  }
  .qr-area > img {
    display: inline-block;
    width: calc(100% - 50vw);
    height: calc(100% - 30vh);
  }
  .qr-area > span {
    display: block;
  }
  .add-line-btn {
    width: 35vw;
    height: 13vh;
    font-size: 5vw;
    line-height: 11vh;
    margin: 3vh auto;
    border-radius: 8px;
  }
`;

export default styles;
