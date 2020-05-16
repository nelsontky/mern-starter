import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import Phone from "./components/Phone";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/phone" component={Phone} />
        <Route component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
