import React from "react";
import { useSelector } from "react-redux";

import useLoginStatus from "../hooks/useLoginStatus";

function Profile() {
  const user = useSelector((state) => state.user);

  useLoginStatus();

  return (
    <div>
      <h1>My profile</h1>
      <p>Email: {user.username}</p>
    </div>
  );
}

export default Profile;
