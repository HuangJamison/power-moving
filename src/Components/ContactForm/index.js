import React from "react";
import styled from "styled-components";
import styles from "./styles";
import { Button, Form } from 'react-bootstrap';

const ContactForm = ({ className, location, isExistForm }) => {
  return (
    <div className={className}>
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

export default styled(ContactForm)`
  ${styles}
`;
