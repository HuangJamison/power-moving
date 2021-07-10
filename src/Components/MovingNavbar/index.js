import { Navbar, Nav, NavDropdown, Button, FormControl, Form  } from 'react-bootstrap';
import { withRouter } from "react-router";
import styled from "styled-components";
import styles from "./styles";

const MovingNavbar = ({ className, location }) => {
  
  return (
    <div className={className}>
      <Navbar id="navbar" bg="dark" variant="light">
        <Navbar.Brand className="title" href="/power-moving">力大搬家</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="navlink" activeclassname="active" href="/power-moving">首頁</Nav.Link>
            <Nav.Link className="navlink" activeclassname="active" href="/power-moving/contact-us">聯繫我們</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default withRouter(styled(MovingNavbar)`
  ${styles}
`);