import React, {Component} from 'react'
import {Container, Nav, NavItem,Tab, Col, Sonnet, Row} from "react-bootstrap"
import Hello from "../Components/Hello"
import Second from "../Components/Second"
import c from "../Photo/c.png"
import cpp from "../Photo/cpp (2).png"
import java from "../Photo/java (2).png"
import obj from "../Photo/obj-c (2).png"
import py from "../Photo/py (2).png"
import csh from "../Photo/csh (2).png"
import ruby from "../Photo/ruby (2).png"
import perl from "../Photo/perl (2).png"
import haskell from "../Photo/haskell (2).png"

export default class History extends Component {
  render () {
    const historyblock = {
      paddingTop:"55px"
    }
    return(
      <div>
        <Tab.Container id="right-tabs" defaultActiveKey="first" className="text-center" style={{fontFamily:"Roboto"}}>
          <Row>
            <Col md={3}>
              <Nav variant="pills" className="flex-column" style={{paddingTop:"100px",color:"black"}}>
                <Nav.Item>
                  <Nav.Link eventKey="first">Introduction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">"Hello, world!" in diffrent languages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">More</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content style={{fontSize:"23px", fontColor:"white"}} className="text-center">
                <Tab.Pane eventKey="first" style={{paddingTop:"100px"}}>
                  <Container>
                  <h1>Introduction</h1>
                  <hr />
                  <p className="text-center">
                    One day I wondered why,
                    when I started learning programming,
                    my first command was to print the string Hello World!
                    Why exactly these two words.<br /><br />
                  I had the idea to create a site dedicated to Hello World,
                  as these words were and are significant for the world of developers.
                  Here you can find out the history of the appearance of this program
                  and why exactly these words began to be displayed as the first program,
                  and you can also see how this program is written in different programming languages!
                  <img
                    src="https://vscode.ru/wp-content/uploads/2017/11/hello-world.jpg"
                    width="100%"
                    alt="hello_world"
                    style={{paddingTop:"50px"}} />
                </p>
                <hr />
                <p className="text-muted" style={{textAlign:"right", fontSize:"15px"}}>6 April 2020</p>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{paddingTop:"100px"}}>
              <Col xs="12">
                <Container>
                <h1>History</h1>
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
              <Tab.Pane eventKey="fourth" style={{paddingTop:"100px"}} className="text-center">
                <Container>
                <h1>More</h1>
                <hr />
                <p>
                  Hello, World Program in 35 Languages
                </p>
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/zecueq-mo4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <hr />
                <p className="text-muted" style={{textAlign:"right", fontSize:"15px"}}>6 April 2020</p>
               </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}
}
