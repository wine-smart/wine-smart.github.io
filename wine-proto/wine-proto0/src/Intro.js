import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Intro extends React.Component {
    constructor(props){
        super(props);        
    }

    render() {
        return (
            <>
            <>
            <Navbar bg="light" variant="light">
                <Link to="/#home">
                    <Navbar.Brand href="#home">WineSmart</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
            
                <Link to="/#home">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/quiz1">
                    <Nav.Link href="#features">Take the Quiz!</Nav.Link>
                </Link>
                <Link to="/results">
                    <Nav.Link href="#recommendations">Recommendations</Nav.Link>
                </Link> 
                </Nav>
            </Navbar>
            </>

            <div className="App">
            <header className="Intro">
          
            <Card className = "instructions">
                <Card.Body>
                       {/* <Card.Title>Chardonnay</Card.Title> */}
                       <Card.Text>Take this 5 question quiz to find out what wines would best fit your preferences:</Card.Text>
                </Card.Body>
            </Card>

            <div>
                <Link to="/quiz1">
                    <Button variant="primary" >Let's get started!</Button>
                </Link>
            </div>
            </header>
          </div>
          </>
         
        );
    }
}
 
export default Intro;
  