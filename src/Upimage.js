import { Component } from "react";
import axios from "axios";
class Dis_img extends Component{

    constructor(){

        super();
        this.state={
            kalu:[],
        }
    }

    componentDidMount(){
        axios.get("http://localhost/Display.php").then(response=>{
            this.setState({kalu:response.data})
            }).catch(err=>{
                console.log("failed");
            })
    }

    render(){
        return(<div>
            {
            this.state.kalu.map((ag,key)=>
                    <div key={key+(ag.filename)}>
                        <img src={"http://localhost/images/"+ag.filename+"1.jpg"} height={200} width={200} alt="images not found"></img>
                    </div>)
                }
           </div>);
    }
}

export default Dis_img;