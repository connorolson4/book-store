const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
        _id: ID!
    }
    type Auth {
        token: String,
        user: User
    }
    input saveBookContent {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }
    type Query {
        me : User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        saveBook(input: saveBookContent!): User
        removeBook(bookId: String!): User
    }
    `;

    module.exports = typeDefs;