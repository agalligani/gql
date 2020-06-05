/* graphql/gqlClient.js - (Apollo crap) */

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { GRAPHQL_URL } from "../config";

const httpLink = new HttpLink({ uri: GRAPHQL_URL });
const token = "zSfjL5Fz3CoJT1a8eVReSjfHpnjyexcvMOHJIJUJVB4";
const headers = {
  Authorization: `Basic ${token}`,
  "Cache-Control": "no-cache",
};

const handleError = (error) => {
  console.log(error);
};

const gqlClient = new ApolloClient({
  link: httpLink,
  headers: headers,
  cache: new InMemoryCache(),
  onError: (error) => {
    return handleError(error);
  },
});

export default gqlClient;
