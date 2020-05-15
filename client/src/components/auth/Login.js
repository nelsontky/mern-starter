import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Errors from "../Errors";
import { login } from "../../apis/auth";
import setCurrentUser from "../../actions/setCurrentUser";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    login(username, password).then((res) => {
      if (res.status === 200) {
        dispatch(setCurrentUser(res.data.user));
        history.push("/profile");
      } else {
        setErrors(res.data);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Errors errors={errors} />
    </div>
  );
}

export default Register;
