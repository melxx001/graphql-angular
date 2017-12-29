[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# graphql

From https://www.howtographql.com/angular-apollo/0-introduction/

# Tutorial

## Cluster

```
Types

  Link
   + A new type with the name `Link` is created.
   ├─ +  A new field with the name `createdAt` and type `DateTime!` is created.
   ├─ +  A new field with the name `updatedAt` and type `DateTime!` is created.
   ├─ +  A new field with the name `description` and type `String!` is created.
   └─ +  A new field with the name `url` and type `String!` is created.

Resolver Functions

  hello
   + A new resolver function with the name `hello` is created.

Permissions

  Wildcard Permission
   ? The wildcard permission for all operations is added.

Here are your GraphQL Endpoints:

  Simple API:        http://localhost:60000/simple/v1/cjbpmoqn4009u0194y8lht7og
  Relay API:         http://localhost:60000/relay/v1/cjbpmoqn4009u0194y8lht7og
  Subscriptions API: ws://localhost:60000/subscriptions/v1/cjbpmoqn4009u0194y8lht7og
```

## Queries/Mutations

```
mutation CreateGraphcoolLink {
  createLink(
    description: "The coolest GraphQL backend 😎",
    url: "https://graph.cool") {
    id
  }
}

mutation CreateApolloLink {
  createLink(
    description: "The best GraphQL client",
    url: "http://dev.apollodata.com/") {
    id
  }
}
```

```
{
  allLinks {
    id
    description
    url
  }
}
```

## Installing Apollo

* apollo-client is the Apollo Client library
* apollo-angular contains the bindings to use Apollo Client with Angular.
* graphql-tag is a GraphQL parser. Every GraphQL operation you hand over to Apollo Client will have to be parsed by the gql function.
* apollo-angular-link-http provides a similar HttpLink to Apollo’s HttpLink with one difference, it uses Angular’s HttpClient.
* apollo-cache-inmemory is a cache implementation that supports all of Apollo Client 1.0’s features without the dependency on Redux.
* graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality as well.
