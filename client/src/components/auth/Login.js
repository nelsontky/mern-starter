import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../apis/auth";
import setCurrentUser from "../../actions/setCurrentUser";

function Register() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    login(username, password).then((res) => {
      if (res.status === 200) {
        dispatch(setCurrentUser(res.data.user));
        history.push("/profile");
      }
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

  return (
    <form onSubmit={onSubmit}>
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
