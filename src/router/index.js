import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import tr from "../languages/tr.json";
import tr_en from "../languages/tr-en.json";
import HomePage from "../components/views/HomePage/Home";
import RedirectComponent from "../components/views/RedirectComponent/RedirectComponent";
import Cv from "../components/views/Cv/Cv";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RedirectComponent}/>
        <Route path="/cv" exact component={Cv}/>

        <Route path="/tr/:path?">
          <Switch>
            <Route
              path="/tr"
              exact
              render={(props) => <HomePage {...props} language={tr} />}
            />
          </Switch>
        </Route>
        <Route path="/tr-en/:path?">
          <Switch>
            <Route
              path="/tr-en"
              exact
              render={(props) => <HomePage {...props} language={tr_en} />}
            />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};
