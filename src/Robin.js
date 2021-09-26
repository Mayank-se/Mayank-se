import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";


class Robin extends Component
{
    constructor()
    {super();
        this.state={
            n:"",
        };


    }
Robin=()=>{
    let x=this.state.n;
    let k=parseInt(x);
    let s=0;
    let d;
    while(x!==0)
    {
        d=x%10;
        s=s+(this.fact(d));
        x=parseInt(x/10);
    }
    console.log(s);
    console.log(k);
    if(s===k)
        this.setState({n:"robin"});  
    else
    this.setState({n:"Not robin"});
}

fact=(t)=>{
     let f=1;
    while(t>0)
    {
        f=f*t;
        t--;
    }
    return(f);
}
update=(e)=>{
    this.setState({n:e.target.value});
}
render(){
    return(
        <div>
            <input type="text" name="t1" value={this.state.n} onChange={this.update}/>
            <button onClick={this.Robin}>click me</button>
        </div>
    );
}
}
export default Robin;