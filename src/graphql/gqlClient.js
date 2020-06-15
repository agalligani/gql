/* graphql/gqlClient.js - (Apollo crap) */

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";
import { GRAPHQL_URL } from "../config";

const gqlClient = (token = null, csrf = null) => {
  token = token ? token : "YWdhbGxpZ2FuaTpDb3dGbG9wIzEyMzQ=";
  csrf = csrf ? csrf : "2qkIFRN1K1WRb-wjnzhixWJ3r9Xre5l_UG4Y0D-dpnk";
  const httpLink = new HttpLink({ uri: GRAPHQL_URL });

  //ApolloLink is needed to set-up Authorization
  const authLink = new ApolloLink((operation, forward) => {
    // const token = localStorage.getItem('auth_token');
    // TODO: store/retrieve tokens in/from local storage, NOT redux store
    operation.setContext({
      headers: {
        authorization: token ? `Basic ${token}` : "",
        "X-CSRF-Token": csrf ? csrf : "",
        Connection: "keep-alive",
      },
    });

    // Call the next link in the middleware chain.
    return forward(operation);
  });

  const handleError = (error) => {
    console.log(error);
  };

  const gqlClient = new ApolloClient({
    link: authLink.concat(httpLink), // Chain authlink with httpLink
    cache: new InMemoryCache(),
    onError: (error) => {
      return handleError(error);
    },
  });

  return gqlClient;
};

export default gqlClient;
