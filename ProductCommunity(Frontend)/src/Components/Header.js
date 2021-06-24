import React from "react";
import icon from "../Image/loginButton.png";
import { useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
export default function Header() {
  const history = useHistory();
  function postQuestion() {
    history.push("/post");
  }
  function getAllQuestion() {
    history.push("/viewMyQuestion");
  }
  function logOut() {
    axios.post("http://localhost:8085/api/logout").then(() => {
      localStorage.removeItem("token");
      history.push("/");
    });
  }
  function home() {
    history.push("/welcome");
  }
  return (
    <div className="nav">
      <div className="container-fluid">
        <div className="row flex-row-reverse">
          <div className="col-sm-2 ">
            <Dropdown>
              <Dropdown.Toggle variant="none">
                <img src={icon} width="50" height="50" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={logOut}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-sm-2 m-2 btn btn-warning" onClick={() => home()}>
            Home
          </div>
          <div
            className="col-sm-2 m-2 btn btn-warning"
            onClick={() => getAllQuestion()}
          >
            View My Question
          </div>
          <div
            className="order-1 col-sm-2 m-2 btn btn-warning"
            onClick={() => postQuestion()}
          >
            New Question
          </div>
        </div>
      </div>
    </div>
  );
}
