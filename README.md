# subgraph-pillar-token
This Subgraph is deployed to exposes a GraphQL endpoint to query the events and entities within the Pillar ecosytem based on their [Smart Contract](https://etherscan.io/address/0xe3818504c1b32bf1557b16c238b2e01fd3149c17). There are 2 entities that can be queried right now which is 
* users
* usersCounter
Example Queries will be displayed like this
```
{
  users(first: 5) {
    id
    address
    balance
    transactionCount
  }
  userCounters(first: 5) {
    id
    count
  }
}
```
Find out more [here](https://thegraph.com/explorer/subgraph/cristian164/pillar)
