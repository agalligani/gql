import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";
/** ./graphql/queries/articleList.js */
let tagEntityId = 2;
export const taxonomyList = gqlClient.query({
  query: gql`
    {
      taxonomyTermQuery(
        limit: 20
        offset: 0
        filter: {
          conditions: [{ operator: EQUAL, field: "vid", value: ["tags"] }]
        }
      ) {
        entities {
          entityLabel
        }
      }
    }
  `,
});

//export default articleList;
