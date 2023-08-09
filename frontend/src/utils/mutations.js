import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            userName
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($userName: String!, $email: String!, $password: String!) {
        addUser(userName: $userName, email: $email, password: $password) {
        token
        user {
            _id
            userName
        }
        }
    }
`;

export const ADD_CHRRP = gql`
    mutation addChrrp($chrrpText: String!, $parentChrrpId: ID) {
        addChrrp(chrrpText: $chrrpText, parentChrrpId: $parentChrrpId) {
        _id
        chrrpText
        chrrpAuthor
        chrrpDate
        chrrpLikes
        chrrpRechrrps
        parentChrrp {
            _id
            chrrpText
            chrrpAuthor
            chrrpDate
            chrrpLikes
            chrrpRechrrps
        }
        deleted
        }
    }
`;

export const DELETE_CHRRP = gql`
    mutation deleteChrrp($chrrpId: ID!) {
        deleteChrrp(chrrpId: $chrrpId) {
        _id
        parentChrrp {
            _id
        }
        }
    }
`;

export const ADD_CHRRP_LIKES = gql`
    mutation addchrrpLikes($chrrpId: ID!) {
        addchrrpLikes(chrrpId: $chrrpId) {
            _id
            chrrpLikes
        }
    }
`;

export const FOLLOW_USER = gql`
    mutation followUser($userIdToFollow: ID!) {
        followUser(userIdToFollow: $userIdToFollow) {
            _id
            following
            followers
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($userId: ID!, $userName: String, $password: String, $bio: String) {
        updateUser(userId: $userId, userName: $userName, password: $password, bio: $bio) {
            _id
            userName
            email
            bio
        }
    }
`;













