import React, { useReducer } from "react";
import { Link } from "react-router-dom";

export default function Root() {
  const [state, dispatch] = useReducer((state, action) => {
    return {
      test: "hello",
    };
  }, {});
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
      <button
        onClick={() => {
          dispatch({ type: "test" });
          console.log(state);
        }}
      >
        Dispatch
      </button>
    </div>
  );
}
