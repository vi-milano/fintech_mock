import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { worker } from "./mocks/browser";
import { ApolloClient, gql, NormalizedCacheObject } from "@apollo/client";
import { cache } from "./cache";

worker.start();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://mock/graphql",
});

client
  .query({
    query: gql`
      query MockTest {
        user {
          firstName
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
