import React from 'react';

import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from './Home';

import Form from './Form';
import Support from './Support';
import About from './About';
import Customerdashboard from './Customerdashboard';
import Base1 from './Base1';
import Customerdash from "./Customerdash";
import { Container} from "@material-ui/core";


function Base2() {
    return (
    <BrowserRouter>
        <Container >
            <Customerdash/>
    
            <Switch>
                
                <Route exact path="/" component={Home}/>
                <Route exact path="/Feedback" component={Form}/>
                <Route exact path="/Support" component={Support}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Base1" component={Base1}/>
                <Route exact path="/Customerdashboard" component={Customerdashboard}/>
            </Switch>
    
        </Container>
    </BrowserRouter>
    )
}

export default Base2;