import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

class Quiz1 extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="App">
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
                    <Link to="/results">
                        <Button type="submit">Submit</Button>
                    </Link>
                </Form>
            </div>
        )
    }
}
export default Quiz1;