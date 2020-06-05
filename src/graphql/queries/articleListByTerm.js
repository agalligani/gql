import gqlClient from "../gqlClient";
import { gql } from "apollo-boost";
/** ./graphql/queries/articleListByTaxonomy.js */
const bundle = "article";
const PUBLISHED = "1";
let vocabulary = "tags";
let term = "thiphif";

export const articleListByTerm = gqlClient.query({
  query: gql`
    {
      nodeQuery(limit: 10, offset: 0) {
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

//     {
//       nodeQuery(
//         limit: 10
//         offset: 0
//         filter: {
//           conditions: [
//             { operator: EQUAL, field: "type", value: [${bundle}] }
//             { operator: EQUAL, field: "status", value: [${PUBLISHED}] }
//             { operator: EQUAL, field: "field_tags.entity.vid", value: [${vocabulary}] }
//             {
//               operator: EQUAL
//               field: "field_${vocabulary}.entity.name"
//               value: [${term}]
//             }
//           ]
//         }
//       ) {
//         entities {
//           entityLabel
//           entityBundle
//           ... on NodeArticle {
//             body {
//               value
//             }
//             fieldImage {
//               url
//             }
//             queryFieldTags {
//               entities {
//                 entityId
//                 entityLabel
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
// });

//export default articleList;
