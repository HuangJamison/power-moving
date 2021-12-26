import { css } from "styled-components";
import home_bg_desktop from '../../assets/images/moving_desktop.jpg';
import home_bg_mobile from '../../assets/images/moving_mobile.jpg';
import { 
  MEDIA_QUERY_TINY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  MEDIA_QUERY_BIG
} from '../Constants/breakpoint';

const styles = css`
  // 根據 Media 去換大小圖片
  .home-bg {
    background-size: cover;
    ${MEDIA_QUERY_BIG} {
      background-position: top;
      background-image: url(${home_bg_desktop});
      height: 82vh;
      background-size: cover;
    }
    ${MEDIA_QUERY_MEDIUM} {
      background-image: url(${home_bg_desktop});
      background-position: top;
      height: 82vh;
      background-size: cover;
    }
    ${MEDIA_QUERY_SMALL} {
      background-image: url(${home_bg_mobile});
      background-position: center;
      height: 80vh;
      background-repeat: no-repeat;
    }
    ${MEDIA_QUERY_TINY} {
      background-image: url(${home_bg_mobile});
      background-position: center;
      width: 100vw;
      height: 80vh;
      background-repeat: no-repeat;
    }
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