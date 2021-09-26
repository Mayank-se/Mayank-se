import React, { Component } from 'react';

import Base2 from './Base2';
import Base3 from './Base3';

export default class sas extends Component
{  constructor()
    {
        super();
        this.state={
            email:"",
            password:"",
            st:false,
            sg:false,
            
        };
    }
    checklogin=()=>{
        console.log(this.state.email);
        console.log(this.state.password);
        if(this.state.email ==="abc" && this.state.password === "xyz")
        {
            alert("hello");
            this.setState({st:true});
        }
        if(this.state.email ==="xyz" && this.state.password === "abc")
        {
            alert("hello");
            this.setState({sg:true});
        }   
    }
    updatetext=(e)=>{
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    render()
    {
        return(
                <html lang="en" dir="ltr">
                <body>
                {this.state.sg?(<Base3/>):(
                <div>
                {this.state.st?(<Base2/>):                            
                ( 
                    <div class="Loginmain" style={{position:'fixed',top:200,left:650}}>
                            
                           <form method="post">
                            <h1><center>ServiceX Login</center></h1>

                                <div class="txt_field">
                                    <input type="text" name="email"
                                        value={this.state.email}
                                        onChange={this.updatetext} style={{width:500}} />
                                    <span></span>
                                    <label>username</label>
                                </div>
                                
                                <div class="txt_field">
                                    <input type="Password" name="password"
                                        value={this.state.password}
                                        onChange={this.updatetext} />
                                    <span></span>
                                    <label>Password</label>
                                </div>
                                
                                <div class="pass" >Forget Password?</div>
                            
                                <input type="submit" value="login" onClick={this.checklogin}/>
                                <div class="signup" style={{marginTop:20}}>
                                    Not a memeber? <a href="./Signup">signup</a>    
                                </div>   
                            </form>
                    </div>
                )}
                </div>
                )}	
                </body>
                </html>)
    }
}