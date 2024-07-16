import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header";
import Requirements from "./subpages/Requirements.js";
import IndexPage from "./subpages/LogPage"

export default function BasicRouter() {
  return (
    <Router>
      <Header/>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Switch>
        <Route exact path="/">
          <IndexPage/>
        </Route>
        <Route path='/requirements'>
          <Requirements/>
        </Route>
      </Switch>
    </Router>
  );
}
