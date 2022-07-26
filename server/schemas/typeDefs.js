const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]!
  }

  type bookSchema {
    _id: ID!
    bookId: String
    authors: [String]!
    description: String
    image: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    User(UserId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(authors: [String]!, title: String!, description: String!): Book
    removeBook(bookId: ID!): bookSchema  
  }
`;

module.exports = typeDefs;
