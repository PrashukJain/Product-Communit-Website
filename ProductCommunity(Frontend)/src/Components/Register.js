import React, { useState } from "react";
import "../CSS/register.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import validator from 'validator'
export default function Register() {
  const history = useHistory();
  const [data, setData] = useState({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    confirmPassword:null
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }
  function submit() {
    if(data.email==null||data.firstName==null||data.lastName==null||data.password==null||data.confirmPassword==null)
    alert('Please fill all required fields......')
    else if(!validator.isEmail(data.email)){
      alert('Please Enter valid Email')
    }
    else if(data.confirmPassword !== data.password){
    alert('Please enter same password and confirm password ')}
    else if(!validator.isStrongPassword(data.password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })){
      alert('Please enter the Strong Password Containing minimum length:8 And minimum(1LowerCase alphabet,1 UpperCase Alphabet,1 Digit,1 specialSymbol)');
    }
   else{
    axios
      .post("http://localhost:8085/api/createUser",{
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      })
      .then((res) => {
        if (!res.data) alert(`User already exist`);
        history.push("/login");
      })
      .catch((err) => {});
    }
  }
  return (
    <div className="imageCSS">
      <div className="container mt-4 styleContainer">
        <div className="h1">Registration</div>
        <div className="container w-75" id="align">
          <div className="row m-2 ">
            <div className="col">
              <input
                className="form-control"
                type="email"
                placeholder="Email*"
                name="email"
                onChange={(e) => {
                  handle(e);
                }}
                required
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="FirstName*"
                name="firstName"
                onChange={(e) => {
                  handle(e);
                }}
                required
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="LastName*"
                name="lastName"
                onChange={(e) => {
                  handle(e);
                }}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col">
            <input
                className="form-control"
                type="password"
                placeholder="Password*"
                onChange={(e) => {
                  handle(e);
                }}
                name="password"
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="password"
                placeholder="ConfirmPassword*"
                onChange={(e) => {
                  handle(e);
                }}
                name="confirmPassword"
              />
            </div>
          </div>
          <div className="row mt-4 text-center">
            <div className="col">
              <button
                className="btn btn-dark rounded-pill"
                onClick={() => submit()}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/login" className="mt-4 float-end">
                Have an account already?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
