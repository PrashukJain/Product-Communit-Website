import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const eye = <FontAwesomeIcon icon={faEye} />;
export default function Login() {
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    email: null,
    password: null,
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }
  function login() {
    axios
      .post("http://localhost:8085/api/authenticateUser", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.data === "") {
          setValid(true);
          // history.push("/login");
        } else {
          localStorage.setItem("token", response.data.token);
          history.push("/welcome");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="imageCSS">
      <div className="container mt-5 styleContainer" style={{ height: "85vh" }}>
        <div className="h1">Login</div>
        <div className="container w-50 alignCenter ">
          {valid ? (
            <div className="row">
              <div className="col text-danger">
                Invalid Username and Password
              </div>
            </div>
          ) : null}
          <div className="row m-3 ">
            <div className="col-sm-8">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => {
                  handle(e);
                }}
              />
            </div>
          </div>

          <div className="row m-3">
            <div className="col-sm-8" style={{ display: "flex" }}>
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                onChange={(e) => {
                  handle(e);
                }}
              />
              <i
                onClick={togglePasswordVisiblity}
                style={{ marginLeft: "-30px", marginTop: "3px" }}
              >
                {eye}
              </i>
            </div>
          </div>
          <div className="row mt-4 text-center">
            <div className="col">
              <button
                className="btn btn-dark rounded-pill"
                style={{ minWidth: "77px", marginRight: "4px" }}
                onClick={() => login()}
              >
                Login
              </button>
              <Link to="/register" className="btn btn-dark rounded-pill">
                SignUp
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
