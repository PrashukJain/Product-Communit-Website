import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
axios.interceptors.request.use(
  function (request) {
    if (
      !request.url.includes("users") &&
      !request.url.includes("createUser") &&
      !request.url.includes("authenticateUser") &&
      !request.url.includes("questions")
    ){
      request.headers["token"]=localStorage.getItem("token")
    }

      return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
