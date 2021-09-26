
import {Component} from "react";
import './Workertaskdone.css';

export default class Workertaskdone extends Component
{
    render(){
        return(
            <body style={{position:'fixed',top:70,marginLeft:-100}}>

            <div class="Workertaskdoneheader">
              <h1>Work Completed</h1>
            </div>    

                        

            <div class="Workertaskdonerow">
              <div class="Workertaskdonecolumn">
                    <div class="Workertaskdonecard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Anurag
                    <p>Date assigned: 01/02/2020</p>
                    <p>Status: Completed</p></h4>
                    </div>
                    
                    <div class="Workertaskdonecard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Azaan
                    <p>Date assigned: 02/05/2020</p>
                    <p>Status: Completed</p></h4>
                    </div>
                    
                    <div class="Workertaskdonecard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Shubhi
                    <p>Date assigned: 03/08/2020</p>
                    <p>Status: Completed</p></h4>
                    </div>
                    
                    <div class="Workertaskdonecard">
                    <h2>Task Name</h2>
                    <br/>
                    <h4>By Mayank
                    <p>Date assigned: 04/11/2020</p>
                    <p>Status: Completed</p></h4>
                    </div>
                </div>
            </div>
            
            </body>);
    }
}