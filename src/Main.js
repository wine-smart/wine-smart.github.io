import React from 'react'
import { Switch, Route} from 'react-router-dom';

import Intro from './Intro'
import Quiz1 from './Quiz1'
import Results from './Results'

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/paper-kit.css";
import "assets/demo/demo.css";

const Main = () => {
    return (
        <Switch>
            <Route exact path ='/' component ={Intro}></Route>
            <Route exact path ='/quiz1' component={Quiz1}></Route>
            <Route exact path = '/results' component={Results}></Route>
        </Switch>
    );
}

export default Main;