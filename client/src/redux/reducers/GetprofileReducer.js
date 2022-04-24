import { GET_PROFILE, GET_ERROR } from "../types";

const initialState = {
  name: null,
  branch: null,
  college: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        branch: action.payload.branch,
        college: action.payload.college,
      };
    case GET_ERROR:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
