
const graphql = require('babel-plugin-relay/macro');
export const RepositoryNameQuery = graphql`
query listRepositoryNameQuery($first:Int,$after:String!){
  ...homelistUserComponent_homelist@arguments(first: $first, after: $after)
}`;


// export const listfragement = graphql`
//  fragment listUserComponent_list on Query @argumentDefinitions(first: {type: "Int"} after: {type: "String"}) 
//     @refetchable(queryName: "RepositoryNameQuery") {
//       viewer{
//       repositories(first: $first, after: $after) @connection(key: " listUserComponent_repositories") {
//         edges {
//           cursor
//           node {
//            id
//     	url
//     nameWithOwner
//      isPrivate 
//         collaborators{
//           totalCount
//         }
//         issues(first:10){
//         	totalCount
//           nodes{
//             id
//           	url
//           }

//         }

//        }

//       }
//       pageInfo{
//         endCursor
//         hasNextPage
//       }
//       }
//     }
//   }`;

export default RepositoryNameQuery;