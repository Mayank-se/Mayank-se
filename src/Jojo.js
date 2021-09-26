import { Component } from "react/cjs/react.production.min";
import Feedback from './Feedback';
import Prime from './Prime';

class Jojo extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            st: false,
        };
    }

    checklogin = () => {
        console.log(this.state.email);
        console.log(this.state.password);
        if (this.state.email === "abc" && this.state.password === "xyz") {
            alert("Hello");
            this.setState({ st: true });
        }
        else {
            alert("not login");
        }
    };
    update = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                {this.state.st ? (<Prime/>): (
                        <div>
                            <input type="text" name="email" value={this.state.email} onChange={this.update} />
                            <input type="text" name="password" value={this.state.password} onChange={this.update} />
                            <button onClick={this.checklogin}>click me</button>
                         </div>)}

            </div>
        );
    }
}
export default Jojo;
