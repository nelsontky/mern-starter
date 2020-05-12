import { SET_CURRENT_USER } from "./types";

export default (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
