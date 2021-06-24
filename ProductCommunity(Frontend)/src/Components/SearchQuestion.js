import React from 'react'
import Header from "./Header";
import Search from "./Search";
import Question from "./Question"
import {useLocation} from 'react-router-dom'
export default function SearchQuestion() {
    const location = useLocation();
    const questions= location.state.data;
    const length=questions.length;
    return (
        <div className="imageCSS" >
      <div >
      <Header/>
      </div>
      <div className="ml-5"> 
        <Search align={false} searchVal={null} />
        </div>
       
      <div className="container">
      {length>0 ? (
        questions.map(function (question,idx) {
          return ( 
        <Question question={question} key={idx}/>
        )
        }))
        :
        (<div className="card m-5">
          <div className="card-title " style={{fontSize:'30px'}}>
            No Result Found
            </div>
        </div>)}
          
      </div> 
    </div>
    )
}
