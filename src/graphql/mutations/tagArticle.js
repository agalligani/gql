import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";

export const tagArticle = (data, auth_token, session_token) => {
  console.log(data);
  return gqlClient(auth_token, session_token).mutate({
    variables: data,
    mutation: gql`
      mutation($articleId: String!, $termIds: [String]!) {
        tagArticle(articleId: $articleId, termIds: $termIds) {
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
