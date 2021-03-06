import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function fetchQuery(operation, variables) {
  const GRAPH_API_ENDPOINT = process.env.REACT_APP_GRAPH_API_ENDPOINT

  const response = await fetch(GRAPH_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })

  return await response.json()
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
