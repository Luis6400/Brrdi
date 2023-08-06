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
        addUser(userName: String!, email: String!, password: String!, bio: String): Auth
        addChrrp(chrrpText: String!, parentChrrpId: ID): Chrrp
        deleteChrrp(chrrpId: ID!): Chrrp
        addchrrpLikes(chrrpId: ID!): Chrrp
        followUser(userIdToFollow: ID!): User
    }
    type User {
        _id: ID
        userName: String
        email: String
        chrrps: [Chrrp]
        followers: [ID]
        following: [ID]
        bio: String
    }
    type Chrrp {
        _id: ID
        chrrpText: String
        chrrpAuthor: String
        chrrpDate: String
        chrrpLikes: Int
        chrrpRechrrps: Int
        parentChrrp: Chrrp
        deleted: Boolean
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
