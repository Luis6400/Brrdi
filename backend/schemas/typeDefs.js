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
        addChrrp(chrrpText: String!): Chrrp
        deleteChrrp(chrrpId: ID!): Chrrp
        addComment(chrrpId: ID!, commentText: String!): Chrrp
        deleteComment(chrrpId: ID!, commentId: ID!): Chrrp
        addchrrpLikes(chrrpId: ID!): Chrrp
        addCommentLikes(chrrpId: ID!, commentId: ID!): Chrrp
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
        comments: [Comment]
    }
    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        commentDate: String
        commentLikes: Int
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;