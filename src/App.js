import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Empty from "./Components/EmptyLogin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login/:id" exact component={Login} />
        <Route path="/login/" exact component={Empty} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
