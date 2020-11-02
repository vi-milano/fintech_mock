import React from "react";
import "./App.css";
import Main from "./components/Layouts/Main/Main";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Views/Dashboard/Dashboard";
import Statement from "./components/Views/Statement/Statement";
import Cards from "./components/Views/Cards/Cards";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "./cache";

function App() {
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: "http://mock/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Main>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/extrato" component={Statement} />
          <Route path="/cartoes" component={Cards} />
          <Route path="/*" component={() => <Redirect to="/dashboard" />} />
        </Switch>
      </Main>
    </ApolloProvider>
  );
}

export default App;
