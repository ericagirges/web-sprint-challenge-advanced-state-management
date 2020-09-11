import axios from "axios";

// GET REQUEST ACTION TYPES
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERRORS = "FETCH_SMURFS_ERRORS";

// ACTION CREATORS
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_SMURFS_ERRORS,
          payload: { message: "Oh my smurf. Well this is just embarrasssing." },
        });
      });
  };
};
