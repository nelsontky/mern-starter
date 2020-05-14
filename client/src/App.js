import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Main from "./components/Main";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
