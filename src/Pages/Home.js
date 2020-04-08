import React, {Component} from 'react'
import {Jumbotron, Button, Col, Container, Row} from "react-bootstrap"

export default class Home extends Component {
  render () {
    const bodystyle = {
      paddingTop:"250px",
      paddingBottom:"350px",
      backgroundImage:"url("+ "https://i9.wampi.ru/2020/04/05/hello_upscaled_image_x4.jpg" + ")",
      backgroundSize:"cover",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
    const first_section = {
      backgroundColor:"rgba(0,0,0,.4)",
      color:"white"
    }
    const second_section = {
      paddingTop:"150px",
    }
    return(
      <div style={bodystyle}>
      <Jumbotron style={first_section}>
  <h1>Hello, world!</h1>
  <p>
    Site about, 2 simple words!
  </p>
  <p>
    <Button variant="primary" href="/history">Learn more</Button>
  </p>
</Jumbotron>
<div id="second">
<Container style={{paddingTop:"150px", color:"white", fontFamily:"Arial"}}>
<h1>Information</h1>
<Row>
<Col md="4">
<p>Russian-speaking programmers and technical translators traditionally translate the word world in its main meaning - “world, light, universe”,
  why from "hello world" the literal "hello world" is obtained.  This translation is explained by the fact that the program, starting work,
  as if born and welcomes the world into which it comes.</p>
        </Col>
        <Col md="4">
        <p>More familiar with the intricacies of the English language indicate that the world has other meanings - “people”, “society”, “humanity”,
  and “hello world” is a widespread informal greeting addressed to an indefinite circle of people (people, not just arbitrary objects or nature in general).
  Therefore, the greeting should be translated as “hello everyone”, “hello, people,” “great people,” etc., which is confirmed by English-speaking programmers.</p>
                </Col>
                <Col md="4">
                <p>In a similar sense, the word world is used when assigning access rights (owner, group, world) in UNIX operating systems for which the C language was developed,
                   from where the tradition to display “hello world” as a greeting came.
                    Owner means the owner of the object, group - the group of users, which includes the owner, and world - all other users of the system.</p>
                        </Col>
                        </Row>
                        </Container>
                      </div>
                      </div>
                    )
                  }
                }
