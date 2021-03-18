import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

class Quiz2 extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Form >
                    <Form.Group size="md"controlId = "email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group size="md"controlId="genderid">
                        <Form.Label>Gender Identity</Form.Label>
                        <Form.Control as="Select">
                            <option></option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                            <option>I prefer not to answer</option>
                        </Form.Control>
                    </Form.Group>
                
                    <p>Below please slide the bar to the left if you enjoy this type of wine, to the right if you do not enjoy the wine and do not move this bar if you have not tried this wine before.</p>
                    
                    <Form.Group controlId="whites">
                        <Form.Label>White Wines</Form.Label>
                        <Form.Control type="range"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="reds">
                        <Form.Label>White Wines</Form.Label>
                        <Form.Control type="range"></Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Quiz2;