import { css } from "styled-components";
import { 
  MEDIA_QUERY_TINY,
  MEDIA_QUERY_SMALL,
  MEDIA_QUERY_MEDIUM,
  MEDIA_QUERY_BIG
} from '../Constants/breakpoint';

const styles = css`
  .wrapper-footer {
    // 根據 media 去變換 footer
    position: sticky;
    ${MEDIA_QUERY_BIG} {
      height: 10vh;
      font-size: 0.7vw;
    }
    ${MEDIA_QUERY_MEDIUM} {
      height: 10vh;
      font-size: 0.7vw;
    }
    ${MEDIA_QUERY_TINY} {
      height: 18vh;
      font-size: 0.3vw;
    }
    ${MEDIA_QUERY_SMALL} {
      height: 16vh;
      font-size: 0.5vw;
    }
    bottom: 0;
    width: 100%;
    background-color: #212529;
    color: white;
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