import React, { useState } from "react";
import Header from "./Header";
import icon from "../Image/loginButton.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router";
const search = <FontAwesomeIcon icon={faSearch} />;
export default function Search(props) {
  const history=useHistory();
  const [searchParam,setSearchParam]=useState(null);
  function searchRequest(){
    axios.get(`http://localhost:8085/api/searchQuestion?param=${searchParam}`).then((response)=>{
      history.push("/searchQuestion",{data:response.data})
    }).catch((err)=>{
console.log(err);
    })

  }
  return (
    <div className="container " id={props.align ? "align" : "basicAlign"}>
      <div className="row ">
        <div className="col h1 text-white">Search articles</div>
      </div>
      <div className="row ">
        <div className="col">
          <input id="search-input" type="search" className="form-control" placeholder={props.searchVal} onChange={(e)=>{setSearchParam(e.target.value)}}/>
        </div>
        <div className="col" style={{ marginLeft: "-24px" }}>
          <button id="search-button" type="button" className="btn btn-primary" onClick={searchRequest}>
            <i>{search}</i>
          </button>
        </div>
      </div>
    </div>
  );
}
