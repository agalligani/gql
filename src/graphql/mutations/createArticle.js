import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";

export const createArticle = (article, auth_token, session_token) => {
  return gqlClient(auth_token, session_token).mutate({
    variables: article,
    mutation: gql`
      mutation($title: String!, $body: String!) {
        createArticle(input: { title: $title, body: $body }) {
          entity {
            entityId
            entityUrl {
              path
              routed
            }
          }
          errors
          violations {
            path
            message
          }
        }
      }
    `,
  });
};
