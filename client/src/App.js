import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Root from "./components/Root";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Root} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
