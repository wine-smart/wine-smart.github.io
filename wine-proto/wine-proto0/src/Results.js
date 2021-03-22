import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Navbar, Nav} from 'react-bootstrap';

class Results extends React.Component {
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
            

            <div>
               <p>Recommendations based on AI</p>
               <CardDeck>
                   <Card>
                   <Card.Body>
                       <Card.Title>Chardonnay</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
                   <Card>
                   <Card.Body>
                       <Card.Title>Pinot Grigio</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
                   <Card>
                   <Card.Body>
                       <Card.Title>Sangria</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
               </CardDeck>
               <p>Recommendations based on others like you</p>
               <CardDeck>
                   <Card>
                   <Card.Body>
                       <Card.Title>Sauvignon Blanc</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
                   <Card>
                   <Card.Body>
                       <Card.Title>Pinot Grigio</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
                   <Card>
                   <Card.Body>
                       <Card.Title>Chardonnay</Card.Title>
                       <Card.Text>Explanation of what characteristics are.</Card.Text>
                   </Card.Body>
                   </Card>
               </CardDeck>
            </div>
            </>
        )
    }
}
export default Results;