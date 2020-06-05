/*
this is a route query showing path alias
{
    route(path: "/node/1") {
      alias
}
*/

/*
getting context info on a route!

{
  route(path: "/my-node-query-alias") {
    ... on EntityCanonicalUrl {
      nodeContext {
        entityBundle
      }
      languageInterfaceContext {
        id
        name
      }
    }
  }
}
*/
