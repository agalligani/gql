import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";
/** ./graphql/queries/articleList.js */
export const articleList = gqlClient.query({
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
            fieldImage {
              url
            }
            queryFieldTags {
              entities {
                entityId
                entityLabel
              }
            }
          }
        }
      }
    }
  `,
});

//export default articleList;
