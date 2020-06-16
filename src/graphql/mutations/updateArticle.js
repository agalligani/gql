import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";

export const updateArticle = (id, article, auth_token, session_token) => {
  return gqlClient(auth_token, session_token).mutate({
    variables: { id: id, input: article },
    mutation: gql`
      mutation($id: String!, $input: ArticleInput!) {
        updateArticle(id: $id, input: $input) {
          entity {
            entityId
            entityUrl {
              path
            }
          }
        }
      }
    `,
  });
};
