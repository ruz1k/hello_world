import React, {Component} from "react"
import {Tab, Container, Row, Col} from "react-bootstrap"

export default class Hello extends Component {
  render() {
    return (
      <div>
      <Tab.Pane eventKey="second">
      <Col xs="12">
        <Container>
        <h1 style={{paddingTop:"100px"}}>History</h1>
        <hr />
        <p className="text-center">"Hello world!"  - a program, the result of which is the conclusion on the screen or other device of the phrase "Hello, world!"
            Variations with a different punctuation or case are also used - for example, “Hello World”.
              This is usually the first example of a program in programming textbooks, and for many students,
               such a program is the first experience when learning a new language.<br /><br /></p>
               <img
                 src="https://i9.wampi.ru/2020/04/07/c2_upscaled_image_x4.png"
                 alt="Photo"
                 width="60%"
                 style={{paddingBottom:"40px"}}
                 />
               <p>
                This statement of the problem draws the attention of the student to several key points of
                 the programming language, the main of which is the basic structure of the program.
                 Although small test cases have been used ever since computers appeared,
                  the tradition of using the phrase “Hello, world!”  as a test message,
                   it was introduced in the book "C programming language"
                    by Brian Kernigan and Dennis Ritchie, published in 1978.</p>
                  <Row>
                  <Col md="6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Brian_Kernighan_in_2012_at_Bell_Labs_1.jpg"
                    width="100%"
                    className="mt-2"
                    />
                </Col>
                <Col md="6">
                    <img
                      src="https://i.imgur.com/RXeJR26.png"
                      width="100%"
                      className="mt-2"
                      />
                  </Col>
                  </Row>
                  <hr />
                  <p className="text-muted" style={{textAlign:"right", fontSize:"15px"}}>6 April 2020</p>
                  </Container>
                  </Col>
                </Tab.Pane>
                </div>
              )
             }
           }
