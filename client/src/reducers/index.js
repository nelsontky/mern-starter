import loginReducer from "./loginReducer";

export default (state, action) => {
  return {
    currentUser: loginReducer(state, action),
  };
};
