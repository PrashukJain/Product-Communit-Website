import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const history = useHistory();

  const email = localStorage.getItem("userEmail");
  const [subject, setSubject] = useState(null);
  const [productCode, setProductCode] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  function handleRequest() {
    const raw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    axios
      .post("http://localhost:8085/api/addQuestion", {
        question: subject,
        productCode: productCode,
        date: Date.now(),
        body: raw,
      })
      .then((response) => {
        console.log(response.data);
        history.push("/welcome");
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="imageCSS">
      <div className="container mt-4 styleContainer">
        <div className="h1">Post Page</div>
        <div className="container w-75">
          <div className="row m-2 ">
            <div className="col">Subject</div>
          </div>
          <div className="row m-2 ">
            <div className="col">
              <input
                className="form-control"
                type="text"
                name="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col">Product Code</div>
          </div>
          <div className="row m-2 ">
            <div className="col">
              <input
                className="form-control"
                type="text"
                name="productCode"
                onChange={(e) => {
                  setProductCode(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col">Body</div>
          </div>
          <div className="row m-2">
            <div className="col">
              <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                onEditorStateChange={onEditorStateChange}
                editorStyle={{
                  border: "1px solid",
                  minHeight: "150px",
                  backgroundColor: "white",
                  maxHeight: "150px",
                }}
                name="question"
              />
            </div>
          </div>
          <div className="row mt-4 text-center">
            <div className="col">
              <Link to="/" className="btn btn-dark rounded-pill m-2">
                Cancel
              </Link>
              <button
                className="btn btn-dark rounded-pill"
                onClick={handleRequest}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
