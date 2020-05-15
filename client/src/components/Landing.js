import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../apis/auth";
import useLoginStatus from "../hooks/useLoginStatus";

export default function Main() {
  const user = useSelector((state) => state.user);

  useLoginStatus(false);

  return (
    <div>
      <h1>MERN starter</h1>
      {user.username ? (
        <div>
          <p>
            <Link to="/profile">Profile</Link>
          </p>
          <p>
            <Link
              to="/"
              onClick={() => {
                logout();
                window.location.reload();
              }}
            >
              Logout
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/register">Register</Link>
          </p>
        </div>
      )}
    </div>
  );
}
