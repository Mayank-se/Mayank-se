import { render } from "@testing-library/react";
import { Component } from "react/cjs/react.production.min";

class Complex extends Component
{
    constructor()
    {super();
        this.state={
            n:"",
            m:"", 
            o:"",
            p:"", 
            s:"",
            t:"",             
          };


    }
    complex=()=>
    {
        let a=0;
        let b=0;
        
        a=parseInt(this.state.n)+parseInt(this.state.o);
        b=parseInt(this.state.m)+parseInt(this.state.p);
        console.log(a);
        console.log(b);
        this.setState({t:a});
        this.setState({s:b+"i"});

    }
update=(e)=>{
    console.log(e.target.name)
    // this.setState({...this.state,[e.target.name]:e.target.value});
    this.setState({[e.target.name]:e.target.value});
 
};
render(){
    return(
        <div>
            <label>Real:</label>
            <input type="text" name="n" value={this.state.n} onChange={this.update}/>
            <input type="text" name="o" value={this.state.o} onChange={this.update}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Image:</label>
            <input type="text" name="m" value={this.state.m} onChange={this.update}/>
            <input type="text" name="p" value={this.state.p} onChange={this.update}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <lable>Result:</lable>
            <input type="text" name="t" value={this.state.t} onChange={this.update}/>
            <input type="text" name="s" value={this.state.s} onChange={this.update}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.complex}>click me</button>
        </div>
    );
}
}
export default Complex;