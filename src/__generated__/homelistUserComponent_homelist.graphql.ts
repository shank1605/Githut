/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import RepositoryName from "./RepositoryName.graphql";
import { FragmentRefs } from "relay-runtime";
export type homelistUserComponent_homelist = {
    readonly viewer: {
        readonly repositories: {
            readonly edges: ReadonlyArray<{
                readonly cursor: string;
                readonly node: {
                    readonly id: string;
                    readonly url: unknown;
                    readonly name: string;
                    readonly nameWithOwner: string;
                    readonly isPrivate: boolean;
                    readonly description: string | null;
                    readonly createdAt: unknown;
                    readonly collaborators: {
                        readonly totalCount: number;
                    } | null;
                    readonly issues: {
                        readonly totalCount: number;
                        readonly nodes: ReadonlyArray<{
                            readonly id: string;
                            readonly url: unknown;
                        } | null> | null;
                    };
                } | null;
            } | null> | null;
            readonly pageInfo: {
                readonly endCursor: string | null;
                readonly hasNextPage: boolean;
            };
        };
    };
    readonly " $refType": "homelistUserComponent_homelist";
};
export type homelistUserComponent_homelist$data = homelistUserComponent_homelist;
export type homelistUserComponent_homelist$key = {
    readonly " $data"?: homelistUserComponent_homelist$data;
    readonly " $fragmentRefs": FragmentRefs<"homelistUserComponent_homelist">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "viewer",
  "repositories"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": RepositoryName
    }
  },
  "name": "homelistUserComponent_homelist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": "repositories",
          "args": null,
          "concreteType": "RepositoryConnection",
          "kind": "LinkedField",
          "name": "__ homelistUserComponent_repositories_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RepositoryEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Repository",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "nameWithOwner",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "isPrivate",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "description",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "createdAt",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "RepositoryCollaboratorConnection",
                      "kind": "LinkedField",
                      "name": "collaborators",
                      "plural": false,
                      "selections": [
                        (v3/*: any*/)
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "first",
                          "value": 10
                        }
                      ],
                      "concreteType": "IssueConnection",
                      "kind": "LinkedField",
                      "name": "issues",
                      "plural": false,
                      "selections": [
                        (v3/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Issue",
                          "kind": "LinkedField",
                          "name": "nodes",
                          "plural": true,
                          "selections": [
                            (v1/*: any*/),
                            (v2/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": "issues(first:10)"
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '1cfcb5d7b93fa1858f4d20496dd5d6d9';
export default node;
