const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!) : User
    savedBooks(username: String): [Book]!
    savedBook(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: ID!): Book  
  }
`;

module.exports = typeDefs;
