import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


class Intro extends React.Component {
    constructor(props){
        super(props);        
    }

    render() {
        return (
           
            <div className="App">
            <header className="App-header">
          
            <h1> NAME OF WEBSITE HERE</h1>
            <h5> More about us and what we do here</h5>
            <div>
                <h5> Start quiz by answering a simple question</h5>
                <Link to="/quiz1">
                    <Button variant="primary" >I have never drank wine</Button>
                </Link>
                <Link to="/quiz2">
                    <Button variant="primary" >I have drank wine</Button>
                </Link>
            </div>
            </header>
          </div>
         
        );
    }
}
 
export default Intro;
  