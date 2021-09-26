
import {Component} from "react";
import './Workassigned.css';

export default class Workassigned extends Component
{
    render(){
        return(
            <body style={{position:'fixed',top:70,marginLeft:-185}}>

            <div class="Workassignedheader">
              <h1>Work Confermation</h1>
            </div>    

                        

            <div class="Workassignedrow">
              <div class="Workassignedcolumn">
                    <div class="Workassignedcard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Customer Name
                    <p>Date assigned: Conformation Required</p>
                    <button type="button" class="Workassignedblockaa">Accept</button>
                    <button type="button" class="Workassignedblockbb">Reject</button></h4>
                    </div>
                    
                    <div class="Workassignedcard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Customer Name
                    <p>Date assigned: Conformation Required</p>
                    <button type="button" class="Workassignedblockaa">Accept</button>
                    <button type="button" class="Workassignedblockbb">Reject</button>
                    </h4>
                    </div>
                    
                    <div class="Workassignedcard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Customer Name
                    <p>Date assigned: Conformation Required</p>
                    <button type="button" class="Workassignedblockaa">Accept</button>
                    <button type="button" class="Workassignedblockbb">Reject</button></h4>
                    </div>
                    
                    <div class="Workassignedcard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Customer Name
                    <p>Date assigned: Conformation Required</p>
                    <button type="button" class="Workassignedblockaa">Accept</button>
                    <button type="button" class="Workassignedblockbb">Reject</button></h4>
                    </div>
                </div>
            </div>
            
            </body>);
    }
}