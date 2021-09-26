import { Component } from "react/cjs/react.production.min";
import "./Bhalu.css";

class Bhalu extends Component {
    render() {

        return (
            <html>
                <head>

                </head>
                <body>

                    <h1 className="header">Resume</h1>
                    <div >


                        <div  >
                            <p>NAME:Mayank sengar</p>
                            <p>E-mail:<a href="#">mayanksengar1604@gmail.com</a></p>
                            <h3 id="border1">Educational Qualifiaction</h3>
                            <table id="table" >

                                <tr >
                                    <th>Qualification</th>
                                    <th>Board</th>
                                    <th>percentage</th>
                                    <th>year</th>
                                </tr>
                                <tr>
                                    <td>10th</td>
                                    <td>Shivalik</td>
                                    <td>10 C.G.P</td>
                                    <td>2016</td>
                                </tr>
                                <tr>
                                    <td>12th</td>
                                    <td>Shivalik</td>
                                    <td>99.9%</td>
                                    <td>2018</td>
                                </tr>
                                <tr>
                                    <td>Btech</td>
                                    <td>R.B.S.E.T.C</td>
                                    <td>8.9 C.G.P.A</td>
                                    <td>2022</td>
                                </tr>
                            </table>
                            <h3 id="border1">Technical Skills</h3>
                            <p>
                                <ul >
                                    <li id="course-name">Operating Systems:<span id="dfs">Windows, Macintosh Computers (OS X), Linux (Ubuntu, Fedora)</span></li>
                                    <li id="course-name">Application Software:<span id="dfs">Office for Mac 2011, Excel 2003/2007 for Financial Modelling spreadsheets.</span></li>
                                    <li id="course-name">Programming Skills:<span id="dfs">HTML, CSS, Python, JavaScript, learning C and Java</span></li></ul>
                            </p>
                            <h3 id="border1">Personal Information:</h3>
                            <p>
                                <ul >
                                    <li id="course-name">
                                        A young, determined hard and smart working person. I believe in task based roles and complete ownership of work.
                                    </li>
                                    <li id="course-name">Languages Known:English, Hindi</li>
                                    <li id="course-name">Hobbies:I love to sing and  listening music </li>
                                </ul>
                            </p>
                            <h3 id="border1">Declaration</h3>
                            <p id="course-name">
                                I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief.</p>
                        </div>
                    </div>

                </body>
            </html>
        );
    }
}
export default Bhalu;