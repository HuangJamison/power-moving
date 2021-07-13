import { css } from "styled-components";
import home_bg_desktop from '../../assets/images/home_bg_desktop.jpeg';

const styles = css`
  // 根據 Media 去換大小圖片
  .home-bg {
    background-image: url(${home_bg_desktop});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
  }
  .slogan {
    display: inline-block;
    position: relative;
    color: white;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0 ,0, 0.15);
    margin: 0;
    font-size: 3.5vw;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  }
  .origin {
    display: inline-block;
    position: absolute;
    color: black;
    z-index: 2;
    bottom: -10%;
    left: 86%;
    background-color: rgba(0, 0 ,0, 0.1);
    margin: 0;
    font-size: 0.8vw;
  }
`;

export default styles;