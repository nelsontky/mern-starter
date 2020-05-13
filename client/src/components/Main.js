import React, { useReducer } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
