const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(userName: String!): User
        chrrps(userName: String): [Chrrp]
        chrrp(chrrpId: ID!): Chrrp
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(userName: String!, email: String!, password: String!): Auth
        addChrrp(chrrpText: String!, parentChrrpId: ID): Chrrp
        deleteChrrp(chrrpId: ID!): Chrrp
        addchrrpLikes(chrrpId: ID!): Chrrp
        addRechrrps(chrrpId: ID!): Chrrp
        followUser(userName: String!): User
        deletereChrrps(chrrpId: ID!): Chrrp
    }
    type User {
        _id: ID
        userName: String
        email: String
        chrrps: [Chrrp]
        followers: [User]
        following: [User]
    }
    type Chrrp {
        _id: ID
        chrrpText: String
        chrrpAuthor: String
        chrrpDate: String
        chrrpLikes: Int
        chrrpRechrrps: Int
        parentChrrp: ID
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
