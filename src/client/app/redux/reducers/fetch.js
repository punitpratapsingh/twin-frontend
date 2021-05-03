/**
 * The reducer for fetching event
 * @author Santgurlal Singh sharma
 */

import { FETCHING } from "../actions/actionTypes";

export default (state = false, { type, fetching = false }) => {
  switch (type) {
    case FETCHING:
      return fetching;
    default:
      return state;
  }
};
