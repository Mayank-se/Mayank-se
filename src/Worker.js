
import {Component} from "react";
import { TextField,Button} from "@material-ui/core";

class Worker extends Component
{
    constructor(props){
        super(props);
        this.setState={k:"",m:""};
    }
    render(){
        return(<div style={{position:'fixed',top:80,left:450,boxSizing:'border-box'}}>
            <div className="hi">
            
            <div className="main">
              
            </div>
            <table className="na">
                <tbody>
                    <tr><td className="mu">
                    <input className="hell" type="file" id="file" accept="image/*" required/>
                        <label for="file" style={{marginRight:32,marginLeft:-32}}><Button className="update"  variant="contained" color="secondary" style={{ marginTop: 4 }}>
                    Upload a image
                        </Button></label>
                    
                    </td>
                    <td>
                    <h3>Name</h3><tr><h3></h3><td>   <div> <TextField
                                id="standard-password-input"
                               label="Name"
                                name="Name"
                               
                                type="Name"
                                autoComplete="current-password"
                              
                            />
                        </div></td>
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td> <div> <TextField
                                id="standard-password-input"
                               label="Last Name"
                                name="Last Name"
                               
                                type="Last Name"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr>
                    <br/> 
                    <h3>Personal Information</h3><tr><td><div> <TextField
                                id="standard-password-input"
                               label="father's name"
                                name="father's name"
                               
                                type="father's name"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="date of birth"
                                name="date of birth"
                               
                                type="date of birth"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr><br/>
                    <tr><td><div> <TextField
                                id="standard-password-input"
                               label="Mobile_no"
                                name="Mobile_no"
                               
                                type="Mobile_no"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="Education"
                                name="Education"
                               
                                type="Education"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr><br/>
                    <h3>Mandatory</h3><tr><td><div> <TextField
                                id="standard-password-input"
                               label="aadhar no"
                                name="aadhar no"
                               
                                type="aadhar no"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="skills"
                                name="skills"
                               
                                type="skills"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr><br/>
                    <h3>Current Address</h3><tr><td><div> <TextField
                                id="standard-password-input"
                               label="state"
                                name="state"
                               
                                type="state"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="city"
                                name="city"
                               
                                type="city"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr>
                    <tr><td><div> <TextField
                                id="standard-password-input"
                               label="locality"
                                name="locality"
                               
                                type="locality"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="pincode"
                                name="pincode"
                               
                                type="pincode"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr><br/>
                    <h3>Permanent Address</h3><tr><td><div> <TextField
                                id="standard-password-input"
                               label="state"
                                name="state"
                               
                                type="state"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="city"
                                name="city"
                               
                                type="city"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr>
                    <tr><td><div> <TextField
                                id="standard-password-input"
                               label="locality"
                                name="locality"
                               
                                type="locality"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="pincode"
                                name="pincode"
                               
                                type="pincode"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr>
                    <tr><td><div> <TextField
                                id="standard-password-input"
                               label="house_no"
                                name="house_no"
                               
                                type="house_no"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <td><div> <TextField
                                id="standard-password-input"
                               label="landmark"
                                name="landmark"
                               
                                type="landmark"
                                autoComplete="current-password"
                              
                            />                       
                        </div></td></tr><br/>
                        <h3>Work mode</h3> <td><div> <TextField
                                id="standard-password-input"
                                autoComplete="current-password"
                              style={{marginTop:-10,marginBottom:4}}
                            />                       
                        </div></td>
                    <tr><td>
                    <Button className="update" variant="contained" color="secondary" style={{ marginTop: 4,marginRight:30 }}>
                        Edit Detail
                        </Button>
                   
                    </td>
                    
                        <td>
                        <Button className="update"  variant="contained" color="secondary" style={{ marginTop:6 }}>
                        VERIFY
                        </Button>
                            
                        </td>
                    </tr>
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>);
    }
}
export default Worker;