import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      password,
      password2,
    };

    console.log(newUser);
  };

  const onChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
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
      <div>
        <label>Confirm your password:</label>
        <input
          id="password2"
          value={password2}
          onChange={onChange}
          type="password"
        />
      </div>
    </form>
  );
}

export default Register;
