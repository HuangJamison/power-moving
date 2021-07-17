import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import styles from "./styles";
import PropTypes from "prop-types";

const MovingNavbar = ({ className }) => {
  
  return (
    <div className={className}>
      <Navbar id="navbar" bg="dark" variant="light">
        <Navbar.Brand className="title" activeclassname="active" as={Link} to="/">力大搬家</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="navlink" activeclassname="active" as={Link} to="/">首頁</Nav.Link>
            <Nav.Link className="navlink" activeclassname="active" as={Link} to="/contact-us">聯繫我們</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  )
}

MovingNavbar.propTypes = {
  className: PropTypes.string.isRequired
};

export default withRouter(styled(MovingNavbar)`
  ${styles}
`);