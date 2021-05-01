import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
//import "../../App.css";
import FormGroup from "react-bootstrap/esm/FormGroup";



export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
	<form>
		<h1>Sign Up for ACM@UTA</h1>
		
		<p> 
			Thank you for your interest in ACM. We provide a variety of services to the students. For more information on ACM services,
			Please contact a ACM officer. 
		</p>
		<h3>Lets get your personal information</h3>

		<div className="form-group">
			<label>First name</label>
			<input type="text" className="form-control" placeholder="First name" />
		</div>

		<div className="form-group">
			<label>Last name</label>
			<input type="text" className="form-control" placeholder="Last name" />
		</div>
		<div className="form-group">
			<label>Phone number</label>
			<input type="text" className="form-control" placeholder="phone number" />
		</div>
		<h3>Now your UTA information</h3>
		<div className="form-group">
			<label>Email address</label>
			<input type="email" className="form-control" placeholder="name@mavs.uta.edu" />
		</div>

		<div className="form-group">
			<label> Create Password</label>
			<input type="password" className="form-control" placeholder="Enter password" />
		</div>

		<div className="form-group">
			<label> Confirm Password</label>
			<input type="password" className="form-control" placeholder="same as original password" />
		</div>

		<div className="form-group">
			<label>Your UTA ID</label>
			<input type="text" className="form-control" placeholder="100000000" />
		</div>
		<div className="form-group">
			<label>Year</label>
			<input type = "text" className="form-control" placeholder="Freshmen" />
		</div>

		<div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">I would like to receive emails from ACM@UTA</label>
                    </div>
                </div>


		<button type="submit" className="btn btn-primary btn-block">Sign Up</button>
		<p className="forgot-password text-right">
			Already registered <a href="/Login">sign in?</a>
		</p>
	</form>
);
  }