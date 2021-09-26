import React from 'react';

import { BrowserRouter, Route,Switch } from "react-router-dom";

import Support from './Support';
import About from './About';
import Workassigned from './Workassigned';
import Base1 from './Base1';
import Workerdash from "./Workerdash";
import Worker from './Worker';
import Workertaskdone from './Workertaskdone';
import { Container} from "@material-ui/core";


function Base3() {
    return (
    <BrowserRouter>
        <Container >
            <Workerdash />
    
            <Switch>
                <Route exact path="/Worker" component={Worker}/>
                <Route exact path="/Workertaskdone" component={Workertaskdone}/>
                <Route exact path="/Workassigned" component={Workassigned}/>
                <Route exact path="/Support" component={Support}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Base1" component={Base1}/>
            </Switch>
    
        </Container>
    </BrowserRouter>
    )
}

export default Base3;