import React from "react";
import Header from "./Header";
import { useHistory, useLocation } from "react-router-dom";
import { convertCommentFromJSONToHTML } from "../Function/editorFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment } from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";
const clockIcon = <FontAwesomeIcon icon={faClock} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;
export default function QuestionDetail() {
  const history = useHistory();
  const location = useLocation();
  const question = location.state.data;
 
  const comments = question.comments;
  function handleClick() {
    history.push("/reply", {
      id: question.questionId,
      subject: question.question,
    });
  }
  const length = comments.length;
  return (
    <div className="imageCSS">
      <Header />
      <div className="container">
        <div className="card m-2 " style={{backgroundColor: '#00ffee'}}>
          <div className="card-body">
            <div className="card-title h3">{question.question}</div>
            <div className="card-text" style={{ display: "flex" }}>
              <div>By:{question.author}</div>
              <div style={{ marginLeft: "5px" }}>
                <i>{clockIcon}</i>:
                {new Date().toLocaleDateString(question.Date)}
              </div>
            </div>
            <div className="card-subtitle text-secondary h3">Product Code:{question.productCode}</div>
           
            <div
              dangerouslySetInnerHTML={{
                __html: convertCommentFromJSONToHTML(question.body),
              }}
            />
            <div className="card-text m-2">
              <i>{commentIcon}</i>:{length}
            </div>
            <button
              className="btn btn-dark rounded-pill"
              onClick={handleClick}
              o
              style={{ minWidth: "77px", marginRight: "24px", float: "right" }}
            >
              Reply
            </button>
          </div>
        </div>
        {comments.map((comment, idx) => {
          return <Comment comment={comment} key={idx} />;
        })}
      </div>
    </div>
  );
}
