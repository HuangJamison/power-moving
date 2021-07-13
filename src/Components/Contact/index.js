import React from "react";
import styled from "styled-components";
import styles from "./styles";
import { Button } from 'react-bootstrap';
import line_qr from '../../assets/images/line_qr.png';

const Contact = ({ className, location, isExistForm }) => {
  const lineWording = isExistForm == 1 ? '歡迎填寫以下問券，加入力大 Line，給你最即時的服務！' : '歡迎加入力大 Line，給你最即時的服務！！！'
  return (
    <div className={className}>
      <div className="intro">
        <span id="title">聯繫我們</span>
        <span className="intro-text">
          力大搬家以顧客滿意為最大宗旨，估價、派車、派工給您最安心的服務，省去比價的困擾，選擇力大，最公道價。
        </span>
        <span className="intro-text">
          {lineWording}
        </span>
        <div className="qr-area">
          <img 
            src={line_qr}
            alt="力大QRCode"
          />
          <span>掃掃 QR CODE 加入力大搬家好友！</span>
        </div>
        <Button href="https://lin.ee/68Zd8uA" className="add-line-btn" variant="primary" sitype="button">
          點我加入力大搬家 Line
        </Button>
      </div>
    </div>
  );
};

export default styled(Contact)`
  ${styles}
`;
