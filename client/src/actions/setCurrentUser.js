import { SET_CURRENT_USER } from "./types";

export default (user) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
};
