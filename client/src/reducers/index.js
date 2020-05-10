import colorReducer from "./colorReducer";

export default (state, action) => {
  return {
    color: colorReducer(state, action),
  };
};
