import {
    Environment,
    Network,
    RecordSource,
    Store,
    Variables,
    RequestParameters,

} from "relay-runtime";


async function fetchRelay(
    params: RequestParameters,
    variables: Variables
) {
    const token = localStorage.getItem('token');
    
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            query: params.text,
            variables
        })
    });


    const json = await response.json();
    if (Array.isArray(json.errors)) {
        console.log(json.errors);
        throw new Error(
            `Error fetching GraphQL query '${params.name
            }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
                json.errors
            )}`
        );
    }
    return json;
}
export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource())
});
