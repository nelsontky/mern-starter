import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Errors from "../Errors";
import { register } from "../../apis/auth";
import setCurrentUser from "../../actions/setCurrentUser";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    register(username, password, password2).then((res) => {
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
        <div>
          <label>Confirm your password:</label>
          <input
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Errors errors={errors} />
    </div>
  );
}

export default Register;
