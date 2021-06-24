import React, { useState } from "react";
import { convertCommentFromJSONToHTML } from "../Function/editorFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const likeIcon = <FontAwesomeIcon icon={faThumbsUp} />;
export default function Comment(props) {
  const comment = props.comment;
  const [commentLike, setCommentLike] = useState(comment.like.length);
  function like() {
    axios
      .post("http://localhost:8085/api/likeComment", {
        likeCommentId: comment.commentId,
      })
      .then((response) => {
        setCommentLike(response.data);
      });
  }

  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="card-title h3">{comment.comment}</div>
        <div className="card-text" style={{ display: "flex" }}>
          <div>By:{comment.commentedBy}</div>
          <div style={{ marginLeft: "5px" }}>
            Date:{new Date(comment.date).toLocaleDateString()}
          </div>
        </div>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{
            __html: convertCommentFromJSONToHTML(comment.body),
          }}
        />
        <div className="card-text" onClick={like}>
          <i>{likeIcon}</i>
          {commentLike}
        </div>
      </div>
    </div>
  );
}
