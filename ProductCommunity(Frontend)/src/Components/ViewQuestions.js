import React,{useEffect, useState} from "react";
import Header from "./Header";
import Search from "./Search";
import Question from "./Question"
import {useLocation} from 'react-router-dom'
import axios from 'axios'
export default function ViewQuestion() {
  const [questions,setQuestion]=useState([])
   useEffect(() => {
    axios
      .get('http://localhost:8085/api/getAllQuestion')
      .then((response) => {
       setQuestion(response.data);
      })
      .catch(() => {
        console.log("error");
      });
   }, [])
  return (
    <div className="imageCSS" >
      <div >
      <Header/>
      </div>
      <div className="ml-5"> 
        <Search align={false} searchVal={null} />
        </div>
     
      <div className="container">
        {questions.map(function (question,idx) {
          return ( 
        <Question question={question}/>
        )
        })}
          
      </div> 
    </div> 
  );
}
