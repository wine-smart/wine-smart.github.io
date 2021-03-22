import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Navbar, Nav} from 'react-bootstrap';
import Question from './components/Question';

class Quiz1 extends React.Component {
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

                <Form>
                    <Form.Group size="md" controlId = "email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="genderid">
                        <Form.Label>Gender Identity</Form.Label>
                        <Form.Control as="Select">
                            <option></option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                            <option>I prefer not to answer</option>
                        </Form.Control>
                    </Form.Group>
                    <Form>

                        <div key={`default-radio`} className="mb-3">
                        <Form.Check 
                            type={'radio'}
                            id={`default-raio`}
                            label={`default radio`}
                        />

                        <Form.Check 
                            type={'radio'}
                            id={`default-raio`}
                            label={`default radio`}
                        />

                        <Form.Check 
                            type={'radio'}
                            id={`default-raio`}
                            label={`default radio`}
                        />
                        </div>

                    </Form>
                    <Link to="/results">
                        <Button type="submit">Submit</Button>
                    </Link>
                </Form>
            </>
        )
    }
}
export default Quiz1;