import ActionTypes from "../actions/types";

const counter = (state = 1, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
