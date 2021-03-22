import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
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
            <header className="App-header">
          
            <h5> More about us and what we do here</h5>
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
  