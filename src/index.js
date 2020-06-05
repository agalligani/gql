//import { articleList } from "./graphql";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore, saveToLocalStorage } from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// /* Apollo crap */
// import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
// import { setContext } from "apollo-link-context";
// import { gql } from "apollo-boost";
// import { onError } from "apollo-link-error";

// const httpLink = new HttpLink({ uri: "http://gqllocal/graphql" });
// const token = "zSfjL5Fz3CoJT1a8eVReSjfHpnjyexcvMOHJIJUJVB4";
// const headers = { Authorization: `Basic ${token}` };

// const client = new ApolloClient({
//   link: httpLink,
//   headers: headers,
//   cache: new InMemoryCache(),
//   onError: (error) => {
//     return handleError(error);
//   },
// });

// const handleError = (error) => {
//   console.log(error);
// };

// client
//   .query({
//     query: gql`
//       {
//         nodeQuery(
//           limit: 10
//           offset: 10
//           filter: {
//             conditions: [{ operator: EQUAL, field: "type", value: ["article"] }]
//           }
//         ) {
//           entities {
//             entityLabel
//             entityBundle
//             ... on NodeArticle {
//               body {
//                 value
//               }
//             }
//           }
//         }
//       }
//     `,
//   })
// articleList.then(({ data }) => console.log({ data }));
