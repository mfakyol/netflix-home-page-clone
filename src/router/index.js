import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import tr from "../languages/tr.json";
import tr_en from "../languages/tr-en.json";
import Home from "../components/views/home/Home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/tr/:path?">
          <Switch>
            <Route
              path="/tr"
              exact
              render={(props) => <Home {...props} language={tr} />}
            />
          </Switch>
        </Route>
        <Route path="/tr-en/:path?">
          <Switch>
            <Route
              path="/tr-en"
              exact
              render={(props) => <Home {...props} language={tr_en} />}
            />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};