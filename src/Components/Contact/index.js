import React from "react";
import styled from "styled-components";
import styles from "./styles";
import { Button, Form } from 'react-bootstrap';

const Contact = ({ className, location, test }) => {
  const lineWording = test == 1 ? '歡迎填寫以下問券，加入力大 Line，給你最即時的服務！' : '歡迎加入力大 Line，給你最即時的服務！！！'
  console.log('test comp:', test)
  console.log('test location:', location)
  return (
    <div className={className}>
      <div className="intro">
        <span id="title" className={test} >聯絡我們...</span>
        <span className="intro-text">
          力大搬家以顧客滿意為最大宗旨，估價、派車、派工給您最安心的服務，省去比價的困擾，選擇力大，最公道價。
        </span>
        <span className="intro-text">
          {lineWording}
        </span>
      </div>
      
      <Form id="line-form">
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>貴姓 / 稱呼：</Form.Label>
          <Form.Control type="text" name="first_name" size="lg" maxLength="5" placeholder="貴姓" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSex">
          <Form.Label as="legend" column sm={6}>
            先生 / 女士：
          </Form.Label>
          <Form.Check
            type="radio"
            label="先生"
            name="sex"
            id="male"
          />
          <Form.Check
            type="radio"
            label="女士"
            name="sex"
            id="female"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          點我加入力大搬家 Line !!!
        </Button>
      </Form>
    </div>
  );
};

export default styled(Contact)`
  ${styles}
`;
