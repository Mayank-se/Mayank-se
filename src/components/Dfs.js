import React from 'react';
// import  Home from "../page/Home";
import Help from './Help';
import Signup3 from './Signup3';

// import  Contact from "../page/Contact";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import  Navbar1 from "./Navbar1";
import { Container} from "@material-ui/core";


function Dfs() {
    return (
        <BrowserRouter>
    <Container >
    <Navbar1/>
    
    <Switch>
        <Route exact path="/Login" component={Help}/>
        <Route exact path="/Signup" component={Signup3}/>
    </Switch>
    
      </Container>
      </BrowserRouter>
    )
}

export default Dfs;