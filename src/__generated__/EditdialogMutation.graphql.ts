/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateRepositoryInput = {
    repositoryId: string;
    name?: string | null;
    description?: string | null;
    template?: boolean | null;
    homepageUrl?: unknown | null;
    hasWikiEnabled?: boolean | null;
    hasIssuesEnabled?: boolean | null;
    hasProjectsEnabled?: boolean | null;
    clientMutationId?: string | null;
};
export type EditdialogMutationVariables = {
    input: UpdateRepositoryInput;
};
export type EditdialogMutationResponse = {
    readonly updateRepository: {
        readonly clientMutationId: string | null;
        readonly repository: {
            readonly name: string;
            readonly description: string | null;
        } | null;
    } | null;
};
export type EditdialogMutation = {
    readonly response: EditdialogMutationResponse;
    readonly variables: EditdialogMutationVariables;
};



/*
mutation EditdialogMutation(
  $input: UpdateRepositoryInput!
) {
  updateRepository(input: $input) {
    clientMutationId
    repository {
      name
      description
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditdialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRepositoryPayload",
        "kind": "LinkedField",
        "name": "updateRepository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditdialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateRepositoryPayload",
        "kind": "LinkedField",
        "name": "updateRepository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Repository",
            "kind": "LinkedField",
            "name": "repository",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e96a550984c620a217a2fe1b67d575e",
    "id": null,
    "metadata": {},
    "name": "EditdialogMutation",
    "operationKind": "mutation",
    "text": "mutation EditdialogMutation(\n  $input: UpdateRepositoryInput!\n) {\n  updateRepository(input: $input) {\n    clientMutationId\n    repository {\n      name\n      description\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a55450a5a69142eb101eaeeb3bcaeed5';
export default node;
