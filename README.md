# first-graphql-demo
### start backend json server

`npm run json:server`

### start graphql application

`npm run dev`

### access graphiql

http://localhost:4000/graphql

### sample queries and mutations
```
# mutation
mutation {
  addUser(firstName: "Tim", age: 20) {
    id
  }
}

# query
{
  user(id: "wazBkVo") {
    firstName
  }
}
```

# lyrical-graphQL
This application is using MongoDB Atlas by default

### start application
`npm run dev`

### access application
http://localhost:4000

# auth-graphql-starter
This application is using MongoDB Atlas by default

### start application
`npm run dev`

### access application
http://localhost:4000