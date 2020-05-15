import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useLoginStatus from "../hooks/useLoginStatus";

export default function Main() {
  const user = useSelector((state) => state.user);

  useLoginStatus(false);

  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
      {!user.username && (
        <p>
          <Link to="/register">Register</Link>
        </p>
      )}
      {user.username && (
        <p>
          <Link to="/profile">Profile</Link>
        </p>
      )}
    </div>
  );
}
