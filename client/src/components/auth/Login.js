import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../../apis/auth";
import setCurrentUser from "../../actions/setCurrentUser";

function Register() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    login(username, password).then((res) => {
      dispatch(setCurrentUser(res.data.user));
      setRedirect("/profile");
    });
  };

  const onChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <form onSubmit={onSubmit}>
      <p>{user.username ? user.username : ""}</p>
      <div>
        <label>Email:</label>
        <input id="username" value={username} onChange={onChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          id="password"
          value={password}
          onChange={onChange}
          type="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Register;
