import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";

export const articleListByTerm = (
  term,
  vocab = "tags",
  offset = 0,
  limit = 10,
  type = "article"
) => {
  return gqlClient().query({
    variables: {
      term: term,
      vocab: vocab,
      offset: offset,
      limit: limit,
      type: type,
    },
    query: gql`
      query(
        $term: String!
        $vocab: String!
        $offset: Int!
        $limit: Int!
        $type: String!
      ) {
        nodeQuery(
          offset: $offset
          limit: $limit
          filter: {
            conditions: [
              { operator: EQUAL, field: "type", value: [$type] }
              { operator: EQUAL, field: "status", value: ["1"] }
              {
                operator: EQUAL
                field: "field_tags.entity.vid"
                value: [$vocab]
              }
              {
                operator: EQUAL
                field: "field_tags.entity.name"
                value: [$term]
              }
            ]
          }
        ) {
          entities {
            entityLabel
            entityBundle
            entityId
            entityUrl {
              path
            }
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
};
