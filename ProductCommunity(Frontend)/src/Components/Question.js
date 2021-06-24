import React from "react";
import { getQuestion } from "../Service/service";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment } from "@fortawesome/free-solid-svg-icons";
const clockIcon = <FontAwesomeIcon icon={faClock} />;
const commentIcon = <FontAwesomeIcon icon={faComment} />;
export default function Question(props) {
  const history = useHistory();
  const question = props.question;
  const length=question.comments.length;
  function handleClick() {
    const questionId = question.questionId;
    getQuestion(questionId)
      .then((response) => {
        history.push("/question", { data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="card m-2 hover" onClick={handleClick}>
      <div className="col-sm-10">
        <div className="card-body">
          <div className="card-title h3">{question.productCode}</div>
          <div className="card-text" style={{ display: "flex" }}>
            <div>By:{question.author}</div>
            <div style={{ marginLeft: "5px" }}>
              <i>{clockIcon}</i>
              {new Date(question.date).toLocaleDateString()}
            </div>
          </div>
          <div className="card-text"> {question.question}</div>
          <div className="card-text">    <i>{commentIcon}</i>:{length}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
