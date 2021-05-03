/**
 * @description
 * experimental common function to  handle the commmonly
 * used redux action that handles the reducing on the
 * basis of the endpoints.
 */
import axios from "axios";
import { fetchAction, apiMessageAction } from ".";

const headers = {
  "Content-Type": "application/json",
};

/**
 * trigger fetch entity function
 * @param {*} param0
 */
export const genericHitEndpoint = ({ endpoint, payload }) => (
  dispatch
) => {
  if (!endpoint) {
    return dispatch(error({ error: "Required endpoint is missing." }));
  }
  dispatch(fetchAction({ fetching: true }));
  const body = Object.assign({}, payload);

  axios
    .post(endpoint, body, { headers })
    .then((response) => {
      const {
        data: { data, message },
      } = response;
        dispatch({
          type: endpoint,
          data,
        });
      console.log(response);
      dispatch(apiMessageAction({ code: 200, message: message }));
      dispatch(fetchAction({ fetching: false }));
    })
    .catch((err) => {
      console.error(err);
      dispatch(apiMessageAction({ code: 400, message: err }));
      dispatch(fetchAction({ fetching: false }));
      dispatch(error({ error: "Error while hiting endpoint." }));
    });
};
