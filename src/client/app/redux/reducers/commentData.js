import { APPLICATION_ROUTES } from "../../constants";

const defaultState = {
  comments: undefined,
};

export default (state = defaultState, { type, data }) => {
  switch (type) {
    case APPLICATION_ROUTES.COMMENT_LIST:
      return Object.assign({}, state, {
        comments: data,
      });
    default:
      return state;
  }
};
