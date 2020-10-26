import React from "react";
import "./App.css";
import Main from "./components/Layouts/Main/Main";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Views/Dashboard/Dashboard";

function Dummy() {
  return <div>This is a dummy component.</div>;
}

function App() {
  return (
    <Main>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/*" component={Dummy} />
      </Switch>
    </Main>
  );
}

export default App;
