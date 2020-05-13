import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home"
import History from "../Pages/History"
import Book from "../Pages/Book"

export default class Menu extends Component {
   render () {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/"> >Hello, World!  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              <Nav.Link href="/book">Books</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/ruz1k">Github</Nav.Link>
              <Nav.Link eventKey={2} href="http://u78199.test-handyhost.ru/">
                Web-site
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
            <Route exact path="/book" component={Book} />
          </Switch>
        </Router>
      </div>
    );
  }
}
