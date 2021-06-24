import React,{useState}from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link,useLocation,useHistory } from "react-router-dom";
import axios from 'axios';
export default function Replypage(props) {
  const location = useLocation();
  const questionId= location.state.id;
  const question=location.state.subject;
const history=useHistory();
    const [subject, setSubject] = useState(`RE:${question}`);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
   const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  function handleComment(){
    const raw = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    axios.post("http://localhost:8085/api/comment",{
      "comment":subject,
      "body":raw,
      "date":Date.now(),
      "question":{
          "questionId":questionId
      }
  }).then((response)=>{
history.push("/welcome",{questionId:questionId})
    })
  }
    return (
        <div className="imageCSS">
        <div className="container mt-4 styleContainer">
          <div className="h1">Reply To Message</div>
          <div className="container w-75">
            <div className="row m-2 ">
              <div className="col">Subject</div>
            </div>
            <div className="row m-2 ">
              <div className="col">
                <input className="form-control" type="text" name="subject"  value={`RE:${question}`} readOnly/>
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
                   height:'200px',
                    backgroundColor: "white",
                   
                  }}
                  name="question"
                />
              </div>
            </div>
            <div className="row mt-4 text-center">
              <div className="col">
                <Link to="/welcome" className="btn btn-dark rounded-pill m-2">
                  Cancel
                </Link>
                <button className="btn btn-dark rounded-pill" onClick={handleComment}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
