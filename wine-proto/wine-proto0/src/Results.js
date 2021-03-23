import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Navbar, Nav} from 'react-bootstrap';

class Results extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            chosenAnswers: "",
            firstChoice: "",
            secondChoice: "",
            thirdChoice: ""
        }
    }
    componentDidMount(){
        this.state.chosenAnswers = this.props.location.state;
       // console.log(this.state.chosenAnswers)
        this.findWine1();
    }
    findWine1(){
        console.log(this.state.chosenAnswers)
        console.log(this.state.chosenAnswers.chosenAnswers)        
       
       if(this.state.chosenAnswers[1] === {answer: "NotSweet"}){
            //red wine here
            if(this.state.chosenAnswers[2] === {answer: "Beer"}){
                //low alc content
               if (this.state.chosenAnswers[4] === "Sour"){
                   //high acitidity
                   this.setState(state => ({
                       firstChoice: "Merlot",
                       secondChoice: "Shiraz",
                       thirdChoice: "Cabernet Sauvignon"
                   }))
               } else {
                    //low acitidty
                    this.setState(state => ({
                        firstChoice: "Shiraz",
                        secondChoice: "Merlot",
                        thirdChoice: "Cabernet Sauvignon"
                    }))
               }
            }else if(this.state.chosenAnswers[2] === {answer: "Marg"}){
                //med alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Cabernet Sauvignon",
                        secondChoice: "Merlot",
                        thirdChoice: "Shiraz"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Cabernet Sauvignon",
                        secondChoice: "Shiraz",
                        thirdChoice: "Merlot"
                    }))
                }
            }else {
                //high alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Shiraz",
                        secondChoice: "Merlot",
                        thirdChoice: "Cabernet Sauvignon"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Shiraz",
                        secondChoice: "Cabernet Sauvignon",
                        thirdChoice: "Merlot"
                    }))
                }
            }
       }else if (this.state.chosenAnswers[1] === {answer: "Sweet"}){
            //white wine here
            if(this.state.chosenAnswers[2] === {answer: "Beer"}){
                //low alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Moscato",
                        secondChoice: "Pinot Grigio",
                        thirdChoice: "Chardonnay"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Moscato",
                        secondChoice: "Sauvignon Blanc",
                        thirdChoice: "Chardonnay"
                    }))
                }
            }else if(this.state.chosenAnswers[2] === {answer: "Marg"}){
                //med alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Pinot Grigio",
                        secondChoice: "Chardonnay",
                        thirdChoice: "Sauvignon Blanc"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Pinot Grigio",
                        secondChoice: "Chardonnay",
                        thirdChoice: "Moscato"
                    }))
                }
            }else {
                //high alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Sauvignon Blanc",
                        secondChoice: "Chardonnay",
                        thirdChoice: "Pinot Grigio"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Sauvignon Blanc",
                        secondChoice: "Chardonnay",
                        thirdChoice: "Moscato"
                    }))
                }
            }
       }else {
            //either
            if(this.state.chosenAnswers[2] === {answer: "Beer"}){
                //low alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "Sangria",
                        secondChoice: "Moscato",
                        thirdChoice: "Rose"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "Sangria",
                        secondChoice: "Moscato",
                        thirdChoice: "Rose"
                    }))
                }
            }else if(this.state.chosenAnswers[2] === {answer: "Marg"}){
                //med alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "White Zinfandel",
                        secondChoice: "Rose",
                        thirdChoice: "Moscato"
                    }))
                } else {
                     //low acitidty
                     this.setState(state => ({
                        firstChoice: "White Zinfandel",
                        secondChoice: "Sangria",
                        thirdChoice: "Moscato"
                    }))
                }
            }else {
                //high alc content
                if (this.state.chosenAnswers[4] === "Sour"){
                    //high acitidity
                    this.setState(state => ({
                        firstChoice: "White Zinfandel",
                        secondChoice: "Rose",
                        thirdChoice: "Moscato"
                    }))
                } 
            }
       }
    }
    getShiraz(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Shiraz</Card.Title>
                       <Card.Text>Dry. Bold. 14-15.5%. Firm Tannins. Blueberry and Blackberry notes. Serve chilled. Pairs with hearty stews, duck and mushrooms.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getCabernetSauvignon(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Cabernet Sauvignon</Card.Title>
                       <Card.Text>Dry. Full-Bodied. 13.5-15%. Healthy Tannins. Serve chilled. Pairs with red meats, truffles.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getMerlot(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Merlot</Card.Title>
                       <Card.Text>Dry. Medium-Bodied. 13-14%. Serve chilled. Pairs with light meats and savory dishes.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getPinotGrigio(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Pinot Grigio</Card.Title>
                       <Card.Text>Dry to Semi-Sweet. Medium-Bodied. 12.5-14.5%. Serve chilled. Lemon and pear notes. Pairs with nuts, olives, cheeses.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getChardonnay(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Chardonnay</Card.Title>
                       <Card.Text>Dry to Semi-Sweet. Medium-Bodied. 13.5-14.5%. Serve room temperature. Pairs with seafood.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getSauvignonBlanc(){
            return (
                <Card>
                    <Card.Body>
                        <Card.Title>Sauvignon Blanc</Card.Title>
                           <Card.Text>Semi-Sweet to Sweet. Medium-Bodied. 14-14.5%. Serve chilled. Apple and peach notes. Pairs with green herbs and goat cheese.</Card.Text>
                    </Card.Body>
                </Card>
            )
        
    }
    getSangria(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Sangria</Card.Title>
                       <Card.Text>Can be red or white. Can be sweetened to taste. Fruity. Serve chilled.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getMoscato(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Moscato</Card.Title>
                       <Card.Text>Sweet. 5-7%. Lemon and orange notes. Pairs with Thai and Vietnamese cuisine.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getRose(){
        return(
            <Card>
                <Card.Body>
                    <Card.Title>Rose/White Zinfandel</Card.Title>
                       <Card.Text>Sweet. 12.5%. Light Citrus notes.Pairs with smoked meats and pasta.</Card.Text>
                </Card.Body>
            </Card>
        )
    }
    getWine(str){
        if(str === "Shiraz"){
            return this.getShiraz();
        }else if(str === "Merlot"){
            return this.getMerlot();
        }else if(str === "Cabernet Sauvignon"){
            return this.getCabernetSauvignon();
        }else if(str === "Pinot Grigio"){
            return this.getPinotGrigio();
        }else if(str === "Chardonnay"){
            return this.getChardonnay();
        }else if(str === "Sauvignon Blanc"){
            return this.getSauvignonBlanc();
        }else if(str === "Sangria"){
            return this.getSangria();
        }else if(str === "Moscato"){
            return this.getMoscato();
        }else if(str=== "Rose" || str === "White Zinfandel"){
            return this.getRose();
        }else {
            return this.getChardonnay();
        }
    }
    getResults(){
        this.findWine1();
        console.log(this.state)
        return (
            <>
            <p>Recommendations based on AI</p>
            <CardDeck>
                {this.getWine(this.state.firstChoice)}
                {this.getWine(this.state.secondChoice)}
                {this.getWine(this.state.thirdChoice)}
            </CardDeck>
            </>
        )
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
           
            <div>{this.getResults()}</div>
            
            </>
        )
    }
}
 export default Results;