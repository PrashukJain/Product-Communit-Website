import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
const convertCommentFromJSONToHTML = (text) => {
  return stateToHTML(convertFromRaw(JSON.parse(text)));
};
export { convertCommentFromJSONToHTML };
