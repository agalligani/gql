import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { TagMenu } from "./TagMenu";
import LoginButton from "./LoginButton";

class MainNav extends Component {
  render() {
    return (
      <div className="sticky-wrapper">
        <Navbar expand="lg" style={{ flexDirection: "row" }}>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon="bars" focusable="true" />
          </Navbar.Toggle> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
              <Nav.Link as={Link} to="/imageupload">
                Images
              </Nav.Link>
              <TagMenu />
              <LoginButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect()(MainNav);
