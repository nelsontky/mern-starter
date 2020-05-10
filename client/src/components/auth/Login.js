import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    console.log(userData);
  };

  const onChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
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
