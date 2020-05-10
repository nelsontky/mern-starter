export default (state, action) => {
  switch (action.type) {
    case "SET_RED":
      return { color: "red" };
    case "SET_BLUE":
      return { color: "blue" };
    default:
      return state;
  }
};
