import { Component } from 'react';
import"./Login2.css";
// import axios from 'axios';

export default class sas extends Component
{  
    render()
    {
        return(
                <html lang="en" dir="ltr">
                <body>   
                    <div class="Loginmain">
                            
                            <div class="axa" align="center">

                                {/* <img src="/servicex.jpg"  width="200" height="200"></img> */}
                           
                            </div>
                            
                            <h1>Login</h1>
                            
                            <form method="post">
                                
                                <div class="txt_field">
                                    <input type="text" required/>
                                    <span></span>
                                    <label>username</label>
                                </div>
                                
                                <div class="txt_field">
                                    <input type="Password" required/>
                                    <span></span>
                                    <label>Password</label>
                                </div>
                                
                                <div class="pass">Forget Password?</div>
                            
                                <input type="submit" value="login"/>
                                <div class="signup">
                                    Not a memeber? <a href="./Signup">signup</a>    
                                </div>   
                            </form>	
                    </div>
                </body>
                </html>)
    }
}