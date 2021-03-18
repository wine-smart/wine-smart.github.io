import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck} from 'react-bootstrap';

class Results extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
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
        )
    }
}
export default Results;