import { Component } from "react";

import { TextField, Button } from "@material-ui/core";

import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: "",
            Dropdown: "",
            Comment: "",
        };
    }
    fun(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData(ev) {
        const Name = this.state.Name;
        const Email = this.state.Email;
        const Dropdown = this.state.Dropdown;
        const Comment = this.state.Comment;
        const data = {
            Name, Email, Dropdown, Comment
        };

        axios.get('http://localhost/jsodel.php', { params: data }).then(bhalu => {
            console.log(bhalu);
            this.setState({ message: bhalu.data.response })
        }).catch(err => { console.log("failed"); })
    }

    render() {

        return (
            <html>
                <head>

                </head>
                <body align="center" style={{position: "fixed",left:730,top:180}}>
                    <form id="form">
                        <h1 style={{marginLeft:140}}>Feedback Form</h1>
                        <div class="form-control">
                            <TextField
                                id="standard-password-input"
                                label="Name"
                                name="Name"
                                value={this.state.Name}
                                onChange={this.fun.bind(this)}
                                type="Name"
                                autoComplete="current-password"
                                style={{
                                    width: 432,
                                    marginLeft: 16,
                                    marginBottom:10,marginTop:-10
                                }}
                            />
                        </div>

                        <div class="form-control">



                            <TextField
                                id="standard-password-input"
                                label="Email"
                                name="Email"
                                value={this.state.Email}
                                onChange={this.fun.bind(this)}
                                type="Email"
                                autoComplete="current-password"
                                style={{
                                    width: 432,
                                    marginLeft: 16
                                }}
                            />
                        </div>



                        <div class="form-control">

                            <label for="role" id="label-role">
                                <h1 style={{    position: "fixed",textAlign:"left",marginTop:10,marginLeft:20}}><b>Rate your experience</b></h1>
                            </label>
                            <TextField
                                id="standard-password-input"
                                label="Rating"
                                name="Dropdown"
                                value={this.state.Dropdown}
                                onChange={this.fun.bind(this)}
                                type="Dropdown"
                                autoComplete="current-password"
                                style={{
                                    width: 432,
                                    marginLeft: 16,marginTop:55,marginBottom:34
                                }}
                            />


                        </div>
                        <div class="form-control">
                            <label for="comment" style={{ position:"relative",textAlign:"left",marginLeft:22}}>
                                Describe Your Feedback:
                            </label>
                            <TextField
                                id="standard-password-input"
                                label="Write here comment"
                                name="Comment"
                                value={this.state.Comment}
                                onChange={this.fun.bind(this)}
                                type="Comment"
                                autoComplete="current-password"
                                style={{
                                    width: 432,
                                   marginLeft:14,
                                    marginTop: 30,
                                    marginBottom: 34
                                }}
                            />
                        </div>


                        <Button className="update" onClick={this.sendData.bind(this)} variant="contained" color="secondary" style={{ marginTop: 4,marginLeft:22}}>
                            Submit
                        </Button>

                    </form>
                </body>

            </html>
        );
    }
}