import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header";
import ComponentB from "./subpages/ComponentB";
import IndexPage from "./subpages/ComponentA"

export default function BasicRouter() {
  return (
    <Router>
      <Header/>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Switch>
        <Route exact path="/">
          <IndexPage/>
        </Route>
        <Route path='/componentb'>
          <ComponentB/>
        </Route>
      </Switch>
    </Router>
  );
}
