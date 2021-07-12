import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router";
import { BrowserRouter, HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from "styled-components";
import styles from "./styles";

const MovingNavbar = ({ className, location }) => {
  
  return (
    <div className={className}>
      <Navbar id="navbar" bg="dark" variant="light">
        <Navbar.Brand className="title" href="/">力大搬家</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="navlink" activeclassname="active" as={Link} to="/">首頁</Nav.Link>
            <Nav.Link className="navlink" activeclassname="active" as={Link} to="/power-moving/contact-us">聯繫我們</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default withRouter(styled(MovingNavbar)`
  ${styles}
`);