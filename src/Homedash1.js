// Program for Homedashboard

import { Component } from "react";
import './Homedash.css';
import Login from "./Login";
import Signup from "./Signup";
import Customerdashboard from "./Customerdashboard";
import Maidlist from "./Maidlist";
import Support from "./Support 1";
import About from "./About";
import Terms from "./Terms"; 

export default class Homedash extends Component
{
    constructor()
    {
        super();
        this.state={
            hi:false,
            hu:false,
            hd:false,
            hw:false,
            hs:false,
            ha:false,
            ht:false,
        };
    }

    homedashlogin=()=>{
            this.setState({hi:true});
    }
    homedashsignup=()=>{
        this.setState({hu:true});
    }

    homedashdash=()=>{
        this.setState({hd:true});
        }
    homedashworker=()=>{
        this.setState({hw:true});
    }
    homedashsupport=()=>{
        this.setState({hs:true});
    }
    homedashabout=()=>{
        this.setState({ha:true});
    }
      homedashterms=()=>{
    this.setState({ht:true});
    }


    render(){
        return(
            <body>
                <div>
                    <div class="Homeheader">
                        <table class="Hometableaa">
                        <tr>
                            
                            <td class="Homedahtdaa">
                            <div class="Homedashgalleryaa">
                                <img src="F Name.png" />
                            </div>
                            </td>
                            
                            <td class="Homedahtdbb">
                            <div class="Homedashgallerybb">
                                {this.state.hi?(<Login/>):
                                (<img src="Login.png" onClick={this.homedashlogin}/>)
                                }
                            </div>
                            </td>
                            
                            <td class="Homedahtdbb">
                            <div class="Homedashgallerybb">
                                {this.state.hu?(<Signup/>):
                                (<img src="Signup.png" onClick={this.homedashsignup}/>)
                                }
                            </div>
                            </td>

                        </tr>
                        </table>
                    </div>
                    
                    <div class="Hometopnavi">
                            <a>Home</a>

                                {this.state.hd?(<Customerdashboard/>):
                                    (<a onClick={this.homedashdash}>Dashboard</a>)
                                }

                                {this.state.hw?(<Maidlist/>):
                                    (<a onClick={this.homedashworker}>Workers</a>)
                                }

                                {this.state.hs?(<Support/>):
                                    (<a class="Hometopsupport" onClick={this.homedashsupport}>Support</a>)
                                }

                    </div>
                
                    <div class="row">
                        <div class="dashcolumn">
                            <div class="card">
                                <h2>
                                    <div class="Homedashgallery">
                                    <img src="Servicex.jpg" alt="Cinque Terre" width="500" height="100"></img>
                                    </div>
                                </h2>
                            <br/>
                                <h3>
                                <p class="Homewriteaa">Just one tap Service at your Doorstep.</ p>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="Homefooter">
                    <table class="Hometablebb">
                    <tr>
                        <td class="Homedahtdcc">
                        {this.state.ha?(<About/>):
                            (<a onClick={this.homedashabout}>About</a>)}
                        </td>
                        <td class="Homedahtdcc">
                            <a>Help</a>
                        </td>
                        <td class="Homedahtdcc">
                            <a>Contact</a>
                        </td>
                        <td class="Homedahtdcc">
                        {this.state.ht?(<Terms/>):
                                (<a onClick={this.homedashterms}>Terms and Conditions</a>)}
                        </td>
                    </tr>
                    </table>
                    </div>
                </div>
            </body>
              );
    }
}