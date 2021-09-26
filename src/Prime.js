import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

class Prime extends Component
{
    constructor()
    {super();
        this.state={
            n:"",
        };
    }

prime=()=>{
    let x=this.state.n;
    let c=0;
    for(let i=2;i<=x;i++)
        if(x%i==0)
            {
            c++;
            }
        if(c==1)
         this.setState({n:"prime"});
        else
         this.setState({n:"no"});
       
}
update=(e)=>{
    this.setState({n:e.target.value});
}
render(){
    return(
        <div>
            <input type="text" name="t1" value={this.state.n} onChange={this.update}/>
            <button onClick={this.prime}>click me</button>
        </div>
    );
}
}
export default Prime;