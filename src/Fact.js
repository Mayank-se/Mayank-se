import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

class Fact extends Component
{
    constructor()
    {super();
        this.state={
            n:"",
        };


    }

fact=()=>{
    let x=this.state.n;
    let f=1;
    while(x>0)
    {
        f=f*x;
        x--;
    }
this.setState({n:f});
}
update=(e)=>{
    this.setState({n:e.target.value});
}
render(){
    return(
        <div>
            <input type="text" name="t1" value={this.state.n} onChange={this.update}/>
            <button onClick={this.fact}>click me</button>
        </div>
    );
}
}
export default Fact;