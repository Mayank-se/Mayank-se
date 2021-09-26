import React, { Component } from 'react';
import"./Signup.css";
class aza extends Component
{
    
    render()
    {
        return(<html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8"/>
            <title>signup</title>
            
        </head>
        <body>
            <div class="center"  style={{position:'fixed',top:450,left:820}} >
                <div>
                    <h1 style={{marginLeft:80}}>ServiceX Signup</h1>
                    </div>
                            <form  method="post">
                                <div class="txt_field" style={{width:400}}>
                                    <input type="text" />
                                    <span></span>
                                    <label>First Name:</label>
                                </div>
                                <div class="txt_field" style={{width:400}}>
                                    <input type="text" />
                                    <span></span>
                                    <label>Last Name:</label>
                                </div>
                                <div class="txt_field" style={{width:400}}>
                                    <input type="Password" pattern=".{4,8,@}"  title="must contain 4 to 8 char"/>
                                    <span></span>
                                    <label>Password:</label>
                                </div>
                                <div class="txt_field" style={{width:400}}>
                                    <input type="Password" pattern=".{4,8,@}"  title="must contain 4 to 8 char"/>
                                    <span></span>
                                    <label>Re-Password:</label>
                                </div>
        
        
                                <div class="asa" style={{color:'#2691d9'}}>
                                <label style={{color:'#2691d9'}}>Birthday:
                                    <select name="Month" style={{color:'#2691d9'}}>
                                        <option>Month</option>
                                        <option>jan</option>
                                        <option>feb</option>
                                        <option>mar</option>
                                    </select>
                                    <select name="Date" style={{color:'#2691d9'}}>
                                        <option>Date</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>	
                                    <select name="Year" style={{color:'#2691d9'}} >
                                        <option>Year</option>
                                        <option>1999</option>
                                        <option>2000</option>
                                        <option>2001</option>
                                    </select>
                                </label>
                            </div>
        
                            <div class="aza">
                                <label for="male" style={{color:'#2691d9'}}>Male:</label>
                                <input id="male" type="radio" name="gender" value="male"/>
                                <label for="female" style={{color:'#2691d9'}}>Female:</label>
                                <input id="female"  type="radio" name="gender" value="female" style={{color:'#2691d9'}}/>
                                <label for="other" style={{color:'#2691d9'}}>Other:</label>
                                <input id="other"  type="radio" name="gender" value="other" style={{color:'#2691d9'}}/>
                            </div>
        
                            <div class="pass">
                                <label for="agreed" style={{color:'#2691d9'}}>I agree to the terms and conditions</label>
                                <input type="checkbox" name="agreed" id="agreed"/>
                            </div>
                                
                                <input type="submit" value="Join" style={{width:400}}/>
                                
                            </form>	
            </div>
        </body>
        </html>
                        )
    }
}
export default aza;