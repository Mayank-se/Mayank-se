import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";

import Login from './Login';
import Signup from './Signup';
import Support from './Support';
import About from './About';
import Home from './Home';
import Customerdashboard from './Customerdashboard';
import Homedashboard from "./Homedashboard";
 import { Container} from "@material-ui/core";



function Base1() {
    return (
    <BrowserRouter>
        <Container >
            <Homedashboard/>
             
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup}/>
                <Route exact path="/Support" component={Support}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Customerdashboard" component={Customerdashboard}/>
            </Switch>
    
        </Container>
    </BrowserRouter>
    )
}

export default Base1;