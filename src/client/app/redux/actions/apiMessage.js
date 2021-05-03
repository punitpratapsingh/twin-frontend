/**
 * dispatch the fetch action
 */
import { API_MESSAGE } from "./actionTypes";

export default ({ code = undefined, message = '' }) => {
  return { type: API_MESSAGE, code, message };
};
