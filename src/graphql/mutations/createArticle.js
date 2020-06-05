import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";
export const createArticle = gqlClient.query({
  query: gql`
    {
      nodeQuery(
        limit: 10
        offset: 10
        filter: {
          conditions: [{ operator: EQUAL, field: "type", value: ["article"] }]
        }
      ) {
        entities {
          entityLabel
          entityBundle
          ... on NodeArticle {
            body {
              value
            }
          }
        }
      }
    }
  `,
});
