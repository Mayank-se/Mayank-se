// Program for Customerdashboard

import { Component } from "react";
import './Customerdashboard1.css';


export default class Customerdashboard extends Component
{
    constructor()
    {
        super();
        this.state={
            ci:false,
            cu:false,
            cd:false,
            cw:false,
            cf:false,
            cs:false,
            ca:false,
            ct:false,
        };
    }

    Customerlogin=()=>{
            this.setState({ci:true});
    }
    Customersignup=()=>{
        this.setState({cu:true});
    }
    Customerdash=()=>{
        this.setState({cd:true});
        }
    Customerworker=()=>{
        this.setState({cw:true});
    }
    Customerfeedback=()=>{
        this.setState({cf:true});
        }
    Customersupport=()=>{
        this.setState({cs:true});
    }
    Customerabout=()=>{
        this.setState({ca:true});
    }
    Customerterms=()=>{
    this.setState({ct:true});
    }


    render(){
        return(
            <body style={{position: "fixed",left:600,top:100}}>
                <div>
                    <div class="Customerheader">
                        <h1>Worker Categories</h1>
                    </div>
                            
                    {/* <div class="Customertopnavi">
                        <a >Home</a>
                        <a >Dashboard</a>

                        {this.state.cs?(<Support/>):
                            (<a class="Customerfeed" onClick={this.Customersupport}>Support</a>)
                        }
                        
                        {this.state.cf?(<Feedback/>):
                            (<a class="Customerfeed" onClick={this.Customerfeedback}>Feedback</a>)
                        }
                        
                    </div>
                             */}
                    <div class="Customerrow">
                        <div class="Customercolumn side">   
                            <h2>
                            <div class="Customergallery">
                                <img src="Customer.jpg"  width="600" height="400"></img>
                            </div>
                            </h2>
                            {/* {this.state.cw?(<Maidlist/>):
                                ()
                            } */}
                            <button type="button" class="Customerblockaa" onClick={this.Customerworker}>Maid</button>
                        </div>
                                
                        <div class="Customercolumn middle">
                            <h2><div class="Customergallery">
                                <img src="Service.png"  width="600" height="400"></img>
                            </div></h2>
                            <button type="button" class="Customerblockbb">Electrician</button>
                        </div>
                                
                        <div class="Customercolumn side">
                            <h2><div class="Customergallery">
                                <img src="Customer.jpg"  width="600" height="400"></img>
                            </div></h2>
                            <button type="button" class="Customerblockcc">Worker</button>
                        </div>
                    </div>
                
                    {/* <div class="Customerfooter">
                        <table class="Customertablebb">
                        <tr>
                            <td class="Customertdcc">
                            {this.state.ca?(<About/>):
                                (<a onClick={this.Customerabout}>About</a>)}
                            </td>
                            <td class="Customertdcc">
                                <a>Help</a>
                            </td>
                            <td class="Customertdcc">
                                <a>Contact</a>
                            </td>
                            <td class="Customertdcc">
                            {this.state.ct?(<Terms/>):
                                    (<a onClick={this.Customerterms}>Terms and Conditions</a>)}
                            </td>
                        </tr>
                        </table>
                    </div> */}
                </div>
                </body>);
    }
}