import React, { useState, useEffect } from "react";
import "../CSS/home.css";
import icon from "../Image/loginButton.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../CSS/common.css";
import axios from "axios";
const userIcon = <FontAwesomeIcon icon={faUsers} />;
const postIcon = <FontAwesomeIcon icon={faEnvelope} />;
export default function Home() {
  const [members, setMembers] = useState(0);
  const [posts, setPosts] = useState(0);
  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8085/api/users"),
        axios.get("http://localhost:8085/api/questions"),
      ])
      .then((response) => {
        setMembers(response[0].data);
        setPosts(response[1].data);
      })
      .catch((errors) => {
        // react on errors.
      });
  }, []);
  return (
    <div className="imageCSS">
      <div className="headerPart">
        <Link to="/login" className="link">
          <img src={icon} width="50" height="50" alt="profile" />
          Login/Register
        </Link>
      </div>
      <div className="container " id="align">
        <div className="row">
          <div className="h1 text-white">The Community</div>
          <div className="row">
            <div className="h3 text-white">
              Find Ideas. Ask Questions . Share Ideas .
            </div>
          </div>
        </div>
        <div
          className="row mt-5"
          style={{ justifyContent: "center", color: "yellow" }}
        >
          <div className="col-sm-3 ">
            <div className="row">
              <div className="col">
                <i style={{ fontSize: "3.5em", color: "cornsilk" }}>
                  {userIcon}
                </i>
              </div>
              <div className="col">
                <div className="row" style={{ fontSize: "30px" }}>
                  {members}
                </div>
                <div className="row">Members</div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="row">
              <div className="col">
                <i style={{ fontSize: "3.5em", color: "cornsilk" }}>
                  {postIcon}
                </i>
              </div>
              <div className="col">
                <div className="row" style={{ fontSize: "30px" }}>
                  {posts}
                </div>
                <div className="row">Posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
