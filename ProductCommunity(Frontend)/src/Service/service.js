import axios from "axios";

function getQuestion(questionId) {
  return axios.get(`http://localhost:8085/api/getQuestion?id=${questionId}`);
}

export { getQuestion };
