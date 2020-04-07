import React, {Component} from "react"
import {Tab, Row, Col, Container} from "react-bootstrap"
import c from "../Photo/c.png"
import cpp from "../Photo/cpp (2).png"
import java from "../Photo/java (2).png"
import obj from "../Photo/obj-c (2).png"
import py from "../Photo/py (2).png"
import csh from "../Photo/csh (2).png"
import ruby from "../Photo/ruby (2).png"
import perl from "../Photo/perl (2).png"
import haskell from "../Photo/haskell (2).png"

export default class Hello extends Component {
  render() {
    return (
      <Tab.Pane eventKey="third" style={{paddingTop:"100px"}}>
      <Container>
        <h1 className="mt-4 text-center">"Hello, world!" in diffrent languages</h1>
        <hr />
          <Row className="mt-4">
            <Col md="4">
              <h1> C </h1>
              <img
                src={c}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> C++ </h1>
              <img
                src={cpp}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Java </h1>
              <img
                src={java}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Haskell </h1>
              <img
                src={haskell}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Python </h1>
              <img
                src={py}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Ruby </h1>
              <img
                src={ruby}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Perl </h1>
              <img
                src={perl}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> C# </h1>
              <img
                src={csh}
                className="mt-4"
                width="95%"
                />
            </Col>
            <Col md="4">
              <h1> Objective-C </h1>
              <img
                src={obj}
                className="mt-4"
                width="95%"
                />
            </Col>
          </Row>
          <hr />
            <p className="text-muted" style={{textAlign:"right", fontSize:"15px"}}>6 April 2020</p>
          </Container>
      </Tab.Pane>
    )
  }
}
