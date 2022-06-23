import { GET_PROFILE, GET_ERROR } from "../types";
import axios from "axios";

export const profiledata = () => async (dispatch) => {
  try {
    const res = await axios.get("https://pdffinderapi.herokuapp.com/profile/");
    console.log("data", res.data);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
