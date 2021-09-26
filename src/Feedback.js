import { Component } from "react/cjs/react.production.min";
// import "./Feedback.css";

class Feedback extends Component {
    render() {
        return (
            <html>

                <head>

                </head>

                <body>
                    <form id="form">


                        <h1>Feedback Form</h1>
                        <div class="form-control">
                            <label for="name" id="label-name">
                                Name
                            </label>


                            <input type="text"
                                id="name"
                                placeholder="Enter your name" />
                        </div>

                        <div class="form-control">
                            <label for="email" id="label-email">
                                Email
                            </label>


                            <input type="email"
                                id="email"
                                placeholder="Enter your email" />
                        </div>



                        <div class="form-control">
                            <label for="role" id="label-role">
                                <h1><b>Rate your experience</b></h1>
                            </label>


                            <select name="role" id="role">

                                <option value="intern">Excellent</option>
                                <option value="professional">
                                    Very good
                                </option>
                                <option value="other">good</option>
                                <option value="student">Dissatisfied</option>
                            </select>

                        </div>

                        <div class="form-control">
                            <label>
                                Tell us what can be improve ?
                            </label>


                            <label for="recommed-1">
                                <input type="radio"
                                    id="recommed-1"
                                    name="recommed">Overall Service</input>
                            </label>
                            <label for="recommed-2">
                                <input type="radio"
                                    id="recommed-2"
                                    name="recommed">Customer support</input>
                            </label>
                            <label for="recommed-3">
                                <input type="radio"
                                    id="recommed-3"
                                    name="recommed">Transparency</input>
                            </label>
                        </div>




                        <div class="form-control">
                            <label for="comment">
                                Describe Your Feedback:
                            </label>


                            <textarea name="comment" id="comment"
                                placeholder="Enter your comment here">
                            </textarea>
                        </div>


                        <button type="submit" value="submit">
                            Submit
                        </button>
                    </form>
                </body>

            </html>

        );
    }
}
export default Feedback;