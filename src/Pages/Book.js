import React, {Component} from "react"
import {Container, Card, CardDeck, Button, Row} from "react-bootstrap"

export default class Book extends Component {
  render(){
    return(
      <div style={{paddingTop:"150px"}}>
      <Container style={{paddingTop:"50px", paddingBottom:"90px"}} className="text-center">
      <h1>Books</h1>
      <hr />
      <CardDeck className="mt-4">
            <Card border="dark">
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51cm0z-4qpL._SX377_BO1,204,203,200_.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>C programming language</Card.Title>
                <Card.Text>Brian Kernigan, Dennis Ritchie</Card.Text>
                <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 43.73$</p>
                <Button variant="success" href="https://www.amazon.com/Programming-Language-PROGRAMMING-LANG-_p2-ebook/dp/B009ZUZ9FW/ref=sr_1_1?crid=2J1MUX2BVIYS9&dchild=1&keywords=c+programming+language&qid=1586279970&s=books&sprefix=C+programming+language%2Cstripbooks-intl-ship%2C392&sr=1-1/">Buy</Button>
              </Card.Body>
            </Card>
            <Card border="dark">
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51o0oPs8glL._SX397_BO1,204,203,200_.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>Hello World!: Computer Programming for Kids and Other Beginners</Card.Title>
                <Card.Text>Warren Sande, Carter Sande</Card.Text>
                <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 26.80$</p>
                <Button variant="success" href="https://www.amazon.com/Hello-World-Computer-Programming-Beginners/dp/1617290920">Buy</Button>
              </Card.Body>
            </Card>
            <Card border="dark">
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51XlF634r2L._SX403_BO1,204,203,200_.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>Android Programming with Kotlin for Beginners</Card.Title>
                <Card.Text>John Horton </Card.Text>
                <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 27.86$</p>
                <Button variant="success" href="https://www.amazon.com/Android-Programming-Kotlin-Beginners-programming-ebook/dp/B07RLJNJHS/ref=sr_1_1?dchild=1&keywords=kotlin+for+beginners&qid=1586281134&s=books&sr=1-1">Buy</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className="mt-4">
          <Card border="dark">
            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming</Card.Title>
              <Card.Text>Marijn Haverbeke</Card.Text>
              <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 28.90$</p>
              <Button variant="success" href="https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming-ebook/dp/B07C96Q217/ref=sr_1_1?dchild=1&keywords=Eloquent+JavaScript%2C+3rd+Edition%3A+A+Modern+Introduction+to+Programming&qid=1586280759&s=books&sr=1-1">Buy</Button>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51f5Bsxh3PL.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>C# for Beginners with Hands-on Project</Card.Title>
              <Card.Text>Jamie Chan, LCF Publishing</Card.Text>
              <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 3.59$</p>
              <Button variant="success" href="https://www.amazon.com/Beginners-Hands-Project-Coding-Project-ebook/dp/B016Z18MLG/ref=sr_1_2?dchild=1&keywords=C%23+intro&qid=1586280340&s=books&sr=1-2">Buy</Button>
            </Card.Body>
          </Card>
          <Card border="dark">
            <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51kPt9YPQFL.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>Intro To Ruby Programming: Beginners Guide Series</Card.Title>
              <Card.Text>John Elder</Card.Text>
              <p className="text-muted" style={{textAlign:"center", fontSize:"20px"}}>Price: 11.94$</p>
              <Button variant="success" href="https://www.amazon.com/Intro-Ruby-Programming-Beginners-Guide-ebook/dp/B01FPPNUU6/ref=sr_1_6?crid=3SUV96GMPNJR4&dchild=1&keywords=ruby+programming+language&qid=1586280835&s=books&sprefix=ruby+programming+%2Cstripbooks-intl-ship%2C269&sr=1-6">Buy</Button>
            </Card.Body>
          </Card>
          </CardDeck>
      </Container>
      </div>
    )
  }
}
