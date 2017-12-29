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
