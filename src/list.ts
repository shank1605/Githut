const graphql = require('babel-plugin-relay/macro');
export const RepositoryNameQuery = graphql`
query listRepositoryNameQuery($first:Int,$after:String!){
  ...homelistUserComponent_homelist@arguments(first: $first, after: $after)
}`;

export default RepositoryNameQuery;